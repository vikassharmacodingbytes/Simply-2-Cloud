import React, { useContext, useEffect } from 'react';
import { DataContext } from '../../../../context';
import LoadingPage from '../../../../Component/LoadingPage/LodingPage';
import InternJobAppliedCard from '../../../BothUserPages/JobAppliedCard/JobAppliedCard';
import NoDataPage from '../../../../Component/NoDataPage/NoDataPage';
import JobApplicationCard from '../JobApplicationCard';

const ApprovedApplication = () => {

    const { getJobApplicationFunc,approvedApplication } = useContext(DataContext);
    useEffect(()=>{
        getJobApplicationFunc("Accepted")
    },[])

    if(!approvedApplication){
        return <LoadingPage />
    }
  return (
    

    approvedApplication.length == 0 ? <div className='h-[75vh] flex items-center justify-center'> <NoDataPage domain={"Sorry No Canditate Applied"} /> </div>:
    approvedApplication.map((element, index)=>{
        return <div className='mx-[2rem] my-[2rem] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-10'>
        <JobApplicationCard jobApplication={element} />
        </div>
    })
   
  )
}

export default ApprovedApplication
