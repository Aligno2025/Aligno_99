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
<<<<<<< HEAD
    <div className='grid md:grid-cols-4 bg-white -rotate-2 rounded-2xl'>
=======
    <div class='grid md:grid-cols-4 bg-white -rotate-2 rounded-2xl @container'>
>>>>>>> ced7316 (new ajustment)

      <div className='bg-amber-48 rounded-l-2xl  text-white invisible md:visible absolute md:relative'>

        <h1 className="font-poppins text-2xl pl-5 pt-2 font-extrabold">Aligno</h1>

<<<<<<< HEAD
        <div className='font-Roboto text-sm font-medium'>
          <ul className='grid grid-rows-6 gap-2  pt-10  pl-5' >
            <li className=''><GoHome className='inline text-xl' /> Home</li>
            <li className=''><MdOutlineFolderCopy className='inline text-xl' />  Feed</li>
            <li className=''><LiaTagsSolid className='inline text-xl' />  Calender</li>
            <li className=''><GrGallery className='inline text-xl' />  Projects</li>
            <div className='flex justify-between items-center w-[90%]'>
              <li > <SlPlane className='inline text-xl' />  Notification </li>
              <div className='flex'>
                <p className='mr-5 bg-orange-225 rounded-full px-2 py-.5'>99+</p>
                <SlArrowDown className='group-hover:rotate-180  transition delay-150 duration-300 ease-in-out text-xs ' />
=======
        <div class='font-Roboto text-sm font-medium'>
          <ul class='grid grid-rows-5 gap-2  pt-6  pl-5' >
            <li class=''><GoHome class='inline text-lg' /> Home</li>
            <li class=''><MdOutlineFolderCopy class='inline text-lg' />  Feed</li>
            <li class=''><LiaTagsSolid class='inline text-lg' />  Calender</li>
            <li class=''><GrGallery class='inline text-lg' />  Projects</li>
            <div class='flex justify-between items-center w-[90%]'>
              <li > <SlPlane class='inline text-lg' />  Notification </li>
              <div class='flex'>
                <p class='mr-2 bg-orange-225 rounded-full text-xs px-1 py-.5'>99+</p>
                <SlArrowDown class='group-hover:rotate-180  transition delay-150 duration-300 ease-in-out text-xs ' />
>>>>>>> ced7316 (new ajustment)
              </div>
            </div>
          </ul>

          <div className='bg-purple-overlay-104 mt-5'>
            <ul className='grid grid-rows-7 gap-2 pt-6 font-Roboto text-md pl-5 ' >
              <li className=''>Work Overview</li>
              <li>Features</li>
              <li className=''>Projects</li>
              <li className=''>Milestone</li>
              <li className=''>Tasks</li>
              <li className=''>report</li>
            </ul>
          </div>
        </div>

        <p className='pl-5 mt-5'><MdOutlineSettings className='inline text-xl' />  Settings</p>

      </div>

      <div className='md:col-span-3 md:p-5 p-2 pt-5'>
        <div className='border-b-1 border-gray-300 pb-2 invisible md:visible absolute md:relative'>
          <div className='flex justify-between text-2xl font-bold'>
            <h1> <AiOutlineTeam className='inline ' />  Team 99</h1>
            <div className='flex gap-2'>
              <MdOutlineSettings />
              <FiSearch />
              <div className='relative'>
                <p className='mr-10 bg-orange-225 rounded-full text-xs px-1 absolute -top-2 -right-10'>9</p>
                <IoNotificationsOutline />
              </div>
            </div>
          </div>
<<<<<<< HEAD
          <ul className='grid grid-cols-5 gap-2 font-Roboto text-md md:w-150 pt-2 pl-8' >
            <li className='hover:text-orange-225 font-Roboto text-base font-medium'>Dashboard</li>
            <li className='hover:text-orange-225 font-Roboto text-base font-medium'>Projects</li>
            <li className='hover:text-orange-225 font-Roboto text-base font-medium'>Tasks</li>
            <li className='hover:text-orange-225 font-Roboto text-base font-medium'>Milestone</li>
            <li className='hover:text-orange-225 font-Roboto text-base font-medium'>report</li>
=======
          <ul class='flex flex-row justify-evenly font-Roboto text-xs @5xl:text-md  pt-2 @5xl:pl-8' >
            <li class='hover:text-orange-225 font-Roboto text-base font-medium'>Dashboard</li>
            <li class='hover:text-orange-225 font-Roboto text-base font-medium'>Projects</li>
            <li class='hover:text-orange-225 font-Roboto text-base font-medium'>Tasks</li>
            <li class='hover:text-orange-225 font-Roboto text-base font-medium'>Milestone</li>
            <li class='hover:text-orange-225 font-Roboto text-base font-medium'>report</li>
>>>>>>> ced7316 (new ajustment)
          </ul>
        </div>

        <div className='grid md:grid-cols-2 md:grid-rows-2  gap-4 md:mt-4 mt-2 text-xl '>
          <div>
<<<<<<< HEAD
            <h1 className='text-amber-48 font-bold'>All Tasks</h1>
            <div className='md:pr-20 -rotate-2 text-gray-500 text-sm'>
              <div className='grid grid-cols-2 border-b-1 border-t-1 border-r-1 border-gray-300 p-5 rounded-2xl'>
                <div className='grid md:gap-2 gap-4'>
=======
            <h1 class='text-amber-48 font-bold'>All Tasks</h1>
            <div class='-rotate-2 text-gray-500 text-sm'>
              <div class='grid grid-cols-2 border-b-1 border-t-1 border-r-1 border-gray-300 p-5 rounded-2xl'>
                <div class='grid md:gap-2 gap-4'>
>>>>>>> ced7316 (new ajustment)
                  <p>Week 1</p>
                  <p>Week 2</p>
                  <p>Week 3</p>
                  <p>Week 4</p>
                </div>
                <div className='grid gap-4'>
                  <p>Product Research</p>
                  <p>Design</p>
                  <p>Development</p>
                  <p>Testing</p>
                </div>
              </div>
            </div>
          </div>

          <div className='order-last md:order-none'>
            <h1 className=' font-bold'> <span className='text-orange-225 md:mr-30 mr-10'> Analytics</span> Progress</h1>
            <Graph />
          </div>

<<<<<<< HEAD
          <div className='md:pr-20' >
=======
          <div class='' >
>>>>>>> ced7316 (new ajustment)
            <div className='border-b-1 border-t-1 md:border-r-1 border-l-1 md:border-l-0 border-gray-300 p-2 rounded-2xl md:rotate-0  -rotate-2'>
              <h1 className='font-bold text-xl'>Target</h1>
              <div className='flex gap-4 text-sm text-gray-500'>
                <p><span className='p-1.5 rounded-2xl inline-block mr-2  bg-orange-225 '></span>Acheived</p>
                <p> <span className='p-1.5 rounded-2xl inline-block mr-2  bg-gray-300 '></span>Remaining</p>
              </div>
<<<<<<< HEAD
              <div className="relative size-30 mt-5 ml-10 ">
                <svg className="rotate-[135deg] size-full" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-gray-300 dark:text-gray-300" strokeWidth="3.5" strokeDasharray="75 100" strokeLinecap="round"></circle>
                  <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-orange-225 dark:text-orange-225" strokeWidth="3.5" strokeDasharray="50 100" strokeLinecap="round"></circle>
=======
              <div class="relative size-30 mt-5 ml-6 ">
                <svg class="rotate-[135deg] size-full" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="18" cy="18" r="16" fill="none" class="stroke-current text-gray-300 dark:text-gray-300" strokeWidth="3.5" strokeDasharray="75 100" strokeLinecap="round"></circle>
                  <circle cx="18" cy="18" r="16" fill="none" class="stroke-current text-orange-225 dark:text-orange-225" strokeWidth="3.5" strokeDasharray="50 100" strokeLinecap="round"></circle>
>>>>>>> ced7316 (new ajustment)
                </svg>
                <div className="absolute top-1/2 start-1/2 transform -translate-x-1/2 text-center">
                  <span className="text-xl font-bold text-orange-225 dark:text-orange-225">67%</span>

                </div>
              </div>
            </div>
          </div>


<<<<<<< HEAD
          <div className='order-first md:order-last'>
            <h1 className='font-bold text-2xl md:text-5xl'>All in one intuative <span className='text-amber-48 font-extrabold'>Dashboard</span></h1>
            <p className='text-sm md:mt-2 text-gray-500 mt-10 '>Create, organize, and prioritize tasks with ease with our all in one intuitive dashboard</p>
            <a href="" className='text-sm text-blue-900 font-medium'>Learn more about Aligno</a>
=======
          <div class='order-first md:order-last'>
            <h1 class='font-bold text-2xl @5xl:text-4xl'>All in one intuative <span class='text-amber-48 font-extrabold'>Dashboard</span></h1>
            <p class='text-sm md:mt-2 text-gray-500 mt-10 '>Create, organize, and prioritize tasks with ease with our all in one intuitive dashboard</p>
            <a href="" class='text-sm text-blue-900 font-medium'>Learn more about Aligno</a>
>>>>>>> ced7316 (new ajustment)

          </div>
        </div>

      </div>

    </div>
  )
}

export default Dashboard