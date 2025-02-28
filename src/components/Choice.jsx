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
            <div class='pt-20 pl-8'>
                <h1 class='font-semibold mb-2'>{props.heading}</h1>
                <p class='text-sm font-normal font-Roboto'>{props.text}</p>
            </div>
        </div>
    )

}




const Choice = () => {
    return (
        <div class='md:pr-20 md:pl-20 pr-10 pl-10 md:pb-6 pb-4  '>
            <div class='text-center md:p-12 pb-15'>
                <h1 class="font-poppins md:text-2xl text-3xl font-bold">Why Teams Choose <span class="text-amber-48">Aligno</span></h1>
                <p class='font-Roboto' >Designed for teams that want to do more. Here’s Aligno in action</p>
            </div>

            <div class=' grid md:grid-cols-6 md:gap-20 md:pb-15 pb-4 gap-6 font-Roboto text-base'>

                <span class=' col-span-2'>
                    <div class=' text-purple-185 bg-ash-242  absolute -z-1 p-10 pr-20'>
                        <MdTask class=' text-4xl  ' /> 
                    </div>
                    <BarText
                        heading='Task management'
                        text='Create, organise and proritize tasks with ease with the all in one dashboard'
                    />
                </span>

                <span class=' col-span-2'>
                    <div class=' text-purple-185 bg-ash-242 absolute -z-1 p-10 pr-20'>
                        <RiTeamFill class=' text-4xl  ' /> 
                    </div>
                    <BarText
                        heading='Collaborative Spaces'
                        text='keep everyone on the same page with built in communication tools and file sharing.'
                    />

                </span>
                <span class=' col-span-2'>
                    <div class=' text-purple-185 bg-ash-242  absolute -z-1 p-10 pr-20'>
                        <IoMdNotifications class=' text-4xl  ' />
                    </div>
                    <BarText
                        heading='Notifications'
                        text='Never miss a deadline, stay on track with our notifications integration.'
                    />
                </span>

                <span class=' col-span-2'>
                    <div class=' text-purple-185 bg-ash-242  absolute -z-1 p-10 pr-20'>
                        <FaCalendarAlt class=' text-4xl  ' />
                    </div>
                    <BarText
                        heading='Calendar Intergration'
                        text='Book meeting dates and schedule time with our calendar integration.'
                    />
                </span>

                <span class=' col-span-2'>
                    <div class=' text-purple-185 bg-ash-242  absolute -z-1 p-10 pr-20'>
                        <IoMdAnalytics class=' text-4xl  ' />
                    </div>
                    <BarText
                        heading='Progress Analytics'
                        text='Check out personal and team progress with our report and analytics.'
                    />
                </span>

                <span class=' col-span-2'>
                    <div class=' text-purple-185 bg-ash-242  absolute -z-1 p-10 pr-20'>
                        <PiVideoConferenceFill class=' text-4xl  ' />
                    </div>
                    <BarText
                        heading='Meetings Conferencing'
                        text='Host and join meetings with video and audio conferencing platforms.'
                    />
                </span>

            </div>

            <div class='grid md:grid-cols-3 gap-2'>
                <p class='col-span-2 text-sm font-normal font-Roboto mb-8 md:mt-0'>All features have been built for ease and ultimate productivity to streamline task management,set deadlines and collaborate effectively</p>

                <button >
                    <Link to="/Sign_up" class="md:px-6 px-4 py-1.5 bg-amber-48 font-Roboto md:text-base text-xs font-medium text-white hover:bg-white border-2 hover:text-amber-48">
                        Explore all features
                    </Link>
                </button>
            </div>
        </div>
    )
}

export default Choice