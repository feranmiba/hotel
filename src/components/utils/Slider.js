import React, { useState, useEffect } from 'react';
import { BsArrowLeft, BsArrowRight, BsArrowUpRightCircle } from 'react-icons/bs';
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

import Pic from '../../utils/images/62a0b8731b0b805dada6d664_Image-2-p-500.jpeg.png';

const Slider = ({ press }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);

  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setSlidesToShow(1);
    } else {
      setSlidesToShow(3);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Math.max(0, press.length - slidesToShow) : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= press.length - slidesToShow ? 0 : prevIndex + 1
    );
  };

  const getPageNumbers = () => {
    let start = Math.max(0, currentIndex - 1);
    let end = Math.min(press.length - 1, currentIndex + 1);

    if (currentIndex === 0) end = Math.min(press.length - 1, 2);
    if (currentIndex === press.length - 1) start = Math.max(0, press.length - 3);

    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="flex w-full md:justify-between mt-10 overflow-hidden">
        {press.slice(currentIndex, currentIndex + slidesToShow).map((pre, index) => (
          <div
            key={index}
            className="border w-full md:w-[45%] xl:w-[30%] h-[500px] py-10 px-5 flex flex-col justify-between"
          >
            <div>
              <h1 className="text-xl font-extrabold not-italic font-sans">{pre.title}</h1>
              <p className="mt-7 not-italic font-readex leading-8 text-sm">{pre.summary}</p>
            </div>
            <div className="font-readex not-italic font-light">
              <p className="mt-3 flex gap-1 text-lg">
                Read Article <BsArrowUpRightCircle className="text-lg mt-1" />
              </p>
              <div className="mt-12 flex gap-2 items-center">
                <img src={Pic} alt="Author" className="w-10 h-10 rounded-full" />
                <div>
                  <h6>OCTOBER 25, 2022</h6>
                  <h6>Condé Nast Traveler</h6>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center">
        <button
          onClick={handlePrev}
          className="px-4 py-2 text-white rounded"
        >
          <AiOutlineLeft />
        </button>  
        <div className="flex gap-2 mx-4">
          {pageNumbers.map(number => (
            <button
              key={number}
              onClick={() => setCurrentIndex(number)}
              className="px-4 py-2 border"
            >
              {number + 1}
            </button>
          ))}
        </div>
        <button
          onClick={handleNext}
          className="px-4 py-2 text-white rounded"
        >
          <AiOutlineRight />
        </button>
      </div>
    </div>
  );
};

export default Slider;
