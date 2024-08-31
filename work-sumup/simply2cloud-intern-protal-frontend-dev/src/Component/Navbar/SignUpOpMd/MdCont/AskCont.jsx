import React from 'react'
import { useNavigate } from 'react-router-dom'

const AskCont = ({setOpen}) => {
    const navigate = useNavigate();
  return (
    <>
    <div className='flex'>
      <button
              className={`mb-3 inline-block w-[80%] mx-auto rounded px-6 pb-2 pt-2.5 font-semibold mt-5 uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]`}
              type="button"
              onClick={()=>{
                  navigate("/company-register");
                  setOpen(false);
              }}
              data-te-ripple-init
              data-te-ripple-color="light"
              style={{
                background: "black",
              }}
            >Join as a company</button>
    </div>
    <div className='flex'>
      <button
              className={`mb-3 inline-block w-[80%] mx-auto rounded px-6 pb-2 pt-2.5 font-semibold  uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]`}
              type="button"
              onClick={()=>{
                  navigate("/signup");
                  setOpen(false);
              }}
              data-te-ripple-init
              data-te-ripple-color="light"
              style={{
                background: "black",
              }}
            >Join as an intern</button>
    </div>
    </>
  )
}

export default AskCont
