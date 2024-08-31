import { CircularProgress } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react';

const ConfirmDelete = (props) => {

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900  bg-opacity-75">
      <div className="bg-white p-4 rounded-lg">
        <p>{`Are you sure you want to delete the Job'?`}</p>
        <div className="text-center mt-4">
          <button
            className="bg-red-500 text-white px-4 py-2 rounded mx-2"
            onClick={props.sendDeleteFunc}
          >
            {
              <>{props.deleteButton ? <>&nbsp;&nbsp; <CircularProgress size={19} color='inherit' /> &nbsp;&nbsp;</> : "Delete"} </>
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

export default ConfirmDelete