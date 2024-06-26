import React from 'react';
import JobDetails from './JobDetails';

const Header = () => {
  return (
    <div className='border-b  mb-2 mt-10'>
        <div className='pl-10 md:pl-20'>
    <div className=" flex flex-col md:flex-row md:items-center ">
      <h1 className="text-2xl md:text-4xl font-bold ">Senior Product Designer</h1>
      <p className="text-gray-500 md:ml-4">posted 2 days ago <span className="text-green-500 bg-emerald-100 text-xs rounded-full p-1">· Open</span></p>
    </div>
    <JobDetails/>
        </div>
    </div>
  );
};

export default Header;
