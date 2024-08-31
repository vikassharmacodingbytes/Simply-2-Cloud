import React from 'react'
import Heading from '../../../../../RepeatedCode/tags/Heading'

const InSkills = ({internProfileFullDetails}) => {
  return (
    internProfileFullDetails?.profile_details?.skills && internProfileFullDetails?.profile_details?.skills.length !=0 ?
      <>
      <div className='mt-10'>
      <h1 className='font-semibold text-xl text-gray-700 mb-4'>Skills</h1>

      <div>
        {internProfileFullDetails?.profile_details?.skills.map((element, index)=>{
          return <button className='px-2 py-1 border border-solid border-gray-300 hover:bg-gray-50 text-gray-700 rounded-xl mr-2'>{element.skill_name}</button>
        })}
      </div>
      </div>
</> : null
  )
}

export default InSkills
