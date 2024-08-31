import React from 'react'
import { SampleNextArrow, SamplePrevArrow } from '../PopularServices/PopularServices';
import Slider from 'react-slick';
import timg_1 from '../../Images/TestimonialImages/Testimonial-post-1.jpg'
import timg_2 from '../../Images/TestimonialImages/Testimonial-post-3.jpg'
import timg_3 from '../../Images/TestimonialImages/Testimonial-post-2.jpg'


const testimonial_lists= [
    {img:timg_1,name:"NIkesh Rajbhar",review:"Pepper animation is the best institute for video editing and graphic design. I had a great experience here with learning . The teachers are very good in nature and the way of their teaching is great as compared to other institutions."},
    {img:timg_2,name:"priyanka gupta",review:"Best institute for graphic designer well qualified teachers like Bhawna ma'am My Experience in Pepper Animation rohini is nice and very comfortable. Great place to learn about creative courses in Design."},
    {img:timg_3,name:"Vishal Kumar",review:"I've experienced such a wonderful time in pepper animation as student of 3d blender in last 8 months.Faculties are just amazing.. So cooperative and cool.One of my best decision I've made by taking admission here."}

]

function Testimonial() {
    return (
        <div class="testimonial-section my-10 md:my-32">
            <div class="testimonial-section-inner px-[32px]">

                <div class="testimonial-slides">
                    <TestimonialSlides/>
                </div>
            </div>
        </div>
    )
}


function TestimonialSlide({ img, name, review }) {
    return (
        <div class="testimonial-slides">

            <div class="testimonial-slide flex md:flex-row flex-col gap-5">
                <div class="slide-img md:w-2/5 lg:w-[35%]">
                    <img src={img} class="object-cover rounded-md" />
                </div>

                <div class="slide-text md:w-3/5 lg:w-[65%]">
                    <div class="heading">
                        <h1 class="text-xl text-[#99999b]">{name}</h1>
                        {/* <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/naadam-logo-x2.a79031d.png" class="object-contain w-16 md:w-20" /> */}
                    </div>

                    <div class="testmonial-text text-2xl text-[#083f19] font-serif">
                        <blockquote>
                            <i>
                                "{review}"
                            </i>
                        </blockquote>
                    </div>
                </div>
            </div>

        </div>
    )
}

function TestimonialSlides()
{
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        
      };
    return(
        <div className='card-slides'>
            <Slider {...settings}>
                {testimonial_lists.map( (testimonial_profile)=> 
                    (<TestimonialSlide {...testimonial_profile}/>)
                )}    
            </Slider>
        </div>
    )
}

export default Testimonial
