'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { Bell, Briefcase, ChevronDown, HandCoins, MenuIcon, MessageSquareDot, X } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import clsx from 'clsx'
import {  usePathname } from 'next/navigation'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleNavbar = () => {
    setIsOpen(!isOpen)
  }
  const pathName= usePathname()
  return (
    <header className="w-full sticky right-0 left-0 bg-white top-0 py-5 px-4 backdrop-blur-lg z-[100] flex items-center border-b-[1px] justify-between">
      <aside className="flex items-center gap-[2px] bg-gray-300 px-4 py-2">
        <p className="text-xl font-bold text-red-500">LOGO</p>
      </aside>
      <nav
       
      className=" hidden md:block border p-2 rounded-full">
        <ul className="flex items-center md:space-x-0 lg:space-x-20 list-none">
          <li>
            <Link className={clsx("px-4 py-4 rounded-full font-semibold text-gray-500 flex",
              {
                "bg-[#DC4A2D] text-white ":
                pathName=="/"

              }
            )} href="/"><Briefcase className='mr-3' /> Jobs</Link>
          </li>
          <li>
          <Link className={clsx("px-4 py-4 rounded-full font-semibold text-gray-500 flex",
              {
                "bg-[#DC4A2D] text-white":
                pathName=="/messages"

              }
            )} href="/messages"><MessageSquareDot className='mr-3' /> Messages</Link>
          </li>
          <li>
          <Link className={clsx("px-4 py-4 rounded-full font-semibold text-gray-500 flex",
              {
                "bg-[#DC4A2D] text-white ":
                pathName=="/payments"

              }
            )} href="/payments"><HandCoins className='mr-3'  />Payments</Link>
          </li>
       
        </ul>
      </nav>
      <aside className="flex items-center gap-4">
      <Bell />
        <Link
          href="/"
          className="relative inline-flex h-10 overflow-hidden items-center rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
      <Avatar>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
<ChevronDown />
        </Link>
        <button onClick={toggleNavbar} className="md:hidden">
          {isOpen ?null: <MenuIcon />}
        </button>
      </aside>
      {isOpen && (
        <div className="absolute h-screen w-full inset-0 bg-black bg-opacity-75 z-[200] flex flex-col items-center justify-center md:hidden">
          <button onClick={toggleNavbar} className="absolute top-5 right-5 text-white">
            <X />
          </button>
          <nav className="text-center">
            <ul className=" text-white flex flex-col items-start space-y-10">
              <li>
                <Link onClick={toggleNavbar} className="text-2xl font-semibold" href="/">
                  Jobs
                </Link>
              </li>
              <li>
                <Link onClick={toggleNavbar} className="text-2xl font-semibold" href="/messages">
                  Messages
                </Link>
              </li>
              <li>
                <Link onClick={toggleNavbar} className="text-2xl font-semibold" href="/payments">
                  Payments
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Navbar
