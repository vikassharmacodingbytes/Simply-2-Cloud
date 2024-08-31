import React from 'react'

const Heading = ({heading}) => {
  return (
    <div className="text-xl md:text-3xl xl:text-4xl font-bold text-center my-10 underline">
        {heading}
      </div>
  )
}

export default Heading
