import React, { useContext, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { ArrowDropDownCircleOutlined, ChatOutlined, CloseOutlined, Cookie, Lens, Notifications, Search } from "@mui/icons-material";
import TableRowsIcon from "@mui/icons-material/TableRows";
import Cookies from "js-cookie";
import navItem from "./navdata";
import { DataContext } from "../../context";
import logo from "../../image/simply2cloud.jpg";
import SignUpMd from "./SignUpOpMd/SignUpMd";
import axios from "axios";
import API_BASE_URL from "../../config";
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import NavBarIc from "../../image/icons/NavBarIc";
import { useEffect } from "react";
import UpArrowIcon from "../../image/icons/UpArrow";
import UserNotifications from "../../Pages/BothUserPages/Notifications/Notifications";

const NavMenu = ({searchArrForCompany}) => {
  const [mobMenuVis, setMobileVis] = useState(false);
  const { logoutFunc, jobSearchFilterFunc, setFilteredJobs, setTempFilterJobs, setIsFilter } = useContext(DataContext);
  const [navId, setNavId] = useState(0);
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!mobMenuVis) {
      document.body.style.overflow = 'auto';
    }
    else {
      document.body.style.overflow = 'hidden';
    }
  }, [mobMenuVis]);

  return (
    <>
      {open ? <SignUpMd open={open} setOpen={setOpen} /> : null}
      <nav className="flex items-center justify-between flex-wrap bg-white py-4 lg:px-12 shadow border-solid border-t-2 border-green-700">
        <div className="flex justify-between lg:w-auto w-full lg:border-b-0 pl-6 pr-2 border-solid border-b-2 border-gray-300 pb-5 lg:pb-0">
          <div className="block lg:hidden">
            <button
              id="nav"
              className="flex items-center px-3 py-2 rounded text-gray-800  hover:text-gray-700 "
            >
              {mobMenuVis ? (
                null
              ) : (
                <button onClick={() => {
                  setMobileVis(true);
                  // document.body.style.overflow = 'hidden';
                }}>
                  <NavBarIc />
                </button>
              )}
            </button>
          </div>
          <div className="flex items-center flex-shrink-0 text-gray-800 md:mr-16 mx-auto md:mx-0">
            <span className="font-semibold text-xl tracking-tight">
              <img src={logo} className="h-[3rem]" />
            </span>
          </div>
          <div className="md:hidden flex space-x-2 ">
            {Cookies.get('token') ?
              <>
                <button className="text-gray-700 w-full md:w-auto px-4 py-2 font-bold"
                  onClick={() => {
                    navigate("/notifications")
                  }}>
                  <Notifications />
                </button>
                <button className="text-gray-700 w-full md:w-auto px-4 py-2 font-bold"
                  onClick={() => {
                    navigate("/chat")
                  }}>
                  <ChatOutlined />
                </button>
              </>

              : <button
                onClick={() => {
                  setOpen(true);
                  setMobileVis(false);
                }}
                className={`block  lg:inline-block rounded border  border-green-600  mr-2 
                }  bg-green-600 text-white lg:mt-0 w-full md:w-auto px-4 py-2 `}
              >
                {"Join"}
              </button>}
          </div>
          {location.pathname != "/" ?
            <>
              {Cookies.get("user_type") == "user" ? <>
                <select type="text" className="hidden md:block pl-4 md:w-[17rem] border border-solid border-gray-300 rounded-l-xl  font-semibold text-gray-700  !important appearance-none"
                  onChange={(e) => {
                    if (!e.target.value || e.target.value == "") {
                      return;
                    }
                    if (Cookies.get("user_type") == "user") {
                      jobSearchFilterFunc(e.target.value, null, null, null, setFilteredJobs);
                      setIsFilter(true);
                      navigate("/");
                    }
                  }}
                >
                  <option class="py-2 px-4 text-lg hover:bg-gray-300 border-b border-solid border-gray-300 font-semibold text-gray-700  !important" value="">{Cookies.get("user_type") == "user" ? "Search for Internship" : "Search For Intern"}</option>
                  {searchArrForCompany?.map((element, index)=>{
                    return <option class="py-2 px-4 text-lg hover:bg-gray-300 border-b border-solid border-gray-300  font-semibold text-gray-700  !important" value={element.id}>{element.job_category}</option>
})}
                  </select>
              </> : <select type="text" className="hidden md:block pl-4 md:w-[17rem] border border-solid border-gray-300 rounded-l-xl  font-semibold text-gray-700  !important appearance-none"
                onChange={(e) => {
                  if (!e.target.value || e.target.value == "") {
                    return;
                  }
                  else {
                    navigate(e.target.value);
                  }
                }}
              >
                <option class="py-2 px-4 text-lg hover:bg-gray-300 border-b border-solid border-gray-300 font-semibold text-gray-700  !important" value="">{Cookies.get("user_type") == "user" ? "Search for Internship" : "Search For Intern"}</option>
                {searchArrForCompany?.map((element, index)=>{
               return (<option class="py-2 px-4 text-lg hover:bg-gray-300 border-b border-solid border-gray-300  font-semibold text-gray-700  !important" value={`/search?search_categoery=${element.job_category}&search_id=${element.id}`}>{element.job_category}</option>
                )
                })}
                {/* <option class="py-2 px-4 text-lg hover:bg-gray-300 border-b border-solid border-gray-300  font-semibold text-gray-700  !important" value="/search?search_categoery=Photo Editing&search_id=1">Photo Editing</option>
                <option class="py-2 px-4 text-lg hover:bg-gray-300 border-b border-solid border-gray-300  font-semibold text-gray-700  !important" value="/search?search_categoery=Video Editing&search_id=2">Video Editing</option>
                <option class="py-2 px-4 text-lg hover:bg-gray-300 border-b border-solid border-gray-300  font-semibold text-gray-700  !important" value="/search?search_categoery=Software%20Devloper&search_id=4">Software Devlopers</option> */}
              </select>}
              <button className="bg-black text-white px-4 rounded-r-xl hidden md:block ">
                <Search />
              </button> </>
            :
            null}
        </div>
        <div className={`menu w-full lg:block lg:items-center lg:w-auto lg:px-3 px-[15%] md:static absolute top-0 bg-white   md:py-0 py-10 
  ${mobMenuVis ? " z-50 h-[100%] flex-grow transition-all duration-1000 ease-in-out -left-[10%]" : "transition-all duration-300 ease-in-out -left-full"
          }`}>
          <div className="absolute top-4 left-[90%] md:hidden">
            <button>
              <CloseOutlined
                onClick={() => {
                  setMobileVis(false);
                  // document.body.style.overflow = 'auto';
                }}
              />
            </button>
          </div>
          {/* NavBar Render */}
          <div className="text-md font-bold text-gray-500 md:flex md:text-center">
            {navItem?.map((element, index) => {
              if ((!Cookies.get("token") && element.visibility == "logout") || (element.visibility == "both" && (Cookies.get('user_type') != "company" || element.label == "Home"))) {
                return (
                  element.label == "Sign up" ? <>
                    <button
                      key={index}
                      onClick={() => {
                        setOpen(true);
                        setMobileVis(false);
                      }}
                      className={`block mt-4 lg:inline-block lg:mt-0 w-full md:w-auto px-4 py-2 rounded border  border-green-600  mr-2 ${element.link == "signup" ? "lg:ml-auto" : "lg:ml-2"
                        } ${location.pathname == "/signup" ||
                          location.pathname == "/company-register"
                          ? " bg-green-600 text-white"
                          : " text-green-600 hover:text-green-600"
                        }`}
                    >
                      {element.label}
                    </button>
                  </>
                    : <NavLink
                      onClick={() => {
                        setMobileVis(false);
                      }}
                      to={element.link}
                      key={index}
                      className={`block mt-4 lg:inline-block lg:mt-0  px-4 py-2 rounded hover:text-green-600 mr-2 ${element.link == "signup" ? "lg:ml-auto" : "lg:ml-2"
                        } ${element.link == location.pathname ||
                          location.pathname == "company-register"
                          ? " underline text-green-600"
                          : " "
                        }`}
                    >
                      {element.icon ? <div> <span className="md:block hidden">  {element.icon}</span> <span className="md:hidden "> {element.label}</span> </div> : element.label}
                    </NavLink>
                );
              }
              else if (
                Cookies.get("token") &&
                element.visibility == "login" &&
                (element.user == Cookies.get("user_type") || element.user == "both")
              ) {
                return (
                  <div className="relative"
                    onClick={() => {
                      if (window.innerWidth >= 768) {
                        return;
                      }
                      if (navId == 0) {
                        setNavId(element.id);
                      }
                      else {
                        setNavId(0);
                      }
                    }}
                    onMouseEnter={() => {
                      if (window.innerWidth < 768) {
                        return;
                      }
                      setNavId(element.id);
                    }}
                    onMouseLeave={() => {
                      if (window.innerWidth < 768) {
                        return
                      }
                      setNavId(0);
                    }}
                    key={index}
                  >
                    <NavLink
                      onClick={() => {
                        if (element.option) {
                          return;
                        }
                        setMobileVis(false);
                      }}
                      to={element.link == "/my-profile" ? `/intern-details/${Cookies.get("profile_id")}` : element.link}
                      key={index}
                      className={`block mt-4 lg:inline-block lg:mt-0  px-4 py-2 rounded hover:text-green-600  mr-2 ${element.link == "signup" ? "lg:ml-auto" : "lg:ml-2"
                        } ${element.link == location.pathname
                          ? " underline text-green-600"
                          : " "
                        }`}
                    >
                      {element.icon ? <div>
                        <span className="md:inline-block hidden">  {element.icon}</span>
                        <div className="flex md:hidden ">
                          <span className=""> {element.label}</span>
                          <div className="ml-auto ">{element.option ? <div className={element.id == navId ? "transform rotate-[180deg]" : ""}>
                            <UpArrowIcon />
                          </div>
                            : null}</div>
                        </div>
                      </div> :
                        element.option ?
                          <>
                            <div className="hidden md:block">{element.label}</div>
                            <div className="flex md:hidden ">
                              <span className=""> {element.label}</span>
                              <div className="ml-auto ">{element.option ? <div className={element.id == navId ? "transform rotate-[180deg]" : ""}>
                                <UpArrowIcon />
                              </div>
                                : null}</div>
                            </div>
                          </>
                          : element.label
                      }
                    </NavLink>
                    {
                      element.id == navId ?
                        element.option ? (
                          <>
                            <div className="hidden md:block absolute right-7 top-8 z-[100] transform rotate-[180deg] bg-white">
                              <UpArrowIcon />
                            </div>
                            <div className="md:absolute right-[21rem] top-11 bg-white ml-4 md:ml-0">
                              <div className="md:fixed bg-white border rounded shadow-2xl py-4 w-full md:w-[20rem] z-50">
                                {element.option.map((opel, index) => {
                                  if (opel.label == "Logout") {
                                    return <div className="mx-6 hidden md:block">
                                      <button
                                        onClick={() => {
                                          logoutFunc();
                                          setNavId(0);
                                        }}
                                        className={`mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 font-semibold mt-5 uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]`}
                                        type="button"
                                        data-te-ripple-init
                                        data-te-ripple-color="light"
                                        style={{
                                          background: "#FF0000",
                                        }}> <PowerSettingsNewIcon /> Logout</button>
                                    </div>
                                  }
                                  if (opel.link == "intern-details/undefined" && (!Cookies.get('profile_id') || Cookies.get('profile_id') == "undefined")) {
                                    return null
                                  }
                                  return (
                                    <div className="block">
                                      <NavLink
                                        to={opel.link == "intern-details/undefined" ? `intern-details/${Cookies.get('profile_id')}` : opel.link}
                                        onClick={() => {
                                          setNavId(0);
                                          setMobileVis(false);
                                        }}
                                        key={index}
                                        className={`block mt-4 lg:inline-block lg:mt-0  px-4 py-2 rounded hover:text-green-600  mr-2 ${opel.link == "signup" ? "lg:ml-auto" : "lg:ml-2"
                                          } ${opel.link == location.pathname
                                            ? " underline text-green-600"
                                            : " "
                                          }`}
                                      >
                                        {opel.label}
                                      </NavLink>
                                    </div>
                                  );
                                })
                                }
                              </div>
                            </div>
                          </>
                        ) : (
                          ""
                        ) : null}
                  </div>
                );
              } else if (Cookies.get("token") && element.user == "button") {
                return (
                  <div
                    onClick={() => {
                      logoutFunc();
                    }}
                    key={index}
                    className={`block mt-4 lg:inline-block lg:mt-0  px-4 py-2 rounded hover:text-green-600  mr-2 ${element.link == "signup" ? "lg:ml-auto" : "lg:ml-2"
                      } ${element.link == location.pathname
                        ? " underline text-green-600"
                        : " "
                      }`}
                  >
                    {element.label}
                  </div>
                );
              }
            })}
          </div>

          {/* NavBar Render End */}


          {Cookies.get("token") ? <div className="mx-6 md:hidden">
            <button
              onClick={() => {
                logoutFunc();
                setNavId(0);
              }}
              className={` mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 font-semibold mt-5 uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]`}
              type="button"
              data-te-ripple-init
              data-te-ripple-color="light"
              style={{
                background: "#FF0000",
              }}> <PowerSettingsNewIcon /> Logout</button>
          </div> : null}
        </div>

      </nav>
    </>
  );
};

export default NavMenu;

