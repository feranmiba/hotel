import React from 'react';

const Dots = ({ currentSlide, setCurrentSlide }) => {
  const totalDots = 4; // Fixed number of dots

  return (
    <div className='flex gap-5  justify-center -mt-20 '>
      {[...Array(totalDots)].map((_, index) => (
        <div
          key={index}
          onClick={() => setCurrentSlide(index)}
          className={` w-5 h-5 mx-1 rounded-full cursor-pointer z-50  ${index === currentSlide ? ' border rounded-full px-2 py-2' : 'bg-gray-300'}`}
        />
      ))}
    </div>
  );
};

export default Dots;
