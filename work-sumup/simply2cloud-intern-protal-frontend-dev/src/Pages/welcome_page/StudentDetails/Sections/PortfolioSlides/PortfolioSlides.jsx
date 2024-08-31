import Slider from "react-slick";
import { SampleNextArrow, SamplePrevArrow } from "../../../LandingPage/Sections/PopularServices/PopularServices";
import API_BASE_URL from "../../../../../config";
import YouTube from "react-youtube";

const isYouTubeVideo = (url) => {
    return url.includes("youtube.com") || url.includes("youtu.be");
};

const getYouTubeThumbnail = (url) => {
    if (isYouTubeVideo(url)) {
        const videoId = url.includes("youtube.com") ? url.split("v=")[1] : url.split("/").pop();
        return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
    }
    return null; // Return null for non-YouTube URLs
};

function getYouTubeVideoId(url) {
    const regExp = /^.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);

    if (match && match[1]) {
        return match[1];
    } else {
        return null;
    }
}

const TestimonialSlide = ({ portfolio_link, user_image }) => {
    return (
        <div className="slider-item h-[20rem] w-full flex cursor-pointer bg-green" onClick={() => {
            if (isYouTubeVideo(portfolio_link)) {
                window.open(portfolio_link, "_blank")
            }
            else {
                window.open(`${API_BASE_URL}${user_image}`, "_blank")
            }
        }}>
            {isYouTubeVideo(portfolio_link) ? (
                <YouTube videoId={getYouTubeVideoId(portfolio_link)} 
                className="overflow-x-scroll w-full h-full"
                opts={{
                  width: '100%',
                  height: '100%',
                  playerVars: {
                    // Any additional playerVars you may need
                  }
                }}
                />
            ) : (
                <img src={`${API_BASE_URL}/${user_image}`} alt="User Testimonial" className="object-cover h-full w-auto mx-auto" />
            )}
        </div>
    );
};

function TestimonialSlides({ internProfileFullDetails }) {
    const skills = internProfileFullDetails?.profile_details?.skills;
    if (!skills || skills?.length === 0) return null;
    return (
        <div className="card-slides mb-4">
            <div className="mt-10">
                <h1 className="font-semibold text-2xl text-gray-700 mb-4">Visual Creations</h1>
            </div>
            {skills.length === 1 ? isYouTubeVideo(skills[0]?.portfolio_link) ? (
                <div className="slider-item h-[20rem] w-full flex cursor-pointer">
                    <YouTube videoId={getYouTubeVideoId(skills[0]?.portfolio_link)} 
                     containerClassName="relative w-full overflow-hidden"
                     className="overflow-x-scroll w-full h-full"
                     opts={{
                       width: '100%',
                       height: '100%',
                       playerVars: {
                         // Any additional playerVars you may need
                       }
                     }} 
                     />
                </div>
            ) :
                <div className="slider-item h-[20rem] w-full flex cursor-pointer" onClick={() => {
                    window.open(skills[0]?.portfolio_link, "_blank");
                }}>
                    <img src={`${API_BASE_URL}${skills[0].user_image}`} alt="YouTube Thumbnail" className="object-cover h-full w-auto mx-auto" />
                </div>
                : (
                    <Slider
                        dots={false}
                        infinite={true}
                        speed={500}
                        slidesToShow={1}
                        slidesToScroll={1}
                        initialSlide={0}
                        nextArrow={<SampleNextArrow />}
                        prevArrow={<SamplePrevArrow />}>
                        {skills.map((element, index) => (
                            <TestimonialSlide key={index} {...element} />
                        ))}
                    </Slider>
                )}
        </div>
    );
}

export default TestimonialSlides;
