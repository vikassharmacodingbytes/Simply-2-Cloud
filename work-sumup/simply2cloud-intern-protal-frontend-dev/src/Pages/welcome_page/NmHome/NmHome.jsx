import React, { useContext, useEffect } from "react";
import BHeading from "../../../RepeatedCode/tags/BHeading";
import SearchBar from "./NmSearch/NmSearch";
import NmSection from "./NmSection/NmSection";
import { DataContext } from "../../../context";
import NmSection2 from "./NmSection/NmSection2";
import Cookies from "js-cookie";
import NmSection3 from "./NmSection/NmSection3";

const NmHome = () => {

    const { setUnAuthUserDetail,companyProfileFunc } = useContext(DataContext);

    useEffect(()=>{
        setUnAuthUserDetail();

        if(Cookies.get("user_type") == "company"){
          companyProfileFunc();
        }
    },[])
  return (
    <div>
      <div className="grid md:grid-cols-2 bg-orange-500">
        <div className="flex h-[80vh] justify-center items-center">
          <div>
            <BHeading />
            <SearchBar />
          </div>
        </div>
      </div>
    <NmSection3 />
      <NmSection />
      <NmSection2 />  
    </div>
  );
};

export default NmHome;
