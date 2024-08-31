import React from 'react'
import Slider from "react-slick";
import { IoSearch } from "react-icons/io5";


import b1 from '../../Images/HeaderImages/banner1.jpg'
import b2 from '../../Images/HeaderImages/banner2.jpg'
import b4 from '../../Images/HeaderImages/banner3.jpg'
import b5 from '../../Images/HeaderImages/banner4.jpg'

import pimg from "../../Images/christina-2x.png"

import logo1 from "../../Images/LogoImages/CODING-LOGO.jpg"
import logo2 from "../../Images/LogoImages/EDM-LOGO.jpg"
import logo3 from "../../Images/LogoImages/PEPPER-LOGO.jpg"
import logo4 from "../../Images/LogoImages/fILING-LOGO.jpg"
import NmAutoCmpSrc from '../../../NmHome/NmSearch/NmAutoCmp/NmAutoCmpSrc';
import { API_ROUTE_URL } from '../../../../../config';
import { NavLink } from 'react-router-dom';





const company_logo= [logo1,logo2,logo3,logo4]
const banner_images = [b1,b2, b4, b5]
const banner_text = [
  { img: pimg, role: "Production Assistant", name: "@Jenny" },
  { img: pimg, role: "Production Assistant", name: "@Rahul" },
  { img: pimg, role: "Production Assistant", name: "@Pankaj" },
  { img: pimg, role: "Production Assistant", name: "@Jenny" },
]

const tabs = [
  {
    label : "Graphic Designers",
    url : `/search?search_categoery=Graphic Design&search_id=3`
},
  {
    label :  "Video Editor",
    url : `/search?search_categoery=Video Editing&search_id=2`
 },
  {
    label : "Photo Editor",
    url : `/search?search_categoery=Photo Editing&search_id=1`
  }
]

function Header() {
  return (
    <div className='header-section'>
      <div className='header-inner relative md:h-screen'>

        <div className='slider-container '>

          <FadeSlide />
        </div>

        <div className='banner-text absolute top-1/4 md:top-1/3 left-[32px] md:right-0 right-[32px]'>
          <div className='heading text-4xl md:text-6xl text-white font-semibold leading-none md:leading-[4.5rem]'>
            <h1>Find highly motivated <span className='font-["auto"] italic'>interns, </span><br /> totally free</h1>
          </div>
          <div className='search-services my-5 flex md:flex-row flex-col md:gap-0 gap-3'>
          <NmAutoCmpSrc />
            {/* <input className='w-full md:w-[400px] lg:w-[650px] md:text-lg text-base rounded-md text-gray-500 outline-none px-4 py-2 md:py-3 md:px-5 md:rounded-r-[0px]' type='text' placeholder='Search for any Service' /> */}
            <div className='text-white text-2xl bg-[#1dbf73]/80 py-3 px-6 rounded-md rounded-l-[0px] hover:cursor-pointer hover:bg-[#1dbf73]/100 transition-all md:block hidden'>
              <IoSearch />
            </div>

            <div className='text-white  bg-[#1dbf73]/80 py-2 px-6 rounded-md text-center hover:cursor-pointer hover:bg-[#1dbf73]/100 transition-all block md:hidden'>
              Search
            </div>
          </div>

          <div className='tabs md:block hidden'>
            <ul className='font-semibold list-none flex items-center gap-2 text-white'>
              <li className=''>Popular: </li>
              {tabs.map(tab => (<NavLink to={tab.url} className='rounded-full px-3 py-[2px]  border-[1px] border-white hover:text-gray-700 hover:bg-white cursor-pointer'>{tab.label}</NavLink>))}
            </ul>
          </div>
        </div>

      </div>
    </div>
  )
}


function FadeSlide() {
  const settings = {
    dots: false,
    arrows: false,
    autoplay: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    draggable: false,
    pauseOnHover: false
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {banner_images.map((img, index) =>
        (
          <div className='slide relative'>
            <img src={img} className='md:h-screen h-[500px]  w-full object-cover object-left' />
            <div className='profile-container absolute bottom-11 right-11'>
              <div className='profile-inner invisible lg:visible text-white flex gap-2 bg-[hsla(0,0%,100%,.14)] backdrop-blur-md border-[1px] border-[hsla(0,0%,100%,.4)] rounded-full py-3 px-5'>
                <div className='profile-img'>
                  <img src={banner_text[index].img} />
                </div>
                <div className='profile-details font-semibold'>
                  <h1 className='text-sm'>{banner_text[index].name}</h1>
                  <h1 className='text-lg -mt-2'>{banner_text[index].role}</h1>
                </div>

              </div>
            </div>
          </div>
        )
        )}
      </Slider>
    </div>
  );
}


export function CompanyGrid()
{
  return(
    <div className='company-icons bg-[#c2c3c7]/10 py-7 lg:px-52 md:px-28 sm:px-8 px-1'>
      <div className='company-icon-inner grid lg:grid-cols-5 grid-cols-4 gap-3 sm:gap-10 items-center'>
        <div className='text text-[#b5b6ba] text-lg font-semibold lg:block hidden'>Trusted by:</div>
        {company_logo.map(cl=> 
          (<div className='company_img'>
              <img src={cl} className='object-contain'/>
            </div>))}
      </div>
    </div>
  )
}







export default Header
