import React from 'react'
import Dashboard from '../../components/Dashboard'



function Bar (props) {

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
<<<<<<< HEAD
        <div className='p-5 pl-10 pr-10 md:p-10 grid md:grid-cols-4 md:gap-10 gap-4 md:bg-linear-to-t  from-arrow-purple-104 to-light-red-181 md:min-h-dvh'>
            <div className='md:col-span-3 order-2'>
=======
        <div class='p-5 md:p-10 grid md:grid-cols-4 gap-10 md:bg-linear-to-t  from-arrow-purple-104 to-light-red-181'>
            <div class='md:col-span-3 order-2'>
>>>>>>> ced7316 (new ajustment)
=======
        <div className='p-5 pl-10 pr-10 md:p-10 grid md:grid-cols-4 md:gap-10 gap-4 md:bg-linear-to-t  from-arrow-purple-104 to-light-red-181 md:min-h-dvh'>
            <div className='md:col-span-3 order-2'>
>>>>>>> 5944b56 (new adjustment)
               <Dashboard />
            </div>
            <div className='grid grid-cols-2 md:grid-cols-1 md:gap-6 md:p-4 p-2 '>
                <div>
<<<<<<< HEAD
<<<<<<< HEAD
                    <span className='md:pr-60 pr-[95%] pt-8 rounded inline-block bg-red-250'></span>
=======
                    <span class=' pr-[95%] pt-8 rounded inline-block bg-red-250'></span>
>>>>>>> ced7316 (new ajustment)
=======
                    <span className='md:pr-60 pr-[95%] pt-8 rounded inline-block bg-red-250'></span>
>>>>>>> 5944b56 (new adjustment)
                    <Bar
                    circle
                    heading='Accessibility'
                    text='Accessible anywhere on desktop and mobile.'
                    />
                </div>
                <div>
<<<<<<< HEAD
<<<<<<< HEAD
                <span className='md:pr-60 pr-[95%] pt-8 rounded inline-block bg-purple-185'></span>
=======
                <span class='pr-[95%] pt-8 rounded inline-block bg-purple-185'></span>
>>>>>>> ced7316 (new ajustment)
=======
                <span className='md:pr-60 pr-[95%] pt-8 rounded inline-block bg-purple-185'></span>
>>>>>>> 5944b56 (new adjustment)
                    <Bar
                    circle
                    heading='Intuitive Design'
                    text='Intuitive design for effortless productivity'
                    />
                   
                </div>
            </div>
        </div>
    )
}

export default Chart