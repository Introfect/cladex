import { Eye, MessageSquare, Pencil, Trash2, UserRoundCheck, Users } from 'lucide-react';
import React from 'react';

const Sidebar = () => {
  return (
    <div className="h-full w-full bg-gray-100/40 mx-auto shadow-md p-4 border-l">
      <div className="flex flex-col items-center justify-center xl:flex-row lg:justify-between  m-2">
        <button className="bg-red-100 text-red-600 px-4 py-2 rounded-lg flex items-center justify-center w-full border border-[#DC4A2D]">
        <Trash2 className='w-4 mr-2' />
          Delete job
        </button>
        <button className="bg-[#DC4A2D] m-2 text-white px-4 py-2 rounded-lg flex items-center w-full justify-center border-2 border-red-200">
        <Pencil className='w-4 mr-2'/>
          Edit job
        </button>
      </div>
      <div className="space-y-4 mx-2">
        <div className="flex justify-between py-4 border-b">
          <div className="flex items-center">
          <Users className='w-5 mr-2 text-gray-600'/>
            <span className="font-light text-gray-600">Applicants</span>
          </div>
          <span className="font-semibold">400</span>
        </div>
        <div className="flex justify-between py-4 border-b">
          <div className="flex items-center">
          <UserRoundCheck className='text-gray-600 w-5 mr-2' />
            <span className='text-gray-600'>Matches</span>
          </div>
          <span className="font-semibold">100</span>
        </div>
        <div className="flex justify-between py-4 border-b">
          <div className="flex items-center">
          <MessageSquare className='w-5 mr-2 text-gray-600' />
            <span className='text-gray-600'>Messages</span>
          </div>
          <span className="font-semibold">147</span>
        </div>
        <div className="flex justify-between py-4">
          <div className="flex items-center">
          <Eye className='w-5 mr-2 text-gray-600' />
            <span className='text-gray-600'>Views</span>
          </div>
          <span className="font-semibold">800</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
