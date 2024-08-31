import { Rating } from "@mui/material";
import React from "react";
import API_BASE_URL from "../../../config";

const UserSkillsCard = ({ skill }) => {
  return (
    <div>
      {/* Laptop View */}
      <table className="w-full border-collapse border border-solid mt-4 hidden md:table">
        <tbody>
          <tr className="flex justify-between p-4 border-b">
            <td className="text-blue-500 font-bold text-left  w-[20%]">
              {skill.skill_name}
            </td>
            <td className="text-blue-500 font-bold text-left  w-[30%]">
              <Rating
                name="size-medium"
                defaultValue={skill.experience_level / 2}
                precision={0.5}
                readOnly
              />
              {skill.experience_level / 2}
            </td>
            <td className="text-blue-500 font-bold text-left  w-[20%]">
              {skill.years_of_experience}++ Year Experience
            </td>
            <td className="text-blue-500 font-bold text-left  w-[20%]">
              <a
                target="_blank"
                href={`${skill.portfolio_link}`}
                className="underline"
              >
                Portfolio
              </a>
            </td>
            <td className="text-blue-500 font-bold text-left  w-[10%]">
              {skill.user_image != null ? (
                <a
                  target="_blank"
                  href={`${API_BASE_URL}/${skill.user_image}`}
                  className="underline"
                >
                  <img
                    src={`${API_BASE_URL}/${skill.user_image}`}
                    className="h-[2rem] w-[2rem]"
                  />
                </a>
              ) : null}
            </td>
          </tr>
        </tbody>
      </table>
      <table className="w-full border shadow-xl my-2 md:hidden rounded-xl">
        <thead>
          <tr className="text-blue-500 font-bold">
            <th className="py-2 px-4 text-left">Skill Name</th>
            <td className="py-2 px-4 text-left font-semibold text-gray-700">
              {skill.skill_name}
            </td>
          </tr>
          <tr className="text-blue-500 font-bold sm:table-row-group hidden">
            <th className="py-2 px-4 text-left">Rating</th>
            <td className="py-2 px-4 text-left font-semibold text-gray-700">
              <span className="font-semibold text-gray-700"></span>&nbsp;&nbsp;
              <Rating
                className="text-sm"
                size="small"
                name="size-small"
                defaultValue={skill.experience_level / 2}
                precision={0.5}
                readOnly
              />
              {skill.experience_level / 2}
            </td>
          </tr>
          <tr className="text-blue-500 font-bold">
            <th className="py-2 px-4 text-left ">Experience Year</th>
            <td className="py-2 px-4 text-left font-semibold text-gray-700">
              {skill.years_of_experience}++
            </td>
          </tr>
          <tr className="text-blue-500 font-bold">
            <td className="py-2 px-4 text-center" colSpan={2}>
              <a
                target="_blank"
                href={`${skill.portfolio_link}`}
                className="text-blue-500 font-bold underline"
              >
                View Portfolio
              </a>
              &nbsp;&nbsp;
            </td>
          </tr>
          <tr className="text-blue-500 font-bold">
            <td className="py-2 px-4 text-center" colSpan={2}>
              {skill.user_image != null ? (
                <a
                  target="_blank"
                  href={`${API_BASE_URL}/${skill.user_image}`}
                  className="underline "
                >
                  Click To View Image{" "}
                  <img
                    src={`${API_BASE_URL}/${skill.user_image}`}
                    className="h-[2rem] w-[2rem] inline-block"
                  />
                </a>
              ) : null}{" "}
            </td>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
};

export default UserSkillsCard;
