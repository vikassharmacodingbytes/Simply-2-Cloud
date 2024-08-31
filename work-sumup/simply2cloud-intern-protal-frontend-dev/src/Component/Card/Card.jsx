import React from 'react'

const Card = ({ internship }) => {

    const { field, description } = internship;

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white text-center  border ">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{field}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>

      <div className="px-6 py-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Apply Now
        </button>
      </div>
    </div>
  )
}

export default Card
