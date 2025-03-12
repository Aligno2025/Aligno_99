import React from 'react'
import img1 from '../assets/img/Resources_img1.png' 

import img2 from '../assets/img/Resources_img2.png'
import { Link } from 'react-router-dom'




function Cards(props) {

    return (

        <div>

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 5944b56 (new adjustment)
            <div className='pt-4 pl-4 pr-4 pb-4 md:w-md w-[100%] rounded-2xl mt-3 bg-white font-Roboto drop-shadow-xl'>
                <img className='rounded-full' src={props.img} alt="" />
                <h1 className='text-base font-semibold font-Roboto'>{props.h1}</h1>
                <h2 className='text-base font-semibold font-Roboto'>{props.h2}</h2>
                <span className='pr-12 pt-0.5 rounded inline-block bg-amber-48'>{props.line}</span>
                <p className='text-sm font-normal font-Roboto'>{props.text}</p>
<<<<<<< HEAD
=======
            <div class='pt-4 pl-4 pr-4 pb-4 @5xl:w-sm w-[100%] rounded-2xl mt-3 bg-white font-Roboto drop-shadow-xl'>
                <img class='rounded-full' src={props.img} alt="" />
                <h1 class='text-base font-semibold font-Roboto'>{props.h1}</h1>
                <h2 class='text-base font-semibold font-Roboto'>{props.h2}</h2>
                <span class='pr-12 pt-0.5 rounded inline-block bg-amber-48'>{props.line}</span>
                <p class='text-sm font-normal font-Roboto'>{props.text}</p>
>>>>>>> ced7316 (new ajustment)
=======
>>>>>>> 5944b56 (new adjustment)

            </div>
        </div>
    )

}


const Resources = () => {
    return (
<<<<<<< HEAD
<<<<<<< HEAD
        <div className='md:p-16 p-10 bg-linear-to-t  from-arrow-purple-104 to-light-red-181 h-min'>
            <div className='grid md:grid-cols-2 gap-10'>
=======
        <div class='md:p-16 p-10 bg-linear-to-t  from-arrow-purple-104 to-light-red-181 h-min @container'>
            <div class='grid md:grid-cols-2 @5xl:gap-10 '>
>>>>>>> ced7316 (new ajustment)
=======
        <div className='md:p-16 p-10 bg-linear-to-t  from-arrow-purple-104 to-light-red-181 h-min'>
            <div className='grid md:grid-cols-2 gap-10'>
>>>>>>> 5944b56 (new adjustment)
                <div>
                    <Cards
                        img={img1}
                        h1='Sarah A.'
                        h2='Product Manager'
                        line
                        text='“Aligno has revolutionized how our team works together. We’ve never been this organised.”'
                    />

                    <div className='mt-8 md:ml-26'>
                        <Cards
                            img={img2}
                            h1='James T'
                            h2='Freelancer'
                            line
                            text='“Finally a tool thats both simple and powerful. I love it.”'
                        />
                    </div>


                </div>

                <div>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 5944b56 (new adjustment)
                    <div className='md:ml-10'>
                        <span className='pr-60 pt-8 rounded w-[100%] md:w-md inline-block bg-red-250'></span>
                        <div className='pt-6 pl-10 pr-10 md:pb-14 pb-8 w-[100%] md:w-md rounded-2xl mt-3 bg-white font-Roboto text-center'>
                            <div className='grid md:block grid-rows gap-4'>
                                <h1 className='order-last md:order-none text-3xl font-bold font-Poppins md:mb-0 mb-5'>Resources</h1>
                                <p className='order-first md:order-none text-sm md:text-md md:text-lg font-Roboto md:mb-10'> From detailed guides and tutorials to customer support and best practices, our resources ensure you have the knowledge and tools needed to streamline task management and enhance team collaboration.</p>
<<<<<<< HEAD
=======
                    <div class='md:ml-10 mt-6'>
                        <span class='pr-60 pt-8 rounded w-[100%] @5xl:w-sm inline-block bg-red-250'></span>
                        <div class='pt-6 pl-10 pr-10 pb-14 w-[100%] @5xl:w-sm rounded-2xl mt-3 bg-white font-Roboto text-center'>
                            <div class='grid md:block grid-rows gap-4'>
                                <h1 class='order-last md:order-none text-3xl font-bold font-Poppins md:mb-0 mb-5'>Resources</h1>
                                <p class='order-first md:order-none text-sm md:text-md md:text-lg font-Roboto md:mb-10'> From detailed guides and tutorials to customer support and best practices, our resources ensure you have the knowledge and tools needed to streamline task management and enhance team collaboration.</p>
>>>>>>> ced7316 (new ajustment)
=======
>>>>>>> 5944b56 (new adjustment)
                            </div>
                            <button >
                                <Link to="/Sign_up" className="md:px-6 px-4 py-1.5 bg-amber-48 font-Roboto md:text-base text-xs font-medium text-white hover:bg-white border-2 hover:text-amber-48"  >
                                    Explore all features
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resources