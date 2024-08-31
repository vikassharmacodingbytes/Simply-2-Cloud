import React,{useRef} from "react";
import third1 from '../images/third1.webp';
import third2 from '../images/third2.webp';
import third3 from '../images/third3.webp';
import third4 from '../images/third4.webp';
import third5 from '../images/third5.webp';
import third6 from '../images/third6.webp';
import third7 from '../images/third7.webp';
import third8 from '../images/third8.webp';
import third9 from '../images/third9.webp';
import third10 from '../images/third10.webp';
import third11 from '../images/third11.webp';
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";

function NmSection3() {
    const images = [third1, third2, third3, third4, third5, third6, third7, third8, third9, third10, third11];
    
  return (
    <div className="bg-pink-50 p-2 md:p-20">
      <div className="text-left text-2xl font-semibold">
        <h1>Popular Services</h1>
      </div>
      <ImageGrid imageSources={images} />
    </div>
  );
}

export default NmSection3;



const ImageGrid = ({ imageSources}) => {
  const slideLeft = () =>{
    var slider = document.getElementById('slider')
    slider.scrollLeft -= 1 * getImageWidth(); // Assuming each image has a consistent width
  }

  const slideRight = () =>{
    var slider = document.getElementById('slider')
    slider.scrollLeft += 1 * getImageWidth(); // Assuming each image has a consistent width
  }
  const getImageWidth = () => {
    // Replace this value with the actual width of one image in pixels
    return 200; // Example width, update according to your actual image width
  };

  return (
    <div className="flex items-center" >
      <ArrowBackIosNew className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideLeft} size={30} />
      <div id='slider' className='w-full h-full overflow-hidden whitespace-nowrap scroll-smooth scrollbar-hide'>
      {imageSources.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Image ${index + 1}`}
          className="p-2 text-center  inline-block   text-xs sm:text-sm hover:scale-105 hover:opacity-80 ease-in-out duration-200 rounded-md  my-7 cursor-pointer"
        />
      ))}
     </div>
      <ArrowForwardIos className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideRight} size={30} />
    </div>
  );
};


