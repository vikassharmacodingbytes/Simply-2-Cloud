import React, { useContext, useEffect } from 'react'
import { DataContext } from '../../../context';
import InternProfileCard from '../../BothUserPages/InProfileCard/InProfileCard';
import LoadingPage from '../../../Component/LoadingPage/LodingPage';
import NoDataPage from '../../../Component/NoDataPage/NoDataPage';

const CompanyWelcomPage = () => {

  const { companyProfileFunc, companyUserDetail } = useContext(DataContext);

  useEffect(() => {
    companyProfileFunc();
  }, [])

  if (!companyUserDetail) {
    return <LoadingPage />
  }

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-10 m-8'>

      {
        companyUserDetail?.intern_job_profile?.length == 0 ? <NoDataPage /> :
          companyUserDetail?.intern_job_profile?.map((element, index) => {
            return <InternProfileCard profile={element} isCompany={true} key={index} />
          })
      }
    </div>
  )
}

export default CompanyWelcomPage