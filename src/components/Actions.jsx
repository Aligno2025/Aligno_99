import React from 'react'
import img1 from '../assets/img/Action_img1.png'
import img2 from '../assets/img/Action_img2.png'
import img3 from '../assets/img/Action_img3.png'
import img4 from '../assets/img/Action_img4.png'
import img5 from '../assets/img/Action_img5.png'
import Three_steps from './Three_steps'




function Numeron(props) {

    return (

        <div>
            <h1 class='font-Roboto text-xl md:text-3xl font-bold text-orange-225'>{props.h1}</h1>
            <p class='font-poppins text-xs md:text-lg font-medium mt-3'>{props.text}</p>
        </div>
    )

}




const Actions = () => {
    return (
        <div>
            <div class='pr-5 pl-5 md:pr-50 md:pl-50 md:pt-20 pt-10 pb-10 md:pb-5 text-center'>
                <div>
                    <p class='text-lg font-medium font-poppins'><span class='p-1.5 bg-orange-225 rounded-2xl inline-block mx-4 '></span>Aligno In Action</p>
                </div>
                <div class='bg-ash-243 rounded p-5 md:p-10 grid grid-cols-3 gap-2 md:gap-0 mt-4'>
                    <Numeron
                        h1='1.5M+'
                        text='Users'
                    />

                    <div class='relative'>
                        <span class='pt-18 pr-0.5 -left-1 md:left-0 rounded inline-block bg-arrow-purple-104 absolute'></span>
                        <Numeron
                            h1='150+'
                            text='Task Intergration'
                        />
                    </div>

                    <div class='relative'>
                        <span class='pt-18 -left-1 md:left-0 pr-0.5 rounded inline-block bg-arrow-purple-104 absolute'></span>
                        <Numeron
                            h1='200+'
                            text='Completed Projects'
                        />
                    </div>
                </div>
            </div>
            <div class='grid md:grid-cols-5 grid-cols-2 md:gap-6 gap-10 pr-10 pl-10 md:pr-20 md:pl-20 justify-center items-center p-10 md:p-20'>
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
                <img src={img4} alt="" />
                <img src={img5} alt="" />
            </div>

            <Three_steps />
         
        </div>
    )
}

export default Actions