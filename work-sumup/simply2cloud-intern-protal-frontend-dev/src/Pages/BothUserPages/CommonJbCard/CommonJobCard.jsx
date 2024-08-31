import React from 'react'
import API_BASE_URL from '../../../config'
import { LocationOnOutlined, WorkOutline } from "@mui/icons-material";

const CommonJobCard = ({jobs}) => {
  return (
<>
<div className="flex items-center space-x-5 font-bold">
    <img src={`${API_BASE_URL}${jobs?.company.logo}`} alt="" className="w-[4rem] h-[4rem] rounded-full border-2" />
    <div>
      <h1>{jobs?.job_categoery.job_category}
        <span className="font-semibold text-sm">
          {" "} (
          {jobs?.sub_categoery.sub_category_name}
          )
        </span>
      </h1>
      <div className="flex font-bold text-gray-600">
        <h1 className=" underline ">({jobs?.company?.company_name})</h1>
      </div>
    </div>
  </div>
  <div>
    {jobs?.company_user?.user_location}
  </div>
  <div>

    <div className="mt-4">
      <div className="text-gray-700 font-bold underline">
        Required Skills 
      </div>
      
      {jobs?.skills_required?.map((element, index)=>{
        return  <button className="text-gray-800 bg-gray-100 font-semibold rounded px-2 py-1 mr-3 my-1">{element.name}</button>
      })}
    </div>
    <div className="text-gray-700 font-bold underline mt-4 ">
        Preffered Skills : 
      </div>
    {jobs?.skills_preferred?.map((element, index)=>{
        return  <button className="text-gray-800 bg-gray-100 font-semibold rounded px-2 py-1 mr-3 my-1">{element.name}</button>
      })}

  </div>
  <div className="flex my-2">

  <div className="flex space-x-5 ml-auto text-gray-700 font-semibold">
     <div>
      <LocationOnOutlined /> {jobs?.location}
     </div>
     <div>
      <WorkOutline /> {jobs?.experience} Year
     </div>
  </div>
  </div>
  </>
  )
}

export default CommonJobCard
