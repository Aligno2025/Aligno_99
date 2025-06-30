import { useContext } from 'react';
import Dashboard from '../components/Dashboard'
import { Link } from 'react-router-dom'
import { AuthContext } from '../components/AuthContext.jsx';

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
  const { isLoggedIn, user, logout, loading } = useContext(AuthContext);

    return (
        <div className='@container'>
            <div className='p-8 md:p-10 grid md:grid-cols-4 @5xl:gap-5 gap-2 md:bg-linear-to-t  from-arrow-purple-104 to-light-red-181 '>
                <div className='md:col-span-3'>
                <div className='mb-10'>
                    <Dashboard />
                </div>
                    
                         {!isLoggedIn ? (
                                <Link
                                  to="/Sign_in"
                                  className="px-6 py-1.5 bg-amber-48 font-Roboto text-base font-medium text-white hover:bg-white  hover:text-amber-48 inline-block"
                                >
                                  Sign in
                                </Link>
                            ) : (
                              <Link to="/Dashboard" >
                            <div  className="px-6 py-1.5 bg-amber-48 font-Roboto text-base font-medium text-white hover:bg-white  hover:text-amber-48 inline-block">
                            Dashboard
                            </div>
                        </Link>
                            )}


                </div>
                <div className='grid grid-cols-2 md:grid-cols-1 gap-2 md:gap-6 md:p-4 mt-5 md-mt-0'>
                    <div>
                        <span className='pr-[100%] pt-8 rounded inline-block bg-red-250'></span>
                        <Bar
                            circle
                            heading='Task Management'
                            text='Streamlined task management for individuals and teams'
                        />
                    </div>
                    <div>
                        <span className='pr-[100%] pt-8 rounded inline-block bg-purple-185'></span>
                        <Bar
                            circle
                            heading='Team Collaboration'
                            text='Real time collaboration with seamless communication'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chart