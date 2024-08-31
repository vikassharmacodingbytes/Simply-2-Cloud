import React, { useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import DeleteInternExperience from '../../welcome_page/StudentDetails/Sections/Experience/DeleteExp/DeleteExp';

const InExperienceCard = (props) => {

  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  
    return (
        <>
            <div className='border py-4 px-2'>
                <div className=" items-center justify-between mb-2 border-2 rounded-xl shadow-xl border-solid mt-4 p-4">
                    <div className="text-blue-500 font-bold">
                        Experience Field : {props?.internJobExperienceDetails.job_categoery?.job_category} <span className='font-semibold'>({props?.internJobExperienceDetails.sub_categoery?.sub_category_name})</span>
                    </div>&nbsp;&nbsp;
                    <div className="mr-4 overflow-auto">
                        <span className='font-bold'> Company Name </span>: ({props?.internJobExperienceDetails.company_name})
                    </div>
                    <span className="flex items-center">

                        <div>
                            <span className='font-bold'>
                                Skills : &nbsp;
                                <span className='font-semibold'>
                                    {props?.internJobExperienceDetails?.skills_accuired?.map((element, index) => {
                                        return <span className=" px-2 py-1 rounded-full "> {element.name}</span>
                                    })}
                                </span>
                            </span>
                        </div>
                        {/* <Popup
                                    contentStyle={{ width: "270px" }}
                                    trigger={<button > <EditIcon className="text-green-500" onClick={() => { setCurrentValue(props?.val) }} /> &nbsp;&nbsp;&nbsp;&nbsp; </button>}
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
                                                updateData(props?.label);
                                            }}
                                            className="h-[2.7rem] mx-4 border-blue-500 border text-blue-500 px-2  rounded-md hover:text-white hover:bg-blue-500 transition duration-300"
                                        >
                                            {editButton ? <CircularProgress size={19} color='inherit' /> : <Check />}
                                        </button>
                                    </div>
                                </Popup> */}
                    </span>
                    <div className="text-center mt-4">
             
                        <button 
                        className=" space-x-2 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:border-blue-300"
                        onClick={() => {
                      setShowConfirmDelete(true)
                    }}>
                            <span>Delete</span>
                            <DeleteIcon className="w-5 h-5" />
                        </button>
                    </div>
                </div>
                
                {showConfirmDelete && (
        <DeleteInternExperience setShowConfirmDelete={setShowConfirmDelete} selectedExperienceObj={props.internJobExperienceDetails} />
      )}
            </div>
        </>
    )
}

export default InExperienceCard
