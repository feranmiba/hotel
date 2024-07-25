import React from 'react';

const BorderWithCircle = () => {
  return (
    <div>
    <div className="flex items-center">
    <div className="h-3 w-3  border border-white p-3 rounded-full "></div>
    <div className=' h-3 w-3 rounded-full bg-white -ml-[18px]' ></div>
      <div className="h-0.5 w-full bg-white"></div>     
    </div>
    </div>
  );
};

export default BorderWithCircle;
