import React from 'react'

const Feature = () => {
  return (
    <div class='relative'>
        <div class="grid grid-cols-2 gap-10 absolute w-130 top-5 -left-60 rounded bg-white p-10 ">
        <div>
            <h1 className='font-Roboto font-bold'>Task management</h1>
            <p>Create, organise and proritize tasks with ease </p>
        </div>
        <div>
        <h1>Calenders</h1>
        <p>Book meetings with calendar integration </p>
        </div>
        <div>
        <h1>Team Collaboration</h1>
        <p>Collaborate in real time and manage teams </p>
        </div>
        <div>
        <h1>Notifications</h1>
        <p>Stay on track with reminders from notifications </p>
        </div>
        </div>
    </div>
  )
}

export default Feature