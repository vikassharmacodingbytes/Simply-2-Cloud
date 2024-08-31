import React, { useContext, useEffect } from 'react'
import LoadingPage from '../../../Component/LoadingPage/LodingPage';
import NoDataPage from '../../../Component/NoDataPage/NoDataPage';
import InternApplicationCard from './InternApplicationCard/InternApplicationCard';
import { DataContext } from '../../../context';

const MyApplicationPg = () => {

    const { jobApplication, getJobApplicationFunc } = useContext(DataContext);

    useEffect(() => {
        getJobApplicationFunc();

    }, [])

    if (!jobApplication) {
        return <LoadingPage />
    }

    return (
        <>
{console.log(jobApplication)}

            {
                jobApplication?.length == 0 ? <NoDataPage domain={"You have not applied in any jobs"} /> :
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-4'>
                        {jobApplication?.map((element, index) => {
                            return <InternApplicationCard jobApplication={element} key={index} />
                        })}
                    </div>
            }
        </>
    )
}

export default MyApplicationPg
