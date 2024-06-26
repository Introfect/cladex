import { Coins, MapPin, MapPinnedIcon } from 'lucide-react';
import React from 'react';

const JobDetails = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between md:justify-start items-start mb-6 mt-2">

        <div className="text-gray-700 mb-2 md:mb-0 flex mr-4"><MapPin className='mr-1 w-5' />Delaware, USA</div>
        <div className="text-gray-700 flex"><Coins className='mr-2 w-5'/>$300k-$400k</div>
      </div>
      <div className="flex flex-col items-start justify-start md:justify-between md:flex-row w-max md:space-x-16 mb-4">
        <div className='flex flex-col items-start'>
          <h3 className="font-semibold">Skills Required</h3>
          <div className="flex border justify-center items-center m-1 font-medium py-1 px-2 bg-white rounded-md text-purple-700border">
            <div slot="avatar">
                <div className="flex relative w-4 h-4 justify-center items-center m-1 mr-2 ml-0 my-0 text-xs rounded-full"><img alt="A" src="./image1.png"/> </div>
            </div>
            <div className="text-xs font-normal leading-none max-w-full flex-initial">
                Figma</div>
        </div>
          <div className="flex border justify-center items-center m-1 font-medium py-1 px-2 bg-white rounded-md text-purple-700border">
            <div slot="avatar">
                <div className="flex relative w-4 h-4 justify-center items-center m-1 mr-2 ml-0 my-0 text-xs rounded-full"><img  alt="A" src="./image2.png"/> </div>
            </div>
            <div className="text-xs font-normal leading-none max-w-full flex-initial">
               Adobe Illustrator</div>
        </div>
          <div className="flex border justify-center items-center m-1 font-medium py-1 px-2 bg-white rounded-md text-purple-700border">
            <div slot="avatar">
                <div className="flex relative w-4 h-4 justify-center items-center m-1 mr-2 ml-0 my-0 text-xs rounded-full"><img  alt="A" src="./image3.png"/> </div>
            </div>
            <div className="text-xs font-normal leading-none max-w-full flex-initial">
                Adobe XD</div>
        </div>
        </div>
        <div>
          <h3 className="font-semibold">Preferred Language</h3>
          <p>English</p>
        </div>
        <div>
          <h3 className="font-semibold">Type</h3>
          <p>Full time</p>
        </div>
        <div>
          <h3 className="font-semibold">Years of Experience</h3>
          <p>3+ Years of Experience</p>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
