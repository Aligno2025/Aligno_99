// import React from 'react'
// import img6 from '../assets/img/Steps_img1.png'
// import img7 from '../assets/img/Steps_img2.png'
// import img8 from '../assets/img/Steps_img3.png'
// import { Link } from 'react-router-dom'




// function Boards(props) {

//     return (
     
//             <div class='pt-4 pl-4 pr-4 md:pb-30 pb-[40%] rounded-2xl hover:bg-orange-225 mt-6 bg-purple-185 text-white '>
//                 <div class='pl-2'>
//                     <h1 class='text-2xl font-bold font-poppins'>{props.bigtext}</h1>
//                     <p class='text-sm font-lg font-Roboto pr-0 pl-0 p-6'>{props.smalltext}</p>
//                 </div>
//                 <div class='grid grid-cols-2 gap-1 md:gap-4 mt-2 md:mt-6'>

//                     <button >
//                         <Link to="/Sign_up" class="md:px-6 px-2 py-3 bg-amber-48 font-Roboto md:text-base text-xs font-medium text-white hover:bg-gray-50/5 border-2 border-amber-48 hover:text-white">
//                             {props.btn}
//                         </Link>
//                     </button>
//                     <div class='relative'><img class='absolute' src={props.img} alt="" /></div>
//                 </div>
//             </div>
//     )

// }

// const Three_steps = () => {
//     return (
//         <div >
//             <div class='pl-10 pr-10 pb-20'>
//                 <h1 class='text-center font-poppins text-3xl font-semibold'>Get Started in 3 simple steps</h1>

//                 <div class='grid md:grid-cols-3 gap-10'>


//                     <Boards
//                         bigtext='Sign Up for Free'
//                         smalltext='Our features have been built for ease and productivity'
//                         btn='Sign in'
//                         img={img6}
//                     />

//                     <Boards
//                         bigtext='Organize your tasks'
//                         smalltext='Our range of resources are designed to help you get the most out of our platform. '
//                         btn='Request Demo'
//                         img={img7}
//                     />

//                     <Boards
//                         bigtext='Achieve your goals'
//                         smalltext='join us on our innovate journey to make work easier and more productive'
//                         btn='Get Started'
//                         img={img8}
//                     />

//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Three_steps

import React from 'react'
import img6 from '../assets/img/Steps_img1.png'
import img7 from '../assets/img/Steps_img2.png'
import img8 from '../assets/img/Steps_img3.png'
import { Link } from 'react-router-dom'

function Boards(props) {

    return (
     
        <div class={`pt-4 pl-4 pr-4 md:pb-30 pb-[40%] rounded-2xl  mt-6 ${props.bgColor} ${props.textColor}`}>
            <div class='pl-2 md:mt-4 mt-2 '>
                <h1 class='text-2xl font-bold font-poppins'>{props.bigtext}</h1>
                <p class='text-sm font-lg font-Roboto pr-0 pl-0 p-6'>{props.smalltext}</p>
            </div>
            <div class='grid grid-cols-2 gap-1 md:gap-4 mt-2 md:mt-6'>
                <button>
                    <Link to="/Sign_up" class="md:px-6 px-2 py-3 bg-amber-48 font-Roboto md:text-base text-xs font-medium text-white hover:bg-white hover:text-amber-48 border-2 border-amber-48">
                        {props.btn}
                    </Link>
                </button>
                <div class='relative'><img class='absolute w-[70%]' src={props.img} alt="" /></div>
            </div>
        </div>
    )
}

const Three_steps = () => {
    return (
        <div >
            <div class='pl-10 pr-10 md:pb-10 pb-6'>
                <h1 class='text-center font-poppins text-3xl font-semibold'>Get Started in 3 simple steps</h1>

                <div class='grid md:grid-cols-3 md:gap-10 gap-2'>

                    <Boards
                        bigtext='Sign Up for Free'
                        smalltext='Our features have been built for ease and productivity'
                        btn='Sign in'
                        img={img6}
                        bgColor='bg-light-purple-185 hover:bg-light-purple-185/80'
                        textColor='text-white'
                    />

                    <Boards
                        bigtext='Organize your tasks'
                        smalltext='Our range of resources are designed to help you get the most out of our platform.'
                        btn='Request Demo'
                        img={img7}
                        bgColor='bg-light-orange-225 hover:bg-light-orange-225/80'
                    />

                    <Boards
                        bigtext='Achieve your goals'
                        smalltext='join us on our innovate journey to make work easier and more productive'
                        btn='Get Started'
                        img={img8}
                        bgColor='bg-light-ambere-48 hover:bg-light-ambere-48/80'
                        textColor='text-white'
                    />
                    
                </div>
            </div>
        </div>
    )
}

export default Three_steps
