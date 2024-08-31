import React from 'react'
import NormalH from '../../../../../RepeatedCode/tags/NormalH'
import UserExperienceCard from '../../../../BothUserPages/UserExperienceCard/UserExperienceCard'


const ExperienceSection = (props) => {
    console.log(props)
  return (
    <div className="bg-white px-6 rounded shadow-md py-4 my-4">
          <div className="mb-6">
          <NormalH heading={"Experience Details"}/>
            {props?.experiences?.map((experience, index) => (
              <UserExperienceCard experience={experience} key={index} />
            ))}
          </div>
        </div>
  )
}

export default ExperienceSection
