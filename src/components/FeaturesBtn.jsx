import React, {useContext} from 'react'
import { MdTask } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { IoMdNotifications } from "react-icons/io";
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthContext.jsx';

const FeaturesBtn = () => {
    const { isLoggedIn, logout } = useContext(AuthContext);

  return (
    <div className='absolute md:-left-40 md:top-6 z-2 left-0 right-0'>
    <div className="grid md:grid-cols-2 md:space-x-10 md:space-y-10 space-y-5 bg-white text-gray-600 shadow-md md:h-70 h-110 md:w-160 w-80 rounded-2xl p-10">

    {!isLoggedIn ? (
    <li>
        <Link to="/Sign_in" className='mb-2 font-Roboto font-bold hover:text-orange-225'><MdTask className='inline text-xl' /> Task_management
          <p className='text-sm font-poppins font-normal pt-2'>Create, organise and proritize tasks with ease </p> </Link>
    </li>
  ) : (
    <li>
      <Link to="/Main_task" className='mb-2 font-Roboto font-bold hover:text-orange-225'><MdTask className='inline text-xl' /> Task_management
      <p className='text-sm font-poppins font-normal pt-2'>Create, organise and proritize tasks with ease </p> </Link>
    </li>
  )}



  {!isLoggedIn ? (
    <li>
        <Link to="/Sign_in" className='mb-2 font-Roboto font-bold hover:text-orange-225'><FaCalendarAlt className='inline text-xl' /> Calendars
          <p className='text-sm font-poppins font-normal pt-2'>Book meetings with calendar integration</p>
        </Link>
    </li>
  ) : (
    <li>
       <Link to="/Main_task" className='mb-2 font-Roboto font-bold hover:text-orange-225'><FaCalendarAlt className='inline text-xl' /> Calendars
          <p className='text-sm font-poppins font-normal pt-2'>Book meetings with calendar integration</p>
        </Link>
    </li>
  )}



  {!isLoggedIn ? (
    <li>
    <Link to="/Sign_in" className='mb-2 font-Roboto font-bold hover:text-orange-225'><RiTeamFill className='inline text-xl' /> Team Collaboration
    <p className='text-sm font-poppins font-normal pt-2'>Collaborate in real time and manage teams </p> </Link>
    </li>
  ) : (
    <li>
    <Link to="/Main_team" className='mb-2 font-Roboto font-bold hover:text-orange-225'><RiTeamFill className='inline text-xl' /> Team Collaboration
    <p className='text-sm font-poppins font-normal pt-2'>Collaborate in real time and manage teams </p> </Link>
    </li>
  )}


  {!isLoggedIn ? (
    <li>
         <Link to="/Sign_in" className='mb-2 font-Roboto font-bold hover:text-orange-225'><IoMdNotifications className='inline text-xl' /> Notifications
          <p className='text-sm font-poppins font-normal pt-2'>Stay on track with reminders from notifications</p>
        </Link>
    </li>
  ) : (
    <li>
        <Link to="/Main_task" className='mb-2 font-Roboto font-bold hover:text-orange-225'><IoMdNotifications className='inline text-xl' /> Notifications
          <p className='text-sm font-poppins font-normal pt-2'>Stay on track with reminders from notifications</p>
        </Link>
    </li>
  )}


    </div>
  </div>
  )
}

export default FeaturesBtn

 {/* <div className='absolute left-0 right-0 top-6 z-2'>
                    <div className="grid space-x-10 space-y-10 bg-white text-gray-600 shadow-md justify-center items-center text-center rounded-2xl p-5">
                      {!isLoggedIn && <div>
                        <Link to="/Sign_in" className='mb-2 font-Roboto font-bold hover:text-orange-225'><MdTask className='inline text-xl' /> Task_management
                          <p className='text-sm font-poppins font-normal pt-2'>Create, organise and proritize tasks with ease </p> </Link>
                      </div>}

                      {!isLoggedIn && <div>
                        <Link to="/Sign_in" className='mb-2 f font-Robotoont-bold hover:text-orange-225'><FaCalendarAlt className='inline text-xl' /> Calendars
                          <p className='text-sm font-poppins font-normal pt-2'>Book meetings with calendar integration</p>
                        </Link>
                      </div>}

                      {!isLoggedIn && <div>
                        <Link to="/Sign_in" className='mb-2 font-Roboto font-bold hover:text-orange-225'><RiTeamFill className='inline text-xl' /> Team Collaboration
                          <p className='text-sm font-poppins font-normal pt-2'>Collaborate in real time and manage teams </p> </Link>
                      </div>}

                      {!isLoggedIn && <div>
                        <Link to="/Sign_in" className='mb-2 f font-Robotoont-bold hover:text-orange-225'><IoMdNotifications className='inline text-xl' /> Notifications
                          <p className='text-sm font-poppins font-normal pt-2'>Stay on track with reminders from notifications</p>
                        </Link>
                      </div>}

                    </div>
                  </div> */}

                 