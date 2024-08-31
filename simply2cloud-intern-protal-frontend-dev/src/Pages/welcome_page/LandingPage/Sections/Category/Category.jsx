import React from 'react'
import { useNavigate } from 'react-router-dom'
import motion from "../../Images/categoery/motion.png";
import mern from "../../Images/categoery/mern.png";
import photo from "../../Images/categoery/photo.png";
import software from "../../Images/categoery/software.png";
import video from "../../Images/categoery/video.png";
import app from "../../Images/categoery/app.png";
import web from "../../Images/categoery/web.png";
import logo from "../../Images/categoery/logo.png";
import illustrator from "../../Images/categoery/ill.png";

const all_category = [
    { title: "Graphics & Design", icon: "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/graphics-design.91dfe44.svg", link: "/search?search_categoery=Graphic%20Design&search_id=3" },
    { title: "Motion Graphics", icon: motion, link: "/search?search_skills=Motion%20Graphics&search_id=3" },
    { title: "Illustrator", icon: illustrator, link: "/search?search_skills=Illustrator&search_id=5" },
    { title: "Logo Designer", icon: logo, link: "/search?search_sub_categoery=Logo%20Designer&search_id=4" },
    { title: "Software Devloper", icon: software, link: "/search?search_categoery=Software%20Devloper&search_id=4" },
    { title: "Photo Editing", icon: photo, link: "/search?search_categoery=Photo%20Editing&search_id=1" },
    { title: "App Devloper", icon: app, link: "/search?search_sub_categoery=App%20Devloper&search_id=14" },
    { title: "Video & Animation", icon: video, link: "/search?search_categoery=Video%20Editing&search_id=2" },
    { title: "MERN Devloper", icon: mern, link: "/search?search_sub_categoery=MERN%20Devloper&search_id=16" },
    { title: "Web Devloper", icon: web, link: "/search?search_sub_categoery=Web%20Devloper&search_id=13" }
]


function Category() {
    const navigate = useNavigate();
    return (
        <div class="all-category-section">
            <div class="all-category-section-inner px-[32px] mb-16">
                <div class="heading text-3xl font-semibold mb-9 text-[#404145]">
                    <h1>You need it, we've got it</h1>
                </div>
                <div class="category-items grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-7">
                    {all_category.map(({ title, icon, link }) =>
                    (<div class="category-item cursor-pointer group" onClick={()=>{
                        navigate(link);
                    }}>
                        <div class="category-icon">
                            <img src={icon} class="object-contain w-14 mx-auto" />
                        </div>
                        <hr class="transition-all mx-auto group-hover:border-[#1dbf73] group-hover:w-1/4 w-1/6" />
                        <div class="category-name text-[#7d7d7f] font-semibold text-center">
                            <p>{title}</p>
                        </div>
                    </div>)
                    )}
                </div>
            </div>
        </div>
    )
}

export default Category
