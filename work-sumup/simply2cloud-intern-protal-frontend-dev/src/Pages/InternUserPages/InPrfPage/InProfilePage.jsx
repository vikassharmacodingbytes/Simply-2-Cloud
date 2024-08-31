import React, { useContext, useEffect } from 'react'
import { DataContext } from '../../../context';
import SkeletonLoader from '../../../Component/Loaders/SkeletonLoader';
import InternBasicDetail from './InBasicDetail/InBasicDetails';
import InternJobProfileDisplay from './InJobProfile/InJobProfileDis/InJobProfDis';
import InternSkills from './InSkills/InSkills';
import InExperienceMain from './AdEduc/InExperienceMain';
import { ToastContainer } from 'react-toastify';

const InternProfilePage = () => {

  const { profileFunc, userDetails } = useContext(DataContext);
  useEffect(() => {
    profileFunc();
  }, []);

  if (!userDetails) {
    return <SkeletonLoader />
  }

  return (
    <>
      <ToastContainer />
      <div className='grid grid-cols-1 md:grid-cols-3 my-8 mx-4 gap-10'>
        <InternBasicDetail user_detail={userDetails?.user_details} />
        <div className='border-2 rounded p-4'>
        <InternJobProfileDisplay internJobProfileObj={userDetails?.intern_job_profile} />
        </div>
        <InExperienceMain internJobExperienceDetails={userDetails?.experience_details} />
      </div>
      <InternSkills skills={userDetails.skills_detail} />
    </>
  )
}

export default InternProfilePage
