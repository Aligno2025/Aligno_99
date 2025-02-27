import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from 'react-router-dom';

import Main_task from './components/Task_management/Main_task.jsx'
import Main_team from './components/Team_collaboration/Main_team.jsx'
import Main_support from './components/Support/Main_support.jsx'
import Sign_up from './components/Sign_up/Sign_up.jsx'
// import Hero from './components/Hero.jsx';
import Error from './components/Error.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "Main_task",
    element: <Main_task />,
  },
  {
    path: "Main_team",
    element: <Main_team />,
  },
  {
    path: "Main_support",
    element: <Main_support />,
  },
  {
    path: "Sign_up",
    element: <Sign_up />,
  },
  {
    path: "Error",
    element: <Error />,
  },
])


createRoot(document.getElementById('root')).render(
  <StrictMode basename={import.meta.env.BASE_URL} >
    <RouterProvider router={router}  />
  </StrictMode>,
)
