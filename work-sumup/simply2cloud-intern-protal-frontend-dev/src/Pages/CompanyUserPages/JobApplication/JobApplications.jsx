import React, { useContext, useEffect } from 'react'
import { DataContext } from '../../../context';
import LoadingPage from '../../../Component/LoadingPage/LodingPage';
import NoDataPage from '../../../Component/NoDataPage/NoDataPage';
import InternJobAppliedCard from '../../BothUserPages/JobAppliedCard/JobAppliedCard';
import { ToastContainer } from 'react-toastify';
import InternProfileCard from '../../BothUserPages/InProfileCard/InProfileCard';
import JobApplicationCard from './JobApplicationCard';

const JobApplications = () => {

  const { getJobApplicationFunc, jobApplication } = useContext(DataContext);
  useEffect(() => {
    getJobApplicationFunc()
  }, [])

  if (!jobApplication) {
    return <LoadingPage />
  }
  return (
    <>
    {console.log(jobApplication)}
      <ToastContainer />
      {jobApplication.length == 0 ? <div className='h-[75vh] flex items-center justify-center'> <NoDataPage domain={"Sorry No Canditate Applied"} /> </div> :
        <div className='md:mx-[2rem] md:my-[2rem] grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 gap-y-10 gap-x-4'>
          {jobApplication.map((element, index) => {
            return (
              <JobApplicationCard jobApplication={element}/>
              // <InternJobAppliedCard jobApplication={element} />
            )
          })}
        </div>
      }

    </>

  )
}

export default JobApplications
