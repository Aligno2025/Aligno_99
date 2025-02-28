import React from 'react'
import Graph from './Graph'
import { SlArrowDown } from "react-icons/sl";
import { GoHome } from "react-icons/go";
import { MdOutlineFolderCopy } from "react-icons/md";
import { LiaTagsSolid } from "react-icons/lia";
import { GrGallery } from "react-icons/gr";
import { SlPlane } from "react-icons/sl";
import { MdOutlineSettings } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { IoNotificationsOutline } from "react-icons/io5";
import { AiOutlineTeam } from "react-icons/ai";


const Dashboard = () => {
  return (
    <div class='grid md:grid-cols-4 bg-white -rotate-2 rounded-2xl'>

      <div class='bg-amber-48 rounded-l-2xl  text-white invisible md:visible absolute md:relative'>

        <h1 class="font-poppins text-2xl pl-5 pt-2 font-extrabold">Aligno</h1>

        <div class='font-Roboto text-sm font-medium'>
          <ul class='grid grid-rows-6 gap-2  pt-10  pl-5' >
            <li class=''><GoHome class='inline text-xl' /> Home</li>
            <li class=''><MdOutlineFolderCopy class='inline text-xl' />  Feed</li>
            <li class=''><LiaTagsSolid class='inline text-xl' />  Calender</li>
            <li class=''><GrGallery class='inline text-xl' />  Projects</li>
            <div class='flex justify-between items-center w-[90%]'>
              <li > <SlPlane class='inline text-xl' />  Notification </li>
              <div class='flex'>
                <p class='mr-5 bg-orange-225 rounded-full px-2 py-.5'>99+</p>
                <SlArrowDown class='group-hover:rotate-180  transition delay-150 duration-300 ease-in-out text-xs ' />
              </div>
            </div>
          </ul>

          <div class='bg-purple-overlay-104 mt-5'>
            <ul class='grid grid-rows-7 gap-2 pt-6 font-Roboto text-md pl-5 ' >
              <li class=''>Work Overview</li>
              <li>Features</li>
              <li class=''>Projects</li>
              <li class=''>Milestone</li>
              <li class=''>Tasks</li>
              <li class=''>report</li>
            </ul>
          </div>
        </div>

        <p class='pl-5 mt-5'><MdOutlineSettings class='inline text-xl' />  Settings</p>

      </div>

      <div class='md:col-span-3 md:p-5 p-2 pt-5'>
        <div class='border-b-1 border-gray-300 pb-2 invisible md:visible absolute md:relative'>
          <div class='flex justify-between text-2xl font-bold'>
            <h1> <AiOutlineTeam class='inline ' />  Team 99</h1>
            <div class='flex gap-2'>
              <MdOutlineSettings />
              <FiSearch />
              <div class='relative'>
                <p class='mr-10 bg-orange-225 rounded-full text-xs px-1 absolute -top-2 -right-10'>9</p>
                <IoNotificationsOutline />
              </div>
            </div>
          </div>
          <ul class='grid grid-cols-5 gap-2 font-Roboto text-md md:w-150 pt-2 pl-8' >
            <li class='hover:text-orange-225 font-Roboto text-base font-medium'>Dashboard</li>
            <li class='hover:text-orange-225 font-Roboto text-base font-medium'>Projects</li>
            <li class='hover:text-orange-225 font-Roboto text-base font-medium'>Tasks</li>
            <li class='hover:text-orange-225 font-Roboto text-base font-medium'>Milestone</li>
            <li class='hover:text-orange-225 font-Roboto text-base font-medium'>report</li>
          </ul>
        </div>

        <div class='grid md:grid-cols-2 md:grid-rows-2  gap-4 md:mt-4 mt-2 text-xl '>
          <div>
            <h1 class='text-amber-48 font-bold'>All Tasks</h1>
            <div class='md:pr-20 -rotate-2 text-gray-500 text-sm'>
              <div class='grid grid-cols-2 border-b-1 border-t-1 border-r-1 border-gray-300 p-5 rounded-2xl'>
                <div class='grid md:gap-2 gap-4'>
                  <p>Week 1</p>
                  <p>Week 2</p>
                  <p>Week 3</p>
                  <p>Week 4</p>
                </div>
                <div class='grid gap-4'>
                  <p>Product Research</p>
                  <p>Design</p>
                  <p>Development</p>
                  <p>Testing</p>
                </div>
              </div>
            </div>
          </div>

          <div class='order-last md:order-none'>
            <h1 class=' font-bold'> <span class='text-orange-225 md:mr-30 mr-10'> Analytics</span> Progress</h1>
            <Graph />
          </div>

          <div class='md:pr-20' >
            <div className='border-b-1 border-t-1 md:border-r-1 border-l-1 md:border-l-0 border-gray-300 p-2 rounded-2xl md:rotate-0  -rotate-2'>
              <h1 class='font-bold text-xl'>Target</h1>
              <div class='flex gap-4 text-sm text-gray-500'>
                <p><span class='p-1.5 rounded-2xl inline-block mr-2  bg-orange-225 '></span>Acheived</p>
                <p> <span class='p-1.5 rounded-2xl inline-block mr-2  bg-gray-300 '></span>Remaining</p>
              </div>
              <div class="relative size-30 mt-5 ml-10 ">
                <svg class="rotate-[135deg] size-full" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="18" cy="18" r="16" fill="none" class="stroke-current text-gray-300 dark:text-gray-300" strokeWidth="3.5" strokeDasharray="75 100" strokeLinecap="round"></circle>
                  <circle cx="18" cy="18" r="16" fill="none" class="stroke-current text-orange-225 dark:text-orange-225" strokeWidth="3.5" strokeDasharray="50 100" strokeLinecap="round"></circle>
                </svg>
                <div class="absolute top-1/2 start-1/2 transform -translate-x-1/2 text-center">
                  <span class="text-xl font-bold text-orange-225 dark:text-orange-225">67%</span>

                </div>
              </div>
            </div>
          </div>


          <div class='order-first md:order-last'>
            <h1 class='font-bold text-2xl md:text-5xl'>All in one intuative <span class='text-amber-48 font-extrabold'>Dashboard</span></h1>
            <p class='text-sm md:mt-2 text-gray-500 mt-10 '>Create, organize, and prioritize tasks with ease with our all in one intuitive dashboard</p>
            <a href="" class='text-sm text-blue-900 font-medium'>Learn more about Aligno</a>

          </div>
        </div>

      </div>

    </div>
  )
}

export default Dashboard