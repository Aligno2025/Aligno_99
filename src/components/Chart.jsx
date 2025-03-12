import React from 'react'
import Dashboard from '../components/Dashboard'



function Bar(props) {

    return (

        <div>
            <div className='pt-6 md:pl-4 md:pr-4 pb-6 rounded-2xl mt-3 bg-white font-Roboto text-center'>
                <h1 className='md:text-lg text-sm font-bold font-Poppins'>{props.heading}</h1>
                <p className='md:text-sm text-xs font-Roboto'>{props.text}</p>
            </div>
        </div>
    )

}




const Chart = () => {
    return (
<<<<<<< HEAD
        <div className='p-8 pt-2 md:p-10 grid md:grid-cols-4 md:gap-10 md:bg-linear-to-t  from-arrow-purple-104 to-light-red-181 md:min-h-dvh'>
            <div className='md:col-span-3'>
                <Dashboard />
            </div>
            <div className='grid grid-cols-2 md:grid-cols-1 w-[100%] md:w-70 md:gap-6 md:p-4 mt-5 md-mt-0'>
                <div>
                    <span className='md:pr-60 pr-[95%] pt-8 rounded inline-block bg-red-250'></span>
                    <Bar
                        circle
                        heading='Task Management'
                        text='Streamlined task management for individuals and teams'
                    />
                </div>
                <div>
                    <span className='md:pr-60 pr-[95%] pt-8 rounded inline-block bg-purple-185'></span>
                    <Bar
                        circle
                        heading='Team Collaboration'
                        text='Real time collaboration with seamless communication'
                    />

=======
        <div className='@container'>
            <div class='p-8 md:p-10 grid md:grid-cols-4 @5xl:gap-5 gap-2 md:bg-linear-to-t  from-arrow-purple-104 to-light-red-181 '>
                <div class='md:col-span-3'>
                    <Dashboard />
                </div>
                <div class='grid grid-cols-2 md:grid-cols-1 gap-2 md:gap-6 md:p-4 mt-5 md-mt-0'>
                    <div>
                        <span class='pr-[100%] pt-8 rounded inline-block bg-red-250'></span>
                        <Bar
                            circle
                            heading='Task Management'
                            text='Streamlined task management for individuals and teams'
                        />
                    </div>
                    <div>
                        <span class='pr-[100%] pt-8 rounded inline-block bg-purple-185'></span>
                        <Bar
                            circle
                            heading='Team Collaboration'
                            text='Real time collaboration with seamless communication'
                        />
                    </div>
>>>>>>> ced7316 (new ajustment)
                </div>
            </div>
        </div>
    )
}

export default Chart