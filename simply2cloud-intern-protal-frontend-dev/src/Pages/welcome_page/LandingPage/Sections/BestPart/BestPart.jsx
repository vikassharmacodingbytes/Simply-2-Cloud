import React from 'react'
import img from "../../Images/700x449.png"

const best_part_list= [
    {title:"Win-Win Model",info:"Our Interns are here for internship experience. You get them for free."},
    {title:"Get quality work done quickly",info:"Every Intern has gone through skilled training from our Training Partner PepperAnimation.com"},
    {title:"No Credit Card Required",info:"Upfront quotes mean no surprises. Payments only get released when you approve."},
    {title:"Count on 24/7 support",info:"Our round-the-clock support team is available to help anytime, anywhere."},
]

function BestPart() {
    return (

        <div className="best-part-section mt-32 mb-16 bg-[#f1fdf7]">
            <div className="best-part-inner px-[32px] py-20">
                <div className="section flex lg:flex-row  flex-col gap-12">
                    <div className="section-text">
                        <div className="heading text-3xl font-bold mb-4 text-[#404145]">
                            <h1>The best Interns!<wbr /> Totally Free!!</h1>
                        </div>
                        <div className="list-items list-none">
                            
                            {best_part_list.map( ({title,info})=> 
                                (<div className="list-item text-lg mb-4">
                                <div className="text-[#404145] mb-2 font-bold flex items-center gap-2">
                                    <span className='w-[24px] h-[24px]'>    
                                        <svg className='w-full h-full fill-[#7A7D85]' width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M8 1.75C4.54822 1.75 1.75 4.54822 1.75 8C1.75 11.4518 4.54822 14.25 8 14.25C11.4518 14.25 14.25 11.4518 14.25 8C14.25 4.54822 11.4518 1.75 8 1.75ZM0.25 8C0.25 3.71979 3.71979 0.25 8 0.25C12.2802 0.25 15.75 3.71979 15.75 8C15.75 12.2802 12.2802 15.75 8 15.75C3.71979 15.75 0.25 12.2802 0.25 8Z"></path><path d="M11.5303 5.46967C11.8232 5.76256 11.8232 6.23744 11.5303 6.53033L7.53033 10.5303C7.23744 10.8232 6.76256 10.8232 6.46967 10.5303L4.46967 8.53033C4.17678 8.23744 4.17678 7.76256 4.46967 7.46967C4.76256 7.17678 5.23744 7.17678 5.53033 7.46967L7 8.93934L10.4697 5.46967C10.7626 5.17678 11.2374 5.17678 11.5303 5.46967Z"></path></svg>
                                    </span> 
                                    <h4 className='text-xl'>{title}</h4>
                                </div>     
                                <p className="text-[#424242] text-xl leading-snug">{info}</p>
                                </div>)
                            )}
                        </div>
                    </div>
                    <div className="section-image grow">
                        <img src={img} className="object-cover rounded-md" />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default BestPart
