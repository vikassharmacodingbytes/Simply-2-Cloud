import { CheckCircleOutline } from '@mui/icons-material'
import React from 'react'

const NmSection = () => {
  return (
    <div className="main bg-green-50 p-8">
      <div className="main1 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="content1">
          <h1 className="text-3xl text-gray-800">The best part? Everything.</h1>
          <div className="content-title mt-8 mr-12">
            <h3 className="text-lg text-gray-700">
              <CheckCircleOutline /> Stick to your budget
            </h3>
            <p className="text-base text-gray-800">
              Find the right service for every price point. No hourly rates, just project-based pricing.
            </p>
          </div>
          <div className="content-title mt-8 mr-12">
            <h3 className="text-lg text-gray-700">
              <CheckCircleOutline /> Get quality work done quickly
            </h3>
            <p className="text-base text-gray-800">
              Hand your project over to a talented freelancer in minutes, get long-lasting results.
            </p>
          </div>
          <div className="content-title mt-8 mr-12">
            <h3 className="text-lg text-gray-700">
              <CheckCircleOutline /> Pay when you're happy
            </h3>
            <p className="text-base text-gray-800">
              Upfront quotes mean no surprises. Payments only get released when you approve.
            </p>
          </div>
          <div className="content-title mt-8 mr-12">
            <h3 className="text-lg text-gray-700">
              <CheckCircleOutline /> Count on 24/7 support
            </h3>
            <p className="text-base text-gray-800">
              Our round-the-clock support team is available to help anytime, anywhere.
            </p>
          </div>
        </div>
        <div className="content2 p-12">
          <img
            src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_700,dpr_1.0/v1/attachments/generic_asset/asset/089e3bb9352f90802ad07ad9f6a4a450-1599517407052/selling-proposition-still-1400-x1.png"
            alt=""
            className="w-full h-full object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  )
}

export default NmSection