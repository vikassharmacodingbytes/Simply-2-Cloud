import React from 'react'

const CardImage = ({ product }) => {

  const { title, imageUrl, courseDuration, offers, opportunity, buttonLabel } = product;

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">

      <img className="w-full h-48 object-cover" src={imageUrl} alt={title} />

      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>

        <ul className="list-disc ml-5">
          <li>{`Course Duration: ${courseDuration}`}</li>
          <li>{`Offers: ${offers}`}</li>
          <li>{`Opportunity: ${opportunity}`}</li>
        </ul>
      </div>

      <div className="px-6 py-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          {buttonLabel}
        </button>
      </div>
    </div>
  )
}

export default CardImage
