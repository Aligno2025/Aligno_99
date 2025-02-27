import React from 'react'
import Dashboard from '../components/Dashboard'



function Bar(props) {

    return (

        <div>
            <div class='pt-6 md:pl-4 md:pr-4 pb-6 rounded-2xl mt-3 bg-white font-Roboto text-center'>
                <h1 class='md:text-lg text-sm font-bold font-Poppins'>{props.heading}</h1>
                <p class='md:text-sm text-xs font-Roboto'>{props.text}</p>
            </div>
        </div>
    )

}




const Chart = () => {
    return (
        <div class='p-8 md:p-10 grid md:grid-cols-4 md:gap-10 md:bg-linear-to-t  from-arrow-purple-104 to-light-red-181 md:min-h-dvh'>
            <div class='md:col-span-3'>
                <Dashboard />
            </div>
            <div class='grid grid-cols-2 md:grid-cols-1 md:gap-6 md:p-4 mt-5 md-mt-0'>
                <div>
                    <span class='md:pr-60 pr-[95%] pt-8 rounded inline-block bg-red-250'></span>
                    <Bar
                        circle
                        heading='Task Management'
                        text='Streamlined task management for individuals and teams'
                    />
                </div>
                <div>
                    <span class='md:pr-60 pr-[95%] pt-8 rounded inline-block bg-purple-185'></span>
                    <Bar
                        circle
                        heading='Team Collaboration'
                        text='Real time collaboration with seamless communication'
                    />

                </div>
            </div>
        </div>
    )
}

export default Chart