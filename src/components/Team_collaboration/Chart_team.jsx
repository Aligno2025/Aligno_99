import React from 'react'
import Dashboard from '../../components/Dashboard'



function Bar (props) {

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
        <div class='p-5 md:p-10 grid md:grid-cols-4 md:gap-10 gap-4 md:bg-linear-to-t  from-arrow-purple-104 to-light-red-181 md:min-h-dvh'>
            <div class='md:col-span-3 order-2'>
               <Dashboard />
            </div>
            <div class='grid grid-cols-2 md:grid-cols-1 md:gap-6 md:p-4 p-2 '>
                <div>
                    <span class='md:pr-60 pr-[95%] pt-8 rounded inline-block bg-red-250'></span>
                    <Bar
                    circle
                    heading='Accessibility'
                    text='Accessible anywhere on desktop and mobile.'
                    />
                </div>
                <div>
                <span class='md:pr-60 pr-[95%] pt-8 rounded inline-block bg-purple-185'></span>
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