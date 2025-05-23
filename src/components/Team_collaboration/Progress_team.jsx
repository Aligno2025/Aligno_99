import React, {useContext} from 'react'
import Graph_team from '../Team_collaboration/Graph_team'
import { Link } from 'react-router-dom'
import { AuthContext } from '../AuthContext.jsx';

const Progress_team = () => {
  const { isLoggedIn, logout } = useContext(AuthContext);


  return (
    <div>
      <div class='grid md:grid-cols-2 justify-center items-center h-150 md:h-90 relative'>
        <div class='md:order-first order-last'>
          <Graph_team />
        </div>
        <div class='md:pl-20 pl-10 md:order-last order-first'>
          <div >
            <h1 class="font-poppins text-2xl font-extrabold">Progress Tracking</h1>
            <p class='font-Roboto text-base font-normal p-10 md:pr-20 pl-0'>Monitor your progress with visual dashboards and insights that keep you informed about what’s done and what’s next.</p>
          </div>
          {!isLoggedIn &&  <button >
            <Link to="/Sign_up" className="px-4 md:px-8 py-2.5 bg-amber-48 font-Roboto text-base font-medium text-white hover:bg-white border-amber-48 border-2 hover:text-amber-48" smooth>
              Show Demo
            </Link>
          </button>}
        </div>
      </div>
    </div>
  )
}

export default Progress_team