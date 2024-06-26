
import Link from 'next/link'
import React from 'react'
import JobDetails from './JobDetails'
import Sidebar from './Sidebar'
import Header from './Header';
import JobDescription from './JobDescription';
import CompanyDetails from './CompanyDetails';



const JobPage=()=> {
  return (
    <div className='w-full'>
    <div className=" h-16 w-full pl-10 md:pl-20 border-b">
       <ul className="flex h-full  items-center gap-6 list-none">
          <li className='border-b-2 border-red-500 '>
            <Link className=' border-red-500 text-sm md:text-md font-bold text-orange-600' href="#">Job Preview</Link>
          </li>
          <li>
            <Link className='  rounded-full text-sm md:text-md text-slate-500' href="#">Applicants</Link>
          </li>
          <li>
            <Link className='  rounded-full text-sm md:text-md text-slate-500' href="#">Match</Link>
          </li>
          <li>
            <Link className=' rounded-full text-sm md:text-md text-slate-500' href="#">Messages</Link>
          </li>
      
    </ul>

  </div>
  <div className="flex flex-col lg:flex-row">
      <div className="md:w-4/5 md:pr-8">
        <Header />
        <JobDescription />
        <CompanyDetails />
      </div>
      <div className="lg:w-1/5">
        <Sidebar />
      </div>
    </div>


    </div>
  )
}

export default JobPage