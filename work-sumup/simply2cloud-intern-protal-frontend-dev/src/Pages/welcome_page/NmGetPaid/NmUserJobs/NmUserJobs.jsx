import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../../../../context";
import NoDataPage from "../../../../Component/NoDataPage/NoDataPage";
import JobCard from "../../../BothUserPages/JobCard/JobCards";
import LoadingPage from "../../../../Component/LoadingPage/LodingPage";
import InternJobSearchBySlug from "./NnJobSearch/NmJobSrchBySlug";
import InternJobSearchByLocation from "./NnJobSearch/NmJobSrchL";
import InternJobSearchByCategoery from "./NnJobSearch/NmJobSrchByCateg";
import { ToastContainer } from "react-toastify";
import InternJobSearchBySubCategoery from "./NnJobSearch/NmJobSrchBySubCt";
import Cookies from "js-cookie";

const NmUnAuthJobsPage = () => {
  const {
    getUnAuthJobsFunc,
    studentJobsObj,
    searchTitleSlugsObj,
    searchLocationSlugObj,
    jobCategoeryOpt,
    jobSubCategoeryOpt,
    getJobsForStudentFunc,
    filteredJobs,
    setFilteredJobs,
  isFilter,
  setIsFilter
  } = useContext(DataContext);


  const [filterSubCategoeryOpt, setFilterSubCategoeryOpt] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState();
  const [selectedTitle, setSelectedTitle] = useState();
  const [selectedCategoery, setSelectedCategoery] = useState();
  const [selectedSubCategoery, setSelectedSubCategoery] = useState();

  useEffect(() => {
    if (Cookies.get("token") && Cookies.get("user_type") == "user") {
      getJobsForStudentFunc();
    }
    else {
      getUnAuthJobsFunc();
    }
  }, []);

  if (!studentJobsObj && !filteredJobs) {
    return <LoadingPage />;
  }

  return (
    <>
    {console.log(studentJobsObj)}
      <ToastContainer />
      <div className="flex items-center justify-center mt-10 space-x-10">
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
          <InternJobSearchByCategoery
            jobCategoeryOpt={jobCategoeryOpt}
            unAuthJobs={studentJobsObj}
            setIsFilter={setIsFilter}
            setFilteredJobs={setFilteredJobs}
            selectedLocation={selectedLocation}
            selectedTitle={selectedTitle}
            setSelectedCategoery={setSelectedCategoery}
            selectedCategoery={selectedCategoery}
            selectedSubCategoery={selectedSubCategoery}
            setFilterSubCategoeryOpt={setFilterSubCategoeryOpt}
            jobSubCategoeryOpt={jobSubCategoeryOpt}
          />

          <InternJobSearchBySubCategoery
            jobSubCategoeryOpt={jobSubCategoeryOpt}
            unAuthJobs={studentJobsObj}
            setIsFilter={setIsFilter}
            setFilteredJobs={setFilteredJobs}
            selectedLocation={selectedLocation}
            selectedTitle={selectedTitle}
            setSelectedSubCategoery={setSelectedSubCategoery}
            selectedCategoery={selectedCategoery}
            selectedSubCategoery={selectedSubCategoery}
            filterSubCategoeryOpt={filterSubCategoeryOpt}
          />

          {/* <InternJobSearchBySlug
            searchTitleSlugsObj={searchTitleSlugsObj}
            unAuthJobs={studentJobsObj}
            setIsFilter={setIsFilter}
            setFilteredJobs={setFilteredJobs}
            selectedLocation={selectedLocation}
            setSelectedTitle={setSelectedTitle}
            selectedTitle={selectedTitle}
            selectedCategoery={selectedCategoery}
            selectedSubCategoery={selectedSubCategoery}
          /> */}
          <InternJobSearchByLocation
            searchLocationSlugObj={searchLocationSlugObj}
            unAuthJobs={studentJobsObj}
            setIsFilter={setIsFilter}
            
            setFilteredJobs={setFilteredJobs}
            selectedLocation={selectedLocation}
            selectedTitle={selectedTitle}
            setSelectedLocation={setSelectedLocation}
            selectedCategoery={selectedCategoery}
            selectedSubCategoery={selectedSubCategoery}
          />
        </div>
      </div>
      {!isFilter ? (
        studentJobsObj?.length == 0 ? (
          <div className="h-[65vh] flex items-center justify-center">
            <NoDataPage domain={"No Job Posted"} />
          </div>
        ) : (
          <div className="md:mx-[2rem] my-[2rem] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-10">
            {studentJobsObj?.map((element, index) => {
              return <JobCard key={index} jobs={element} />;
            })}
          </div>
        )
      ) : !filteredJobs ? (
        <LoadingPage />
      ) : filteredJobs?.length == 0 ? (
        <div className="h-[65vh] flex items-center justify-center">
          <NoDataPage domain={"No Job Posted You Search Here"} />
        </div>
      ) : (
        <div className="md:mx-[2rem] my-[2rem] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-10">
          {filteredJobs?.map((element, index) => {
            return <JobCard key={index} jobs={element} filter={true} setFilteredJobs={setFilteredJobs} selectedCategoery={selectedCategoery} selectedSubCategoery={selectedSubCategoery} selectedLocation={selectedLocation}/>;
          })}
        </div>
      )}
    </>
  );
};

export default NmUnAuthJobsPage;
