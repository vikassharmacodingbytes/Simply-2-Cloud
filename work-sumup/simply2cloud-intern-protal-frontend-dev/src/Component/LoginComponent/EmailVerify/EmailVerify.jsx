import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import API_BASE_URL from '../../../config';
import { CircularProgress } from '@mui/material';
import successImg from '../../../image/giphy.gif'

const EmailVerify = () => {

    const { userid_encode, verify_token } = useParams();
    const [loadingButton , setLoadingButton] = useState(false);
    const [isVerify, setIsVerify] = useState(false);
    const [isExpire, setIsExpire] = useState(false); 
    const navigate = useNavigate();

    const verifyFunc = () => {
        setLoadingButton(true);
        axios
            .post(`${API_BASE_URL}/accounts/activate/${userid_encode}/${verify_token}/`,{activate : true})
            .then((value) => {
                console.log(value.data);
                setIsVerify(true);
                toast.success("Verified Successfully", { position: "top-center" });
                setTimeout(() => {
                    navigate("/login");
                }, 3000);
            }).catch((err) => {
                console.log(err);
                setIsExpire(true);
                toast.error("Token Expired", { position : "top-center" });
            }).finally(()=>{
                setLoadingButton(false);
            })
    }

    useEffect(()=>{
        verifyFunc();
    },[])

    return (
        <div>
            <ToastContainer />
            {isVerify ? 
            
            <><div className='h-[60vh] md:w-[100vw] flex items-center justify-center'>
                <img src={successImg} />
            </div>
            <div className=' md:w-[100vw] flex items-center justify-center'>
                <h1 className='text-blue-500 font-bold'>Click Here <NavLink to="/login" className='font-semibold underline'>Login Now</NavLink> </h1>
            </div>
            </>
            :<div className="flex justify-center items-center py-4 h-[80vh]">
                <button
                    onClick={() => {
                        verifyFunc();
                    }}
                    className={`bg-gradient-to-r  hover:to-blue-500 text-white font-semibold py-3 px-6 rounded-full shadow-lg focus:outline-none focus:ring focus:border-blue-300 transition duration-300  ${isExpire ?  'from-red-500 to-orange-500 hover:from-red-500' : ' from-blue-500 to-purple-500 hover:from-purple-500'}` }>
                   {isExpire ? "Token Is Expired" : "Please Wait...."}
                </button>
            </div> 
            }
        </div>
    )
}

export default EmailVerify
