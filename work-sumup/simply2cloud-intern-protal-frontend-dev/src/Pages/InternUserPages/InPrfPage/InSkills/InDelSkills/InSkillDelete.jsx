import { CircularProgress } from '@mui/material'
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';
import API_BASE_URL from '../../../../../config';
import { DataContext } from '../../../../../context';

const DeleteInternSkills = (props) => {
  const [deleteButton, setDeleteButton] = useState(false);
  const token = Cookies.get("token")
  const { profileFunc } = useContext(DataContext);
  const deleteSkillFunc = () => {
    setDeleteButton(true);
    let data = {}
    if (!isNaN(Cookies.get("profile_id"))){
      data = {
        profile_id : Cookies.get("profile_id")
      }
    }
    console.log(data);
    axios.delete(`${API_BASE_URL}/skills/${props.selectedSkillObj.id}/`, {
      headers: {
        Authorization: `Bearer ${token}`
      },
      data: data
    } ).then(() => {
      profileFunc();
      toast.success("Skill Removed Sucessfully", {
        position: "top-center"
      })
      props.setShowConfirmDelete(false)
    }).catch((err) => {
      toast.error("Internal Server Error", {
        position: "top-center"
      })
    }).finally(() => {
      setDeleteButton(false);
    })
  }


  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900  bg-opacity-75">
      <div className="bg-white p-4 rounded-lg">
        <p>{`Are you sure you want to delete the skill '${props.selectedSkillObj.skill_name}'?`}</p>
        <div className="text-center mt-4">
          <button
            className="bg-red-500 text-white px-4 py-2 rounded mx-2"
            onClick={deleteSkillFunc}
          >
            {
              <>{deleteButton ? <>&nbsp;&nbsp; <CircularProgress size={19} color='inherit' /> &nbsp;&nbsp;</> : "Delete"} </>
            }
          </button>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded mx-2"
            onClick={() => {
              props.setShowConfirmDelete(false);
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>

  )
}

export default DeleteInternSkills