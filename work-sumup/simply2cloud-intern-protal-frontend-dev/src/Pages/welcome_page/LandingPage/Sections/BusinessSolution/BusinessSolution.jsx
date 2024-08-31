import React from 'react'
import profiles_img from "../../Images/BusinessSolutions/870x631.png"

const business_solution_lists = [
    { title: "PAPro", info: "PepperAnimation managed projects. We will manage the interns or hire for your specific need" },
    { title: "PA Certified", info: "Need experienced professionals? Contact us!" },
    { title: "PA Project Managers", info: "Need skilled project managers or business analysts? Contact us!" },
]
function BusinessSolution() {
    return (
        <div class="business-solution-section">
            <div class="business-solution-inner px-[64px] py-[80px] rounded-3xl text-white bg-[#0d084d]">
                <div class="container flex md:flex-row items-center flex-col gap-14 ">

                    <div class="container-left md:text-left text-center">
                        <div class="heading-text flex items-baseline gap-2 md:justify-start justify-center">
                            <div class="svg-icon">
                                {/* <svg width="89" height="27" viewBox="0 0 89 27" fill="none" xmlns="http://www.w3.org/2000/svg"><g fill="#fff"><path d="m81.6 13.1h-3.1c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-13.4h-2.5c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-18.4h6v2.8c1-2.2 2.3-2.8 4.3-2.8h7.3v2.8c1-2.2 2.3-2.8 4.3-2.8h2zm-25.2 5.6h-12.4c.3 2.1 1.6 3.2 3.7 3.2 1.6 0 2.7-.7 3.1-1.8l5.3 1.5c-1.3 3.2-4.5 5.1-8.4 5.1-6.5 0-9.5-5.1-9.5-9.5 0-4.3 2.6-9.4 9.1-9.4 6.9 0 9.2 5.2 9.2 9.1 0 .9 0 1.4-.1 1.8zm-5.7-3.5c-.1-1.6-1.3-3-3.3-3-1.9 0-3 .8-3.4 3zm-22.9 11.3h5.2l6.6-18.3h-6l-3.2 10.7-3.2-10.8h-6zm-24.4 0h5.9v-13.4h5.7v13.4h5.9v-18.4h-11.6v-1.1c0-1.2.9-2 2.2-2h3.5v-5h-4.4c-4.3 0-7.2 2.7-7.2 6.6v1.5h-3.4v5h3.4z"></path></g><g fill="#1dbf73"><path d="m85.3 27c2 0 3.7-1.7 3.7-3.7s-1.7-3.7-3.7-3.7-3.7 1.7-3.7 3.7 1.7 3.7 3.7 3.7z"></path></g></svg> */}
                            </div>
                            <div class="sm:text-xl  text-[12px]">Business Solution</div>
                        </div>
                        <div class="subheading-text font-bold text-3xl md:text-4xl md:leading-10 mt-5">
                            <h1>Managed solutions for businesses</h1>
                        </div>

                        <div class="business-solution-items my-5">

                            {business_solution_lists.map(({ title, info }) =>
                            (<div class="mb-6 business-solution-item flex items-center gap-4 md:justify-start justify-center">
                                <div class="item-svg-icon md:block hidden">
                                    <svg width="24" height="24" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg" fill="#B1ABFF"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.203.432a1.891 1.891 0 0 0-2.406 0l-1.113.912a1.904 1.904 0 0 1-.783.384l-1.395.318c-.88.2-1.503.997-1.5 1.915l.007 1.456c0 .299-.065.594-.194.863L.194 7.59a1.978 1.978 0 0 0 .535 2.388l1.12.903c.231.185.417.422.543.692l.615 1.314a1.908 1.908 0 0 0 2.166 1.063l1.392-.33c.286-.068.584-.068.87 0l1.392.33a1.908 1.908 0 0 0 2.166-1.063l.615-1.314c.126-.27.312-.507.542-.692l1.121-.903c.707-.57.93-1.563.535-2.388l-.625-1.309a1.983 1.983 0 0 1-.194-.863l.006-1.456a1.947 1.947 0 0 0-1.5-1.915L10.1 1.728a1.904 1.904 0 0 1-.784-.384L8.203.432Zm2.184 5.883a.742.742 0 0 0 0-1.036.71.71 0 0 0-1.018 0L6.565 8.135 5.095 6.73a.71.71 0 0 0-1.018.032.742.742 0 0 0 .032 1.036L6.088 9.69a.71.71 0 0 0 1.001-.016l3.297-3.359Z"></path></svg>
                                </div>
                                <div class="item-text">
                                    <div class="heading font-bold text-xl">{title}</div>
                                    <p class="md:leading-snug text-xl leading-[24px]">{info}</p>
                                </div>

                            </div>)
                            )}
                        </div>

                        <div class="learn-more-btn mt-7">
                            <a href="#" class="bg-white py-2 rounded text-gray-500 font-medium px-5">Learn More</a>
                        </div>
                    </div>

                    <div class="container-right">
                        <div class="right-side-img">
                        <img src={profiles_img} className=' object-contain w-full h-full'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default BusinessSolution
