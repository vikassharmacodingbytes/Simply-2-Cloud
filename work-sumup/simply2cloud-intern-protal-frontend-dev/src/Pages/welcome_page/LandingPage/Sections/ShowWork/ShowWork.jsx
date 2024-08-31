import React from 'react'
import { SampleNextArrow, SamplePrevArrow } from '../PopularServices/PopularServices';
import Slider from 'react-slick';
import work_img1 from "../../Images/WorkImages/Work showcase 1.png"
import work_img2 from "../../Images/WorkImages/Work showcase 2.png"
import work_img3 from "../../Images/WorkImages/Work showcase 3.png"
import work_img4 from "../../Images/WorkImages/Work showcase 4.png"
import work_img5 from "../../Images/WorkImages/Work showcase 5.png"


const show_work_lists= [
      {
        "img": work_img1,
        "profile_img": "path/to/profile1.jpg",
        "work": "Graphic Design",
        "by": "CreativeDesigner1"
      },
      {
        "img": work_img2,
        "profile_img": "path/to/profile2.jpg",
        "work": "Video Editing",
        "by": "VideoMaestro2"
      },
      {
        "img": work_img3,
        "profile_img": "path/to/profile3.jpg",
        "work": "Logo Design",
        "by": "LogoArtisan3"
      },
      {
        "img": work_img4,
        "profile_img": "path/to/profile4.jpg",
        "work": "Web Design",
        "by": "WebWizard4"
      },
      {
        "img": work_img5,
        "profile_img": "path/to/profile5.jpg",
        "work": "Digital Marketing",
        "by": "MarketingMaven5"
      }
    ]
  
  

function ShowWork() {
    return (
        <div class="work-section my-10 md:my-28">
            <div class="work-section-inner py-10 md:py-20 px-[32px] bg-[#f5f5f5]">
                <div className='heading mb-8 text-gray-600 font-bold text-3xl md:text-4xl'>
                    <h1>Inspiring work made by our Interns</h1>
                </div>
                <ShowWorkSlides/>
            </div>
        </div>
    )
}


function ShowWorkSlide({ img, profile_img, work, by }) {
    return (
        <div class="slide mx-4 cursor-pointer group">
            <div class="card">
                <img src={img} class="object-cover rounded-t-lg h-64 object-center w-full brightness-90 group-hover:brightness-100" />

                <div class="card-footer flex gap-4 items-center ps-[16px] pt-[16px] pb-[12px] rounded-b-lg" style={{boxShadow:"0 0.14px 2.29266px rgba(0,0,0,.032), 0 0.37px 4.42626px rgba(0,0,0,.048), 0 3px 7px rgba(0,0,0,.09)"}}>
                    <div class="profile-img">
                        <img src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/c15f6b22da97be41a8878e753a1a16c2-863645391592368980.489561/AF1BF970-07CA-454B-8AF1-2F3E06838C8B" class="object-cover rounded-full" />
                    </div>
                    <div class="profile-details">
                        <h1 class="text-gray-600 font-medium">{work}</h1>
                        <h5 class="text-gray-400 text-sm">by {by}</h5>
                    </div>
                </div>
            </div>

        </div>
    )
}


function ShowWorkSlides() {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className='card-slides'>
            <Slider {...settings}>
                {show_work_lists.map( work_details=> 
                    (<ShowWorkSlide {...work_details}/>)
                )}
            </Slider>
        </div>
    )
}
export default ShowWork
