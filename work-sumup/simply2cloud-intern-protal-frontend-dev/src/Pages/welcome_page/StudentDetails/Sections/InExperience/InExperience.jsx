import React from 'react'
import Heading from '../../../../../RepeatedCode/tags/Heading'
import LocationIc from '../../../../../image/location'
import { format } from 'date-fns'

const InExperience = ({ internProfileFullDetails }) => {
    return (
        internProfileFullDetails?.experience_details && internProfileFullDetails?.experience_details.length != 0 ?
            <>
                <div className='mt-10 text-sm md:text-base'>
                    <h1 className='font-semibold md:text-2xl text-xl text-gray-700 mb-4'>
                        Experience
                    </h1>
                    <div>
                        {internProfileFullDetails?.experience_details?.map((element, index) => {
                            return <div className=' shadow-xl px-4 py-3 rounded-xl border-2 border-solid border-gray-300 my-4'>
                                <h1 className='font-bold md:text-lg text-base text-gray-800 md:flex'>
                                    {element.company_name} <span className='font-semibold'>&nbsp;({element.job_categoery.job_category})</span>
                                   <div className='mx-auto'><span className='md:hidden'>Location </span> <LocationIc />{element.location}</div>
                                </h1>
                                    <div className='md:hidden'>
                                        <br />
                                    </div>
                                <div>
                                    <p>
                                        [  <span className='font-semibold text-gray-700'>Position: </span>{element.sub_categoery.sub_category_name}]
                                        <br />
                                        [  <span className='font-semibold text-gray-900'>Duration: </span><span className='font-semibold text-gray-600'>{format(new Date(element.start_date), 'MMMM d, yyyy')} </span>- <span className='font-semibold text-gray-600'> {format(new Date(element.end_date), "MMMM d, yyyy")} </span>]
                                    </p>
                                </div>
                                <div>
                                    <h1 className='font-semibold text-gray-700'>I have Aquired
                                        {element?.skills_accuired?.map((skill, index) => {
                                            return (<React.Fragment>
                                                {index != 0 ? ", " : " "}
                                                <strong>{skill.name}</strong>
                                            </React.Fragment>)
                                        })} Proficiencies there.</h1>
                                </div>
                                <div>
                                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {element.desc}
                                </div>
                            </div>
                        })}
                    </div>
                </div>
            </> : null
    )
}

export default InExperience
