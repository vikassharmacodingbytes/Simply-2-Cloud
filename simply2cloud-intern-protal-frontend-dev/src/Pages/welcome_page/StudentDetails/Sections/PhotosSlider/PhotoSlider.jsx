import React, { useState, useEffect, useContext } from "react";
import "./PhotoSlider.css";
import { ArrowBack, ArrowBackIos, ArrowForward, ArrowForwardIos, ArrowLeft, ArrowRight, ForkRight } from "@mui/icons-material";
import API_BASE_URL from "../../../../../config";

const PhotoSlider = ({ skills }) => {
  const [people, setPeople] = useState(skills);
  const [index, setIndex] = React.useState(0);

  const images = skills.map((element, index) => {
    return {
      url: `${API_BASE_URL}/${element.user_image}`,
      skills_name: element.skill_name
    }
  })
  useEffect(() => {
    const lastIndex = images.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);



  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);
  return (

    <>
    <section className="section relative bg-white">
     
     <div className="mt-10">
         <h1 className='font-semibold text-2xl text-gray-700'>Portfolio</h1>

      </div>


      {
        images?.length == 1 ? <>
          <div className={``}>
            <h4 className="text-center sm:text-xl font-semibold mt-4 underline text-gray-700">{skills[0].skill_name}</h4>
            <div className="flex justify-center items-center">
              <img src={API_BASE_URL + "/" + skills[0].user_image} alt={"name"} className="person-img md:h-[460px] h-[300px] mt-4" />
            </div>
          </div>
        </> :
          <>
            <div className="section-center">


              {

                images.map((person, personIndex) => {


                  let position = "nextSlide";
                  if (personIndex === index) {
                    position = "activeSlide";
                  }
                  if (
                    personIndex === index - 1 ||
                    (index === 0 && personIndex === people.length - 1)
                  ) {
                    position = "lastSlide";
                  }
                  return (
                    <article className={`${position}  `} key={personIndex} >
                      <h4 className="text-center sm:text-xl font-semibold mt-4 underline">{person.skills_name}</h4>
                      <div className="flex justify-center items-center">

                        <img src={`${person.url}`} alt={"name"} className="person-img md:h-[460px] h-[300px] mt-4" />
                      </div>
                    </article>
                  );
                })
              }
            </div>
            <button className="absolute top-[215px] md:left-[6rem]" onClick={() => setIndex(index - 1)}>

              <ArrowBackIos />
            </button>
            <button className="absolute right-0 md:right-[6rem] top-[215px]" onClick={() => setIndex(index + 1)}>
              <ArrowForwardIos />
            </button>
          </>
      }
    </section>
                </>
  );
};


export default PhotoSlider