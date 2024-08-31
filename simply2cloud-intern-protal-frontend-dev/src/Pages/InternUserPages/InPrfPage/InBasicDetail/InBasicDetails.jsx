// BasicDetail.js
import React, { useContext, useState } from 'react';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import PersonIcon from '@mui/icons-material/Person';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { Check } from '@mui/icons-material';
import axios from 'axios';
import { CircularProgress } from '@mui/material';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';
import { DataContext } from '../../../../context';
import NormalH from '../../../../RepeatedCode/tags/NormalH';
import API_BASE_URL from '../../../../config';

const InternBasicDetail = (props) => {

    const [currentValue, setCurrentValue] = useState();
    const [editButton, setEditButton] = useState();
    const token = Cookies.get("token");
    const { profileFunc } = useContext(DataContext);

    const user_basic_data = {
        name: {
            "val": props.user_detail.name,
            icon: <PersonIcon />,
            "label": "name"
        },
        user_location : {
            "val": props.user_detail.user_location,
            icon: <LocationOnIcon />,
            label: "user_location"
        },
        phone: {
            "val": props.user_detail.phone,
            icon: <LocalPhoneIcon />,
            label: "phone"
        },
    }

    const updateData = (label) => {
        setEditButton(true);
        const updateData = {
            [label]: currentValue
        }
        console.log(updateData);
        axios.put(`${API_BASE_URL}/profile/`, updateData, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }).then((value) => {
            toast.success("User Information Updated Successfully!!",{position : "top-center"})
        
            profileFunc();
        }).catch((err) => {
            toast.error("Internal Server Error",{position : "top-center"});
        }).finally(() => {
            setEditButton(false);
        })
    }

    return (
        <div className=" col-span-1">
            {/* <ProfileModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} currentEditValue={currentEditValue} /> */}
            <div className="text-blue-500 p-8 rounded-xl shadow-md text-left border-2">
                <div className="mb-6  ">
                    <NormalH heading={"Contact Info"} />
                    {Object.entries(user_basic_data)?.map(([key, element], index) => (
                        <div key={index} className="flex items-center justify-between mb-2 border border-solid mt-4 p-4">
                            <span className="text-blue-500 font-bold">{element.icon}</span>&nbsp;&nbsp;
                            <span className="mr-4 overflow-auto">{element?.val?.length > 12 ? `${element?.val?.substring(0, 12)}...` : element?.val}</span>
                            <span className="flex items-center">
                                <Popup
                                    contentStyle={{ width: "270px" }}
                                    trigger={<button > <EditIcon className="text-green-500" onClick={() => { setCurrentValue(element.val) }} /> &nbsp;&nbsp;&nbsp;&nbsp; </button>}
                                    position={window.innerWidth <= 600 ? "top right" : "right center"}
                                >
                                    <div className='flex '>
                                        <input
                                            type="text"
                                            value={currentValue}
                                             onChange={(e) => {
                                                setCurrentValue(e.target.value);
                                            }}
                                            className=" border-green-500 border p-2  focus:outline-none focus:border-green-600 rounded"
                                        />
                                        <button
                                            onClick={() => {
                                                updateData(element.label);
                                            }}
                                            className="h-[2.7rem] mx-4 border-blue-500 border text-blue-500 px-2  rounded-md hover:text-white hover:bg-blue-500 transition duration-300"
                                        >
                                            {editButton ? <CircularProgress size={19} color='inherit' /> : <Check />}
                                        </button>
                                    </div>
                                </Popup>

                                {/* <button>
                                    <DeleteIcon className="text-red-500" />
                                </button> */}
                            </span>
                        </div>
                    ))}

                
                </div>
            </div>
        </div>
    );
};

export default InternBasicDetail;
