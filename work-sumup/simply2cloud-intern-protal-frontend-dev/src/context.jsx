import axios from "axios";
import { createContext, useEffect, useState } from "react";
import API_BASE_URL, { API_SOCKET_URL } from "./config";
import Cookies from "js-cookie";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { io } from "socket.io-client";

const DataContext = createContext();

const DataProviderFuncComp = ({ children }) => {
  const [userDetails, setUserDetails] = useState();
  const [unAuthUserDetail, setUnAuthUserDetail] = useState();
  const [unAuthJobs, setUnAuthJobs] = useState();
  const [avaibleSkills, setAvaibleSkills] = useState([]);
  const [companyUserDetail, setCompanyUserDetail] = useState();
  const [jobPostedByCompany, setJobPostedByCompany] = useState();
  const [studentJobsObj, setStudentJobObj] = useState();
  const [jobCategoeryOpt, setJobCategoeryOpt] = useState([]);
  const [searchTitleSlugsObj, setSearchSlug] = useState([]);
  const [searchLocationSlugObj, setSearchLocationSlug] = useState([]);
  const [jobSubCategoeryOpt, setJobSubCategoeryOpt] = useState([]);
  const [jobApplication, setJobApplication] = useState();
  const [approvedApplication, setApprovedApplication] = useState(); 
  const [rejectedApplication, setRejectedApplication] = useState();
  const [internProfileFullDetails, setInternProfileFullDetail] = useState();
  const [tempFilterJobs , setTempFilterJobs] = useState();
  const [filteredJobs, setFilteredJobs] = useState();
  const [userConversation, setUserConveration] = useState();
  const [userChats, setUserChats] = useState();
  const [chatSocket , setSocket] = useState();
  const [isFilter, setIsFilter] = useState(false);
  const [chatTracerId, setChatTracerId] = useState();
  const [githubUserDetail, setGithubUserDetail] = useState();
  
  var token = Cookies.get("token");

  const navigate = useNavigate();
  const location = useLocation();

  const socketFunction = ()=>{
    try{

    
    const socket = io(`${API_SOCKET_URL}`);
        socket.on('connect', () => {
          setSocket(socket);
        });

        socket.on('newMessage', (data) => {
          if (data?.receiverId === Cookies.get('user') || data?.senderId == Cookies.get('user')) {
            getUserConversationFunc();
            setChatTracerId(data?.receiverId);
          }
          });
        }
        catch(error){
          // console.log(error);
        }
  }

  const profileFunc = () => {
    token = Cookies.get('token');
    axios
      .get(`${API_BASE_URL}/profile/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((value) => {
        setUserDetails(value.data);
        socketFunction();
        Cookies.set("user_type", value.data.user_details.user_type);
        Cookies.set("user", value.data.user_details.id);
        let skills_id = [];
        let user_avaliable_skills_id = [];
        if (value.data && value.data.skills_detail) {
          skills_id = value.data.skills_detail.map((element) => element.id);
          Cookies.set("skills_ids", skills_id)
        }
        if (value.data && value.data.skills_detail){
            user_avaliable_skills_id = value.data.skills_detail.map((element) => element.skill_id);
            Cookies.set("user_avaliable_skills_id", user_avaliable_skills_id); 
        }
        try {
          Cookies.set("profile_id", value.data?.intern_job_profile[0]?.id);
        } catch (err) {

        }
      })
      .catch((err) => {
        console.log(err)
        if(Cookies.get('token') && err.response.status == "401" ){
          logoutFunc();
        }
      });
  };

  const avaibleSkillsFunc = () => {
    axios
      .get(`${API_BASE_URL}/available-skills/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((values) => {
        setAvaibleSkills(values.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const companyProfileFunc = () => {
    axios
      .get(`${API_BASE_URL}/profile/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((value) => {
        setAvaibleSkills(value.data.aviable_skills);
        setJobCategoeryOpt(value.data.categoery_option);
        setCompanyUserDetail(value.data);
        Cookies.set("company", value.data.company_details.id);
        Cookies.set("user", value.data.user_details.id);
      })
      .catch((err) => {
        logoutFunc();
      });
  };

  const companyJobPageFunc = () => {
    axios
      .get(`${API_BASE_URL}/job-post/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((value) => {


        setAvaibleSkills(value.data.aviable_skills);
        setJobCategoeryOpt(value.data.categoery_option);
        setJobSubCategoeryOpt(value.data.sub_categoery);
      })
      .catch((err) => {
        logoutFunc();
      });
  };

  const getJobsPostedByCompanyFunc = () => {
    if (!Cookies.get("company")) {
      companyProfileFunc();
    } else {
      const company_id = Cookies.get("company");
      axios
        .get(`${API_BASE_URL}/job-post/${company_id}/`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((value) => {
          setJobPostedByCompany(value.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const logoutFunc = () => {
    Cookies.remove("token");
    Cookies.remove("user_type");
    Cookies.remove("user");
    Cookies.remove("company");
    Cookies.remove("profile_id");
    Cookies.remove("skills_ids");
    Cookies.remove("user_avaliable_skills_id");

    navigate("/login");
  };

  const getJobsForStudentFunc = () => {
    axios
      .get(`${API_BASE_URL}/job-post/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((value) => {
        setStudentJobObj(value.data.all_jobs);
        setSearchSlug(value.data.search_title_keywords);
        setSearchLocationSlug(value.data.search_location_slug);
        setJobSubCategoeryOpt(value.data.sub_categoery);
        setJobCategoeryOpt(value.data.search_categoery);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const jobSearchFilterFunc = (
    categoery = null,
    job_title = null,
    location = null,
    sub_categoery = null,
    setFilteredJobsParams
  ) => {
const back_url = Cookies.get("token") ? "job-search-auth" : 'job-search';
const c_headers = Cookies.get("token") ? 
   {
    "Authorization" : `Bearer ${token}`
} : undefined
    axios
      .get(`${API_BASE_URL}/${back_url}/`, {
      headers : c_headers,
        params: {
          job_categoery : categoery,
          job_title: job_title,
          location: location,
          sub_categoery: sub_categoery
        },
      })
      .then((value) => {
        setFilteredJobsParams(value.data);
        setTempFilterJobs(value.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getJobApplicationFunc = (status=null) => {

    axios
      .get(`${API_BASE_URL}/intern-job-apply/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params : {
            status : status
        }
      })
      .then((value) => {
        setJobApplication(value.data);
        if (status == "Accepted"){
            setApprovedApplication(value.data);
        }
        else if(status == "Rejected"){
            setRejectedApplication(value.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const unAuthHomePageFunc = () => {
    axios
      .get(`${API_BASE_URL}/home-unauth/`)
      .then((value) => {
        setJobCategoeryOpt(value.data.avaliable_categoery);
        setAvaibleSkills(value.data.available_skill);
        setJobSubCategoeryOpt(value.data.avaliable_subcategoery);
      })
      .catch((err) => {
      });
  };

  const unAuthInternSerchFunc = (ct_id, search)=>{
    setUnAuthUserDetail(null);
    let url;
    let queryParams;
    token = Cookies.get('token');
    if (token){
      url = `${API_BASE_URL}/intern-auth-search/`
      queryParams = {params:{
        [search] : ct_id
      },
      headers : {
        "Authorization" : `Bearer ${token}`
      }}
    }
    else{
      url = `${API_BASE_URL}/intern-unauth-search/`
      queryParams = {params:{
        [search] : ct_id
      }}
    }
    axios.get(url, queryParams, ).then((value) => {
        setUnAuthUserDetail(value.data.intern_job_profile);
      })
      .catch((err) => {
        console.log(err);
      });
  }

const internProfileFullDetailsFunc = (id)=>{
  console.log("Hii ")
  setInternProfileFullDetail(null);
token = Cookies.get("token");
let url;
let myConfig;
if (token){
  url = `${API_BASE_URL}/intern-auth-search/${id}/`
  myConfig = {headers: {"Authorization" : `Bearer ${token}`}}
}
else{
  url = `${API_BASE_URL}/intern-unauth-search/${id}/`;
}
  axios.get(url, myConfig).then((value) => {
      setInternProfileFullDetail(value.data);
    })
    .catch((err) => {
      console.log(err);
    });
}

const getUnAuthJobsFunc = ()=>{
  // const url = token ? '' : 'job-unauth-search'
    axios
      .get(`${API_BASE_URL}/job-unauth-search/`)
      .then((value) => {
        setStudentJobObj(value.data.all_jobs);
        setSearchSlug(value.data.search_title_keywords);
        setSearchLocationSlug(value.data.search_location_slug);
        setJobSubCategoeryOpt(value.data.sub_categoery);
        setJobCategoeryOpt(value.data.search_categoery);
      })
      .catch((err) => {
        console.log(err);
      });
  }

const getUserConversationFunc = ()=>{
  // setUserConveration();
  axios.get(`${API_BASE_URL}/conversiation/`, {
    headers : {
      Authorization : `Bearer ${token}`
    }
  }).then((value)=>{
    setUserConveration(value.data);
  }).catch((err)=>{
    console.log(err);
  });
}

const getMessageOfUserFunc = (user1, isDifferent = true)=>{
if(isDifferent){
  setUserChats();
}

  axios.get(`${API_BASE_URL}/chat/${user1}/`, 
  {
    headers : {
      "Authorization" : `Bearer ${token}`
    }
  }).then((value)=>{
    setUserChats(value.data);
    getUserConversationFunc();
  })
}

const getGithubDetailsFunc = (user)=>{
  setGithubUserDetail(null);
  axios.get(`https://api.github.com/users/${user}`).then((value)=>{
    setGithubUserDetail(value.data);
  }).catch((err)=>{
    console.log(err);
  });
}

  return (
    <DataContext.Provider
      value={{
        profileFunc,
        avaibleSkillsFunc,
        getJobsPostedByCompanyFunc,
        companyProfileFunc,
        getJobsForStudentFunc,
        jobSearchFilterFunc,
        logoutFunc,
        getJobApplicationFunc,
        companyJobPageFunc,
        unAuthInternSerchFunc,
        getUnAuthJobsFunc,
        unAuthHomePageFunc,
        setStudentJobObj,
        internProfileFullDetailsFunc,
        setUnAuthUserDetail,
        userDetails,
        avaibleSkills,
        companyUserDetail,
        jobPostedByCompany,
        studentJobsObj,
        searchTitleSlugsObj,
        searchLocationSlugObj,
        jobCategoeryOpt,
        jobApplication,
        jobSubCategoeryOpt,
        unAuthUserDetail,
        unAuthJobs,
        approvedApplication,
        rejectedApplication,
        internProfileFullDetails,
        tempFilterJobs,
        setFilteredJobs,
        setTempFilterJobs,
        filteredJobs,
        getUserConversationFunc,
        userConversation,
        getMessageOfUserFunc,
        userChats,
        chatSocket,
        socketFunction,
        isFilter,
        setIsFilter,
        setChatTracerId,
        chatTracerId,
        getGithubDetailsFunc,
        githubUserDetail
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export { DataProviderFuncComp, DataContext };
