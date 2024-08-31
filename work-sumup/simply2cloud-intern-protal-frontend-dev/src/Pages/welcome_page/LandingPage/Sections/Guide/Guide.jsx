import React from 'react'
import { SampleNextArrow, SamplePrevArrow } from '../PopularServices/PopularServices';
import Slider from 'react-slick';
import blog_img1 from "../../Images/Blogs/Blog 1.png"
import blog_img2 from "../../Images/Blogs/Blog  2.png"
import blog_img3 from "../../Images/Blogs/Blog  3.png"

function Guide() {
    return (
        <div class="work-section">
            <div class="work-section-inner px-[32px]">
                <GuideSlides/>
            </div>
        </div>
    )
}

function GuideSlide({ img, title }) {
    return (
        <div class="slide mx-4">
            <div class="card">
                <img src={img} class="object-cover rounded-t-md w-full" />

                {/* <div class="card-footer flex gap-4 items-center pt-2 pb-[12px]">

                    <div class="business-details">
                        <h1 class="text-gray-600 text-base font-medium">Start a side business</h1>
                    </div>
                </div> */}
                
            </div>

        </div>
    )
}

function GuideSlides()
{
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
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
                {[blog_img1,blog_img2,blog_img3].map(  img=> 
                    (<GuideSlide img={img}/>)
                )}
            </Slider>
        </div>
    )
}

export default Guide
