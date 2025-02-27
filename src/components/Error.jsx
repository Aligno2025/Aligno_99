import React from 'react'
import { Link } from 'react-router-dom';
import { IoMdArrowRoundBack } from "react-icons/io";

const Error = () => {
  return (
    <div class='min-h-screen bg-gray-200 flex gap-4 items-center justify-center'>

      <Link to="/App"
        class="px-6 py-2 bg-amber-48 font-Roboto text-base font-medium text-white hover:bg-white border-amber-48 border-2 hover:text-amber-48">
        <IoMdArrowRoundBack class='inline' /> Home
      </Link>
      <h1 class='text-5xl'>404 Error</h1>

    </div>
  )
}

export default Error