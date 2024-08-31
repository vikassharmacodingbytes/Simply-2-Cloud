import React from 'react'
import banner_img from "../../Images/1400x442.png"

function LastBanner() {
    return (
        <div class="banner-section-second px-[32px] my-10 md:my-28">
            <div class="banner-section-inner relative text-white ">
                <img src={banner_img} class=" lg:object-top object-none object-left h-[300px] lg:h-[350px] w-full rounded-sm" />

                <div class="banner-text absolute top-[50%] -translate-y-[60%] w-full ps-[32px] pt-[64px]">
                    <h1 class="font-semibold md:text-4xl text-3xl">Hire a free intern <i>today.</i></h1>

                    <div class="btn mt-7">
                        <a href="#" class="bg-[#1dbf73] px-5 py-2 rounded-sm font-semibold">Join Us</a>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default LastBanner
