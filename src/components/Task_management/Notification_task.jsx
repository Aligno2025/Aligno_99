import React from 'react'
import img1 from '../../assets/img/Team_img2.png'
import { MdOutlineMail } from "react-icons/md";
import Calender from '../Task_management/Calender';
import { GiCheckMark } from "react-icons/gi";
import { Link } from 'react-router-dom'




const Notification_task = () => {
  return (
    <div className='h-min md:pb-20 pb-8  '>
      <div className='md:pt-20 pt-10 flex justify-center items-center text-center'>
        <div>
          <div className='flex justify-center items-center'>
            <div className='md:w-[60%] w-[40%] '><img src={img1} alt="" /></div>
          </div>
          <h1 className=' font-black md:text-4xl text-2xl'>Your Productivity Powerhouse</h1>
          <p className='md:w-150 mt-4'>Aligno offers everything you need to stay organised, collaborate seamlessly  and achieve your goals all in one placve.</p>
        </div>
      </div>

      <div className='grid md:grid-cols-2 md:p-20 p-5 pb-30 '>
        <div>
          <div className=''>
            <h1 className="font-poppins text-2xl font-extrabold">Notifications</h1>
            <p className='font-Roboto text-base font-normal p-10 md:pr-40 pl-0'>The ultimate productivity tool to streamline task management, set deadlines and collaborate effectively, all in one place</p>
          </div>
          <div className='grid  items-center text-center '>
            <form action="" className="relative flex text-gray-400  focus-within:text-gray-600  items-center">
              <MdOutlineMail className='absolute w-5 h-5 ml-3 pointer-events-none text-orange-225' />
              <input
                type="text"
                id="fname"
                name="fname"
                placeholder='Enter your email to get the notifi....'
                aria-labelledby='Enter your email to get the notifi....'
                className='px-10 md:mr-2 w-[60%] mt-1 font-Roboto text-orange-225 text-sm md:text-base font-medium md:py-1 py-1.5 border-none ring-2 pl-10 ring-gray-300 focus:ring-grey-500 focus:ring-2'
              />

              <button >
                <Link to="/Sign_up" className="px-4 md:px-8 py-2.5 bg-amber-48 font-Roboto text-base font-medium text-white hover:bg-white border-2 hover:text-amber-48" smooth>
                  Subscribe
                </Link>
              </button>
            </form>
          </div>
        </div>

        <div className='relative md:h-60 h-30'>

          <div className='absolute md:left-40 top-[20%] md:top-0 left-20'>
            <div className='pt-6 md:pl-4 md:pr-4 pb-6 rounded-2xl mt-3 bg-white font-Roboto shadow-2xl'>
              <span className='md:pt-18 pt-14 pr-1 md:left-1 rounded inline-block bg-amber-48 absolute'></span>
              <h1 className='md:text-lg text-sm md:ml-0 ml-2 font-bold font-Poppins'>Task progress for the week</h1>
              <p className='md:text-sm text-xs md:ml-0 ml-2  font-Roboto'>You have one more task left to complete p...</p>
            </div>
          </div>

          <div className='absolute md:top-[30%] top-[80%] z-10 pr-10 md:pr-0'>
            <div className='pt-6 md:pl-4 md:pr-4 pb-6 rounded-2xl mt-3 bg-white font-Roboto shadow-2xl flex justify-center items-center'>
              <GiCheckMark className='bg-green-500 text-white text-3xl rounded-full p-2 mr-3' />
              <div>
                <h1 className='md:text-lg text-sm font-bold font-Poppins'> Task Completed</h1>
                <p className='md:text-sm text-sm font-Roboto'>you have successfully completed the tasks for this week</p>
              </div>
            </div>
          </div>

          <div className='absolute md:top-[60%] top-[150%] md:left-50 left-20'>
            <div className='pt-6 md:pl-4 md:pr-4 pb-6 rounded-2xl mt-3 bg-white font-Roboto  shadow-2xl flex justify-center items-center'>
              <div>
                <div className="animate-spin inline-block mr-3 size-6 border-[3px] border-current border-t-transparent text-orange-225 rounded-full dark:text-orange-225" role="status" aria-label="loading">
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
              <div>
                <h1 className='md:text-lg text-sm font-bold font-Poppins'>Uploading data</h1>
                <p className='md:text-sm text-xs font-Roboto'>Please wait until data is uploaded, you cannot close this notification yet</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className='grid md:grid-cols-3 relative md:mt-0 mt-10 p-5 '>
        <div className='md:h-0 h-80'>  <h1 className='font-bold'></h1></div>
        <div>
          <Calender />
        </div>
        <div>
          <div className='mt-8 md:mt-0'>
            <h1 className="font-poppins text-2xl font-extrabold">Calendar</h1>
            <p className='font-Roboto text-base font-normal p-10 md:pr-40 pl-0'>Sync your tasks with your favourite calendar applications for a comprehensive view of your deadlines and priorities.</p>
          </div>

          <button >
            <Link to="/Sign_up" className="px-4 md:px-8 py-2.5 bg-amber-48 font-Roboto text-base font-medium text-white hover:bg-white border-2 hover:text-amber-48" smooth>
              Show Demo
            </Link>
          </button>
        </div>
      </div>

    </div>
  )
}

export default Notification_task
