
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
    <div className=" h-16 w-full md:pl-16 border-b">
       <ul className="flex h-full  items-center gap-6 list-none">
          <li>
            <Link className='  rounded-full font-bold text-orange-600' href="#">Job Preview</Link>
          </li>
          <li>
            <Link className='  rounded-full  text-slate-500' href="#">Job Preview</Link>
          </li>
          <li>
            <Link className='  rounded-full  text-slate-500' href="#">Job Preview</Link>
          </li>
          <li>
            <Link className=' rounded-full  text-slate-500' href="#">Job Preview</Link>
          </li>
      
    </ul>

  </div>
  <div className="flex flex-col md:flex-row">
      <div className="md:w-4/5 md:pr-8">
        <Header />
        <JobDescription />
        <CompanyDetails />
      </div>
      <div className="md:w-1/5">
        <Sidebar />
      </div>
    </div>


    </div>
  )
}

export default JobPage