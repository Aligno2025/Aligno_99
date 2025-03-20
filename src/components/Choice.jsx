import React from 'react'
import { IoBriefcaseOutline } from "react-icons/io5";
import { Link } from 'react-router-dom'
import { MdTask } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";
import { IoMdNotifications } from "react-icons/io";
import { FaCalendarAlt } from "react-icons/fa";
import { IoMdAnalytics } from "react-icons/io";
import { PiVideoConferenceFill } from "react-icons/pi";

function BarText(props) {

    return (

        <div>
            <div className='pt-2'>
                <h1 className='font-semibold mb-2'>{props.heading}</h1>
                <p className='text-sm font-normal font-Roboto'>{props.text}</p>
            </div>
        </div>
    )

}




const Choice = () => {
    return (
        <div className='md:pr-20 md:pl-20 pr-10 pl-10 pb-14 '>
            <div className='text-center md:p-12 pb-15'>
                <h1 className="font-poppins md:text-2xl text-3xl font-bold">Why Teams Choose <span className="text-amber-48">Aligno</span></h1>
                <p className='font-Roboto' >Designed for teams that want to do more. Here’s Aligno in action</p>
            </div>

            <div className=' grid md:grid-cols-6 md:gap-20 md:pb-15 pb-8 gap-12 font-Roboto text-base'>

                <span className=' col-span-2'>
                    <div className=' text-purple-185 bg-ash-242 -z-1 p-10  w-40'>
                        <MdTask className=' text-4xl  ' /> 
                    </div>
                    <BarText
                        heading='Task management'
                        text='Create, organise and proritize tasks with ease with the all in one dashboard'
                    />
                </span>

                <span className=' col-span-2'>
                    <div className=' text-purple-185 bg-ash-242 -z-1 p-10 w-40'>
                        <RiTeamFill className=' text-4xl  inline-block' /> 
                    </div>
                    <BarText
                        heading='Collaborative Spaces'
                        text='keep everyone on the same page with built in communication tools and file sharing.'
                    />

                </span>
                <span className=' col-span-2'>
                    <div className=' text-purple-185 bg-ash-242 -z-1 p-10  w-40'>
                        <IoMdNotifications className=' text-4xl  ' />
                    </div>
                    <BarText
                        heading='Notifications'
                        text='Never miss a deadline, stay on track with our notifications integration.'
                    />
                </span>

                <span className=' col-span-2'>
                    <div className=' text-purple-185 bg-ash-242 -z-1 p-10  w-40'>
                        <FaCalendarAlt className=' text-4xl  ' />
                    </div>
                    <BarText
                        heading='Calendar Intergration'
                        text='Book meeting dates and schedule time with our calendar integration.'
                    />
                </span>

                <span className=' col-span-2'>
                    <div className=' text-purple-185 bg-ash-242 -z-1 p-10  w-40'>
                        <IoMdAnalytics className=' text-4xl  ' />
                    </div>
                    <BarText
                        heading='Progress Analytics'
                        text='Check out personal and team progress with our report and analytics.'
                    />
                </span>

                <span className=' col-span-2'>
                    <div className=' text-purple-185 bg-ash-242 -z-1 p-10  w-40'>
                        <PiVideoConferenceFill className=' text-4xl  ' />
                    </div>
                    <BarText
                        heading='Meetings Conferencing'
                        text='Host and join meetings with video and audio conferencing platforms.'
                    />
                </span>

            </div>

            <div className='grid md:grid-cols-3 gap-2'>
                <p className='col-span-2 text-sm font-normal font-Roboto mb-4 md:mt-0'>All features have been built for ease and ultimate productivity to streamline task management,set deadlines and collaborate effectively</p>

                <button >
                    <Link to="/Sign_up" className="md:px-6 px-4 py-1.5 bg-amber-48 font-Roboto md:text-base text-xs font-medium text-white hover:bg-white border-2 hover:text-amber-48">
                        Explore all features
                    </Link>
                </button>
            </div>
        </div>
    )
}

export default Choice