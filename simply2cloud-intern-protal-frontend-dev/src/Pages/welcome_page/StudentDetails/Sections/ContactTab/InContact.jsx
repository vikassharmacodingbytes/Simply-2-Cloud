import React, { useContext, useEffect, useState } from "react";
import noUsr from "../../../../../image/nousr.jpg";
import API_BASE_URL from "../../../../../config";
import { SocialIcon } from "react-social-icons";
import whatsapp from "../../../../../image/whatsapp.png";
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import ContactIc from "../../../../../image/icons/ContactIc";
import { useNavigate } from "react-router-dom";
import LinkdinIc from "../../../../../image/icons/LinkdinIc";
import PortfolioLink from "../../../../../image/icons/PortfolioLink";
import Email from "../../../../../image/icons/Email";
import WhatsappIc from "../../../../../image/icons/WhatsappIc";
import { ToastContainer, toast } from "react-toastify";
import Cookies from "js-cookie";

const InContact = ({ internProfileFullDetails }) => {

  const navigate = useNavigate();

  const registeredCompanyError = () => {
    toast.error("Only Registered Company can contact Intern");
  }
  return (
    <>
      <ToastContainer />
      <div className="flex space-x-4 ">
        <div id="imageDiv">
          <img
            src={
              internProfileFullDetails?.profile_details.user_image != null
                ? `${API_BASE_URL}/${internProfileFullDetails?.profile_details.user_image}`
                : noUsr
            }
            alt={"loading..."}
            className="rounded-full md:h-[4rem] md:w-[4rem] w-[4rem] h-[4rem] object-cover border-4 border-solid border-white"
          />
        </div>
        <div>
          <div className="font-bold text-lg text-gray-700">
            {internProfileFullDetails?.profile_details?.intern?.name}
          </div>
          <div className="text-gray-600">
            <span>
              {
                internProfileFullDetails?.profile_details?.job_categoery
                  ?.job_category
              }
            </span>{" "}
            <span className={"text-xs font-semibold"}>
              {
                internProfileFullDetails?.profile_details?.sub_categoery
                  ?.sub_category_name
              }
            </span>
          </div>
        </div>
      </div>
      {/* Contact Button */}
      <div className=" pb-1 pt-1 text-center">
        <button
          className={`mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 font-semibold mt-5 uppercase leading-normal ${Cookies.get("user") == internProfileFullDetails?.profile_details?.intern?.id ? 'bg-gray-400 cursor-not-allowed' : 'bg-black'} text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]`}
          type="button"
          disabled={Cookies.get("user") == internProfileFullDetails?.profile_details?.intern?.id}
          onClick={() => {
            if (internProfileFullDetails?.profile_details?.intern?.phone) {
              navigate(`/chat/${internProfileFullDetails?.profile_details?.intern?.id}`);
            }
            else {
              navigate(`/chat/${internProfileFullDetails?.profile_details?.intern?.id}`);
              // registeredCompanyError()
            }
          }}
          data-te-ripple-init
          data-te-ripple-color="light"
          style={{
          }}
        >
          <ContactIc />{" Contact Me"}
        </button>
      </div>
      {/* <div className="text-center">
            Experience of more than{" "}
            {internProfileFullDetails?.profile_details.experience_years} Year
          </div> */}

      <div className="flex ">

        <button className="ml-auto mr-4" onClick={() => {
          if (internProfileFullDetails?.profile_details?.linkedin_profile) {
            window.open(internProfileFullDetails?.profile_details?.linkedin_profile, "_blank");
          }
          else {
            registeredCompanyError()
          }
        }}>
          <LinkdinIc />
        </button>
        {/* <SocialIcon url={ ? internProfileFullDetails?.profile_details?.linkedin_profile : "https://linkdin.com"} target="_blank"/> */}
        <button className="mr-4 ml-4" onClick={() => {
          if (internProfileFullDetails?.profile_details?.intern?.phone) {
            window.open(`https://wa.me/${internProfileFullDetails?.profile_details?.intern?.phone}`, "_blank")
          }
          else {
            registeredCompanyError()
          }
        }}>
          <WhatsappIc />
        </button>
        {/* <a href={``} target="_blank">  <img src={whatsapp} className="h-[3rem] w-[3rem] rounded-full"/></a> */}
        <button className="mr-4 ml-4"

          onClick={() => {
            if (internProfileFullDetails?.profile_details?.portfolio_link) {
              window.open(internProfileFullDetails?.profile_details?.portfolio_link, "_blank")
            }
            else {
              registeredCompanyError()
            }
          }}>
          <PortfolioLink />
        </button>
        {/* <SocialIcon url={internProfileFullDetails?.profile_details?.portfolio_link} target="_blank"/> */}
        <button className="mr-auto ml-4" onClick={() => {
          if (internProfileFullDetails?.profile_details?.intern?.email) {
            window.open(`https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(internProfileFullDetails?.profile_details?.intern?.email)}`);
          }
          else {
            registeredCompanyError();
          }
        }}>
          <Email />
        </button>
        {/* <SocialIcon url="mailto:your.email@gmail.com" target="_blank"/> */}
      </div>

    </>
  );
};

export default InContact;
