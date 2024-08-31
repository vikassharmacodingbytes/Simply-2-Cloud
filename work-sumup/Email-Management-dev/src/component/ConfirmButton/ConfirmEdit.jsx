import axios from 'axios';
import React, { useContext, useState } from 'react'
import Cookies from 'js-cookie';
import { API_BASE_URL } from '../../config';
import { toast } from 'react-toastify';
import { CircularProgress } from '@mui/material';
import { DataContext } from '../../context';

const EditConfirm = ({ id, url_route, getFunc, query, setConfirmEdit, setIsModalOpen, editData }) => {

  const { isValidSessionFunc } = useContext(DataContext);
  const [button, setButton] = useState(false);

  return (
    <div className="fixed inset-3 flex items-center justify-center bg-gray-900  bg-opacity-75 z-40">
      <div className="bg-white p-4 rounded-lg">
        <p>{`Are you Sure You want to Update Data?`}</p>
        <div className="text-center mt-4">
          <button
            className="bg-red-500 text-white px-4 py-2 rounded mx-2"
            type='button'
            onClick={() => {
              setButton(true);
              const token = Cookies.get("token");
              axios.put(`${API_BASE_URL}/${url_route}/${id}/`, editData, {
                headers: {
                  Authorization: `Bearer ${token}`
                }
              }).then((res) => {
                toast.success("Updated Successfully!!", { position: "top-center" });
                if (query) {
                  getFunc(query);
                }
                else {
                  getFunc();
                }
                setConfirmEdit(false);
                setIsModalOpen(false);
              }).catch((error) => {
                console.log(error);
                isValidSessionFunc();
              }).finally(() => {
                setButton(false);
              });
            }}
          >
            {
              <>{button ? <CircularProgress size={19} color='inherit' /> : "Confirm"} </>
            }
          </button>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded mx-2"
            type='button'
            onClick={() => {
              setConfirmEdit(false);
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

export default EditConfirm
