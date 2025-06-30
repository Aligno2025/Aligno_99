import React, { useContext } from 'react';
import { MdTask } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { IoMdNotifications } from "react-icons/io";
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthContext.jsx';

const features = [
  {
    icon: <MdTask className="inline text-xl" />,
    title: "Task_management",
    description: "Create, organise and prioritize tasks with ease",
    loggedInPath: "/Main_task",
  },
  {
    icon: <FaCalendarAlt className="inline text-xl" />,
    title: "Calendars",
    description: "Book meetings with calendar integration",
    loggedInPath: "/Main_task",
  },
  {
    icon: <RiTeamFill className="inline text-xl" />,
    title: "Team Collaboration",
    description: "Collaborate in real time and manage teams",
    loggedInPath: "/Main_team",
  },
  {
    icon: <IoMdNotifications className="inline text-xl" />,
    title: "Notifications",
    description: "Stay on track with reminders from notifications",
    loggedInPath: "/Main_task",
  },
];

const FeaturesBtn = () => {
  const { isLoggedIn } = useContext(AuthContext); // ✅ use only from context

  return (
    <div className="absolute left-1/2 md:-left-40 md:top-6 top-0 -translate-x-1/2 md:translate-x-0 z-20">
      <ul className="grid md:grid-cols-2 md:space-x-10 md:space-y-10 space-y-5 bg-white text-gray-600 shadow-md md:h-[280px] h-[440px] md:w-[640px] w-80 rounded-2xl p-10">
        {features.map((feature, index) => (
          <li key={index}>
            <Link
              to={isLoggedIn ? feature.loggedInPath : "/Sign_in"}
              className="mb-2 font-Roboto font-bold hover:text-orange-225"
            >
              {feature.icon} {feature.title}
              <p className="text-sm font-poppins font-normal pt-2">
                {feature.description}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeaturesBtn;

