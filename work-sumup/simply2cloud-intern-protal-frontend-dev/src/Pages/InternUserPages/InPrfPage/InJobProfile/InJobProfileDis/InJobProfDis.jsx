import React, { useContext, useEffect, useRef, useState } from "react";
import LoadingPage from "../../../../../Component/LoadingPage/LodingPage";
import NoDataPage from "../../../../../Component/NoDataPage/NoDataPage";
import InternJobProfileModal from "./InJobProfModl/InJobProfModal";
import { DataContext } from "../../../../../context";
import InternProfileCard from "../../../../BothUserPages/InProfileCard/InProfileCard";
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

const InternJobProfileDisplay = (props) => {
  const { userDetails, logoutFunc } = useContext(DataContext);

  return (
    <div className="col-span-1 h-full">
      {props?.internJobProfileObj.length == 0 ? (
        <div className="text-blue-500 p-8 rounded-xl shadow-md text-left border-2">
          <div className="mb-6  ">
            <InternJobProfileModal fromJobPage={false} />
          </div>
        </div>
      ) : (
        <div>  {props?.internJobProfileObj?.map((element, index)=>{
            return <InternProfileCard profile={element} isCompany={false} key={index}/>
        }) }
        </div>
      
        
      )}
    </div>
  );
};

export default InternJobProfileDisplay;
