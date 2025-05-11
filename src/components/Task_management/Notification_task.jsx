import React from 'react'
import img1 from '../../assets/img/Team_img2.png'
import { MdOutlineMail } from "react-icons/md";
import Calender from '../Task_management/Calender';
import { GiCheckMark } from "react-icons/gi";
import { Link } from 'react-router-dom'
import { AuthContext } from '../AuthContext.jsx';




const Notification_task = () => {
  const { isLoggedIn, logout } = useContext(AuthContext);


  return (

    <div class='h-min  '>
      <div class='pt-20 flex justify-center items-center text-center'>
        <div>
          <div class='w-[60%] mx-20 object-contain'><img src={img1} alt="" /></div>
          <h1 class=' font-black md:text-4xl text-3xl pt-4'>Your Productivity Powerhouse</h1>
          <p class='md:w-150 mt-4'>Aligno offers everything you need to stay organised, collaborate seamlessly  and achieve your goals all in one placve.</p>
        </div>
      </div>

      <div className='grid md:grid-cols-2 md:p-20 p-5 pb-30 '>
        <div>
          <div class=''>
            <h1 class="font-poppins text-2xl font-extrabold pt-4">Notifications</h1>
            <p class='font-Roboto text-base font-normal p-10 pt-5 md:pr-20 pl-0'>The ultimate productivity tool to streamline task management, set deadlines and collaborate effectively, all in one place</p>
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
                class='px-10 md:mr-2 w-[60%] mt-1 font-Roboto text-orange-225 text-sm md:text-base font-medium md:py-1 py-1.5 border-b-3 border-gray-300  ring-0 pl-10 bg-gray-50  focus:ring-grey-500 focus:ring-2'
              />

{!isLoggedIn && <button >
                <Link to="/Sign_up" className="px-4 md:px-8 py-2.5 bg-amber-48 font-Roboto text-base font-medium text-white hover:bg-white border-2 hover:text-amber-48" smooth>
                  Subscribe
                </Link>
              </button>}
            </form>
          </div>
        </div>

{/* the three bars */}


        <div class='relative md:h-60 h-40 '>
          <div class='absolute top-[20%] md:top-0 left-10 '>
            <div class='pt-6 md:pl-4 md:pr-4 pb-6 rounded-2xl mt-3 bg-white font-Roboto shadow-2xl'>
              <span class='md:pt-18 pt-14 pr-1 md:left-1 rounded inline-block bg-amber-48 absolute'></span>
              <h1 class='md:text-lg text-sm md:ml-0 ml-2 font-bold font-Poppins'>Task progress for the week</h1>
              <p class='md:text-sm text-xs md:ml-0 ml-2  font-Roboto'>You have one more task left to complete p...</p>
            </div>
          </div>

          <div class='absolute md:top-[30%] top-[80%] z-10 pr-10 md:pr-0 '>
            <div class='pt-6 md:pl-4 md:pr-4 pb-6 rounded-2xl mt-3 bg-white font-Roboto shadow-2xl flex justify-center items-center'>
              <GiCheckMark class='bg-green-500 text-white text-3xl rounded-full p-2 mr-3' />
              <div>
                <h1 className='md:text-lg text-sm font-bold font-Poppins'> Task Completed</h1>
                <p className='md:text-sm text-sm font-Roboto'>you have successfully completed the tasks for this week</p>
              </div>
            </div>
          </div>
          <div class='absolute md:top-[60%] top-[150%]  left-20'>
            <div class='pt-6 md:pl-4 md:pr-4 pb-6 rounded-2xl mt-3 bg-white font-Roboto  shadow-2xl flex justify-center items-center'>
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

      <div>
        <div class='md:h-0 h-30 '>  <h1 class='font-bold'></h1></div>
        <div >
          <Calender />
        </div>
      </div>

    </div>
  )
}

export default Notification_task
