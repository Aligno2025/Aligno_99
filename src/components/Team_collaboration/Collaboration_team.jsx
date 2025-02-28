import React from 'react'
import img1 from '../../assets/img/Team_Collaboration.png'

import Chart from '../Chart'

const Collaboration_team = () => {
  return (
    <div>
    <div class='md:h-dvh h-[110%] pt-20 flex justify-center items-center text-center'>
    <div>
        <img class='md:w-[60%] w-[40%] mx-20' src={img1} alt="" />
        <h1 class=' font-black md:text-4xl text-2xl'>Your Productivity Powerhouse</h1>
        <p class='md:w-150 mt-4'>Aligno offers everything you need to stay organised, collaborate seamlessly  and achieve your goals all in one placve.</p>
    </div>
    </div>
    
    </div>
  )
}

export default Collaboration_team