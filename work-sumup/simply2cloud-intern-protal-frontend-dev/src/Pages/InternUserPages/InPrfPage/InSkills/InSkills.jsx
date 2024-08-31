// AddSkill.js
import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Rating } from "@mui/material";
import { NavLink } from "react-router-dom";
// import AddSkillModel from './AddSkillsModel/AddSkillsModel';
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { ToastContainer, toast } from "react-toastify";
import NormalH from "../../../../RepeatedCode/tags/NormalH";
import NoDataPage from "../../../../Component/NoDataPage/NoDataPage";
import InternAddSkillModel from "./InSkillAddModel/InAddSkillModel";
import DeleteInternSkills from "./InDelSkills/InSkillDelete";
import UserSkillsCard from "../../../BothUserPages/UserSkillsCard/UserSkillsDetailCd";
import API_BASE_URL from "../../../../config";
import Cookies from "js-cookie";

const InternSkills = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const [deleteSkillObj, setDeleteSkillObj] = useState();

  return (
    <div className=" col-span-2">
      {/* Modal of Add Skills Form Modal */}
      <InternAddSkillModel
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
      {/* End Add Skill Form Modal */}

      <div className="text-blue-500 p-8 rounded-lg shadow-md text-left">
        <div className="mb-6  ">
          <NormalH heading={"Skill Info"} />
          {props.skills?.length == 0 ? (
            <NoDataPage domain={"No Skills Added"} />
          ) : (
            props.skills?.map((skill, index) => {
              return (
                <>
                  {/* <UserSkillsCard
                    skill={element}
                    setShowConfirmDelete={setShowConfirmDelete}
                    className="inline-block"
                  /> */}
                  <div>
                    {/* Laptop View */}
                    <table className="w-full border-collapse border border-solid mt-4 hidden md:table">
                      <tbody>
                        <tr className="flex justify-between p-4 border-b">
                          <td className="text-blue-500 font-bold text-left  w-[19%]">
                            {skill.skill_name}
                          </td>
                          <td className="text-blue-500 font-bold text-left  w-[29%]">
                            <Rating
                              name="size-medium"
                              defaultValue={skill.experience_level / 2}
                              precision={0.5}
                              readOnly
                            />
                            {skill.experience_level / 2}
                          </td>
                          <td className="text-blue-500 font-bold text-left  w-[19%]">
                            {skill.years_of_experience}++ Year Experience
                          </td>
                          <td className="text-blue-500 font-bold text-left  w-[19%]">
                            <a
                              target="_blank"
                              href={`${skill.portfolio_link}`}
                              className="underline"
                            >
                              Portfolio
                            </a>
                          </td>
                          <td className="text-blue-500 font-bold text-left  w-[9%]">
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
                          <td className="w-[5%]">
                            <span className="inline-block">
                              <button
                                onClick={() => {
                                  setDeleteSkillObj(skill);
                                  setShowConfirmDelete(true);
                                }}
                              >
                                <DeleteIcon className="text-red-500" />
                              </button>
                            </span>
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
                            <span className="font-semibold text-gray-700"></span>
                            &nbsp;&nbsp;
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
                          <th className="py-2 px-4 text-left ">
                            Experience Year
                          </th>
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
                        <tr className="text-center">
                          <div >
                            <button
                              onClick={() => {
                                setDeleteSkillObj(skill);
                                setShowConfirmDelete(true);
                              }}
                              className="text-red-500"  >
                            Delete <DeleteIcon />
                            </button>
                          </div>
                        </tr>
                      </thead>
                      <tbody></tbody>
                    </table>
                  </div>
                </>
              );
            })
          )}

          <div className="flex justify-center items-center py-4">
            <button
              onClick={() => {

                if(Cookies.get('profile_id') == "undefined" || !Cookies.get('profile_id')){
                  toast.error("Compleate your profile first");
                }
                else{
                  setIsModalOpen(true);
                }
              }}
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white font-semibold py-3 px-6 rounded-full shadow-lg focus:outline-none focus:ring focus:border-blue-300 transition duration-300"
            >
              Add Skills
            </button>
          </div>
        </div>
      </div>

      {/* delete Modal  */}
      {showConfirmDelete && (
        <DeleteInternSkills
          setShowConfirmDelete={setShowConfirmDelete}
          selectedSkillObj={deleteSkillObj}
        />
      )}
      {/* End Delete */}
    </div>
  );
};

export default InternSkills;
