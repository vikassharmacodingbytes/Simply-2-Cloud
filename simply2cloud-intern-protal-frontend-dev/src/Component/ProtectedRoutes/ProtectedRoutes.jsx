import Cookies from 'js-cookie'
import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const ProtectedRoutes = () => {

  const navigate = useNavigate();

    useEffect(()=>{
        if (!Cookies.get('token') || !Cookies.get("user") == "user"){
            return navigate("/login");
        }
    },[])


  return (
    <Outlet />
  )
}

export default ProtectedRoutes
