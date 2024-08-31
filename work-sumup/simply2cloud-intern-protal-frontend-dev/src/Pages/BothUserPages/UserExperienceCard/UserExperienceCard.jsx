import { Rating } from '@mui/material';
import React from 'react';

const UserExperienceCard = ({ experience }) => {
    return (
        <div>
            {/* Laptop View */}
            <table className="w-full border-collapse border border-solid mt-4 hidden md:table">
    <tbody>
        <tr className="flex justify-between p-4 border-b">
            <td className="text-blue-500 font-bold text-left  w-[35%]">
                {experience?.job_categoery?.job_category}{' '}
                <span className="font-semibold">
                    ({experience?.sub_categoery?.sub_category_name})
                </span>
            </td>
            <td className="text-blue-500 font-bold text-left  w-[15%]">{experience?.company_name}</td>
            <td className="text-blue-500 font-bold text-left  w-[15%]">From {experience?.start_date}</td>
            <td className="text-blue-500 font-bold text-left  w-[35%]">
               <span className='text-gray-700'> Skills -{' '}</span>
                <span className='font-semibold'>
                    {experience?.skills_accuired?.map((element, index) => {
                        return <>{index !== 0 ? ' , ' : ''} {element.name} </>
                    })}
                </span>
            </td>
        </tr>
    </tbody>
</table>



            <table className="w-full border shadow-xl my-2 md:hidden rounded-xl">
                <thead>
                    <tr className="text-blue-500 font-bold">
                        <th className="py-2 px-4 text-left">Experience Name</th>
                        <td className="py-2 px-4 text-left font-semibold text-gray-700"> {experience?.job_categoery?.job_category}
                        ({experience?.sub_categoery?.sub_category_name})</td>
                    </tr>
                    <tr className="text-blue-500 font-bold">
                        <th className="py-2 px-4 text-left" >Company Name</th>
                        <td className="py-2 px-4 text-left font-semibold text-gray-700">
                        {experience?.company_name}
                        </td>
                    </tr>
                    <tr className="text-blue-500 font-bold">
                        <th className="py-2 px-4 text-left ">Skills</th>
                        <td className="py-2 px-4 text-left font-semibold text-gray-700">
                        <span className='font-semibold'>
                     {experience?.skills_accuired?.map((element,index)=>{
                    return <>{index != 0 ? " , " : ""} {element.name} </>
                })}
                </span>
                        </td>
                    </tr>
                    <tr className="text-blue-500 font-bold">
                    <th className="py-2 px-4 text-left ">From</th>
                        <td className="py-2 px-4 font-semibold text-gray-700">
                        {experience?.start_date}
                        </td>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>

        </div>

    );
};

export default UserExperienceCard

