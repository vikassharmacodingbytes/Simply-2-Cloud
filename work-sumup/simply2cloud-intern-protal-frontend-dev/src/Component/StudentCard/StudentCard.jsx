import React from 'react';
import { NavLink } from 'react-router-dom';

const StudentCard = ({ student }) => {
  const { name, imageUrl, skills, experience, desc, github, portfolio } = student;

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img className="w-full h-48 object-cover" src={imageUrl} alt={name} />

      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>

        <ul className="list-disc ml-5">
          {skills.map((skill, index) => (
            <li key={index}>{`${skill.skill} - ${skill.level}`}</li>
          ))}
        </ul>
      </div>

      <div className="px-6 py-4 text-center">
        <NavLink to={"studentdetails"}>

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          View Details
        </button>
        </NavLink>
      </div>


     
    </div>
  );
};

export default StudentCard;
