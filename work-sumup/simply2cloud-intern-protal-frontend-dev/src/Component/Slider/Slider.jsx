import React, { useState } from 'react';

const products = [
    // Your product data goes here
    { id: 1, name: 'Product 1', /* other properties */ },
    { id: 2, name: 'Product 2', /* other properties */ },
    { id: 3, name: 'Product 3', /* other properties */ },
    { id: 4, name: 'Product 4', /* other properties */ },
    { id: 5, name: 'Product 5', /* other properties */ },
    { id: 6, name: 'Product 6', /* other properties */ },
    { id: 6, name: 'Product 6', /* other properties */ },
    { id: 6, name: 'Product 6', /* other properties */ },
    { id: 6, name: 'Product 6', /* other properties */ },
    // Add more products as needed
];

const ProductSlider = () => {
    const itemsPerPage = 4;
    
    const [startIndex , setStartIndex] = useState(0);
    const [endIndex, setEndIndex] = useState(4);



    const nextSlide = () => {
        
        if(endIndex == products.length){
            return; 
        }
        setStartIndex((prevIndex)=> prevIndex + 1);     
        setEndIndex((prevIndex)=> prevIndex + 1);   
    };

    const prevSlide = () => {
        if (startIndex == 0){
            return;
        }
        setStartIndex((prevIndex)=> prevIndex - 1);     
        setEndIndex((prevIndex)=> prevIndex - 1);   
    };

    return (
    <>
    <div className="flex transition-transform duration-300 ease-in-out w-[100%] overflow-x-hidden" >
        {products.map((product) => (
            <div key={product.id} className="px-4 bg-green-200" style={{ transform: `translateX(-${startIndex * (100 / itemsPerPage)}%)` }}>
            <div className="bg-gray-200 p-4 mb-4 w-[20rem] ">
              <h2 className="text-lg font-semibold">{product.name}</h2>
            </div>
          </div>
        ))}
      </div>

      <button
    className=" transform -translate-y-1/2 bg-gray-500 px-4 py-2 text-white"
    onClick={prevSlide}
  >
    Prev
  </button>
  <button
    className=" transform -translate-y-1/2 bg-gray-500 px-4 py-2 text-white"
    onClick={nextSlide}
  >
    Next
  </button>
        </>
    
    );
};

export default ProductSlider;


{/* <div className="flex items-center justify-center">
<div className="w-full max-w-screen-xl overflow-hidden relative">
  <div className="flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${startIndex * (100 / itemsPerPage)}%)` }}>
    {visibleProducts.map((product) => (
      <div key={product.id} className="w-1/4 px-4">
        <div className="bg-gray-200 p-4 mb-4">
          <h2 className="text-lg font-semibold">{product.name}</h2>
        </div>
      </div>
    ))}
  </div>
  
</div>
</div> */}