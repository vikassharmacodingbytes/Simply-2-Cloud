import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import API_BASE_URL from '../../../../../config';
import Tick from '../../../../../image/tick';
import LocationIc from '../../../../../image/location';

const InAboutTab = ({ internProfileFullDetails }) => {
  return (
    <div className="md:flex space-x-4 border-2 md:border-none rounded text-center md:text-start py-4 md:py-0">
      <div id="imageDiv">
        <img
          src={
            internProfileFullDetails?.profile_details.user_image != null
              ? `${API_BASE_URL}/${internProfileFullDetails?.profile_details.user_image}`
              : noUsr
          }
          alt={"loading..."}
          className="rounded-[100%] mx-auto  w-[10rem] h-[10rem]  object-cover border-4 border-solid border-white"
        />
      </div>
      <div className="flex justify-center items-center">
        <div className="1">

          <div className="md:font-bold md:text-lg font-semibold text-base text-gray-700">
            {internProfileFullDetails?.profile_details?.intern?.name}
          </div>
          <div className="text-gray-600">
            <span>
              {
                internProfileFullDetails?.profile_details?.job_categoery
                  ?.job_category
              }
            </span>{" "}
            <span>
              ({
                internProfileFullDetails?.profile_details?.sub_categoery
                  ?.sub_category_name
              })
            </span>
          </div>

          <div className='2'>
            <div className='font-semibold text-sm'>
              <Tick />
              <span className=''> Simply2Cloud Certified</span>&nbsp;&nbsp;&nbsp;&nbsp;
              <LocationIc /> 
              {internProfileFullDetails?.profile_details?.intern.address}
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default InAboutTab