import React from 'react'
import NormalH from '../../../../RepeatedCode/tags/NormalH'
import UserSkillsCard from '../../../BothUserPages/UserSkillsCard/UserSkillsDetailCd'

const SkillSection = (props) => {
  return (
    <div className="bg-white px-6 rounded shadow-md py-4">
          <div className="mb-6">
          <NormalH heading={"Skills Details"}/>
            {props?.internProfileFullDetail?.skills?.map((skill, index) => (
              <UserSkillsCard skill={skill} key={index} />
            ))}
          </div>
        </div>
  )
}

export default SkillSection