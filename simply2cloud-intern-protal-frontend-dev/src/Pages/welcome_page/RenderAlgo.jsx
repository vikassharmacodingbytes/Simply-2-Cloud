import React, { useContext, useEffect } from 'react'
import AdLandingPage from './LandingPage/AdLandingPage';
import NmUnAuthJobsPage from './NmGetPaid/NmUserJobs/NmUserJobs';
import Cookies from "js-cookie";
import { DataContext } from '../../context';

const RenderAlgo = () => {

  const { profileFunc } = useContext(DataContext);
  useEffect(()=>{
    if(Cookies.get('token')){
      profileFunc();
    }
  },[])
  return (
    Cookies.get("user_type") == "user" ?  <NmUnAuthJobsPage />: <AdLandingPage /> 
  )
}

export default RenderAlgo
