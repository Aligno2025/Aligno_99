import React from 'react'
import img1 from '../../assets/img/Team_Collaboration.png'

import Chart from '../Chart'

const Collaboration_team = () => {
  return (
    <div class='md:min-h-screen h-[110%] pt-20 flex justify-center items-center text-center pr-10 pl-10'>
    <div>
        <div class='flex justify-center items-center'><img class='md:w-[50%] w-[40%] md:mx-20' src={img1} alt="" /></div>
        <h1 class=' font-black md:text-4xl text-3xl mt-6'>Your Productivity Powerhouse</h1>
        <p class='md:w-150 mt-4'>Aligno offers everything you need to stay organised, collaborate seamlessly  and achieve your goals all in one placve.</p>
    </div>
    
    </div>
  )
}

export default Collaboration_team