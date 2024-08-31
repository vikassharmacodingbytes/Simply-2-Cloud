import React, { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { DataContext } from "../../../context";
import LoadingPage from "../../../Component/LoadingPage/LodingPage";
import InternProfileCard from "../../BothUserPages/InProfileCard/InProfileCard";
import NoDataPage from "../../../Component/NoDataPage/NoDataPage";

const NmInSearchPg = () => {
  const pr = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const ct_id = queryParams.get("search_id");
  const search_query = queryParams.get("search_categoery");
  const search_sub_categoery = queryParams.get("search_sub_categoery");
  const search_skills = queryParams.get("search_skills");
  const { unAuthUserDetail, unAuthInternSerchFunc } = useContext(DataContext);
  
  useEffect(() => {
    if (search_query){
      unAuthInternSerchFunc(ct_id, 'categoery');
    }
    else if(search_sub_categoery){
      unAuthInternSerchFunc(ct_id, 'sub_categoery');
    }
    else if(search_skills){
      unAuthInternSerchFunc(ct_id, 'skills');
    }
  }, [ct_id]);
  

  if (!unAuthUserDetail) {
    return <LoadingPage />
  }

  return (
    <>
      {unAuthUserDetail?.length == 0 ? (
        <div className="flex items-center justify-center h-[55vh]">
          {" "}
          <NoDataPage domain={`Sorry No Data Related to your search`} />{" "}
        </div>
      ) : (

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 m-8">
            {unAuthUserDetail?.map((element, index) => {
              return (
                <InternProfileCard
                  profile={element}
                  isCompany={true}
                  key={index}
                />
              );
            })}
          </div>
      )
      }
    </>
  );
};

export default NmInSearchPg;
