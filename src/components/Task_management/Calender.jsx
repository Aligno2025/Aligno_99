import React, { useState, useRef } from 'react';
import dayjs from 'dayjs';
import { FaGreaterThan, FaLessThan } from "react-icons/fa6";

const months = [
  'January', 'February', 'March', 'April', 'May', 'June', 'July',
  'August', 'September', 'October', 'November', 'December'
];

const Calendar = () => {
  // For the month
  const [selectedMonth, setSelectedMonth] = useState('February');
  const scrollContainerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isCalendarVisible, setIsCalendarVisible] = useState(false); // State for the calendar popup

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseLeave = () => { setIsDragging(false); };
  const handleMouseUp = () => { setIsDragging(false); };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 3; // Adjust the scroll speed
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  // For the date
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [selectedDay, setSelectedDay] = useState(null);
  const startOfMonth = selectedDate.startOf('month').startOf('week');
  const endOfMonth = selectedDate.endOf('month').endOf('week');
  const days = [];
  let day = startOfMonth;
  while (day.isBefore(endOfMonth, 'day')) {
    days.push(day);
    day = day.add(1, 'day');
  }

  const handleMonthChange = (event) => {
    const month = months.indexOf(event.target.value);
    setSelectedDate(selectedDate.month(month));
    setSelectedDay(null); // Reset selected day when month changes
  };

  const handleDayClick = (day) => {
    setSelectedDay(day);
  };

  // Show the calendar popup when the month is selected
  const toggleCalendarPopup = (month) => {
    setSelectedMonth(month);
    setSelectedDate(selectedDate.month(months.indexOf(month)));
    setIsCalendarVisible(true); // Show the popup
  };

  return (
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 5944b56 (new adjustment)
    <div className="md:max-w-lg max-w-70 mx-auto mt-25 p-5 bg-white shadow-lg rounded-lg md:mr-2">
      <div>
        <select value={months[selectedDate.month()]} onChange={handleMonthChange} className="px-4 py-1 rounded font-bold hover:border-black hover:border-2 mb-2 mt-10">
          {months.map((month) => (
            <option key={month} value={month}> {month} {selectedDate.format('YYYY')} </option>
          ))}
        </select>
        <div className="text-gray-700 font-semibold mb-2">Month</div>
        <div ref={scrollContainerRef} className="relative w-full overflow-x-auto scrollbar-hide cursor-grab" onMouseDown={handleMouseDown} onMouseLeave={handleMouseLeave} onMouseUp={handleMouseUp} onMouseMove={handleMouseMove}>
          <div className="inline-flex space-x-2">
            {months.map((month) => (
              <button
                key={month}
                onClick={() => toggleCalendarPopup(month)} // Show the calendar popup when month is clicked
                className={`px-4 py-2 border-2 border-gray-400 rounded-md whitespace-nowrap ${selectedMonth === month ? 'border-2 border-orange-500' : 'bg-gray-200'}`}
              >
                {month}
              </button>
            ))}
          </div>
        </div>

        {/* Display the calendar popup */}
        {/* {isCalendarVisible && ( )} */}
          <div className="mt-4">
            <div className="flex justify-between">
              <button className="text-gray-500" onClick={() => setIsCalendarVisible(false)}>Cancel</button>
              <button className="bg-orange-500 border-2 border-orange-500 hover:bg-white hover:text-black text-white px-4 py-2 rounded-md" onClick={() => setIsCalendarVisible(false)}>Done</button>
            </div>
<<<<<<< HEAD
=======
    <di>
      <div >
        <div className='grid md:grid-cols-3 gap-6 md:gap-2 md:pl-10 md:pr-10 p-4 pb-20'>
>>>>>>> ced7316 (new ajustment)
=======
>>>>>>> 5944b56 (new adjustment)

            {/* Calendar Navigation */}
<<<<<<< HEAD
<<<<<<< HEAD
            <div className='absolute top-15 md:left-10 left-0 p-5  bg-white shadow-lg rounded-lg'>
=======
            <div class='rounded-lg w-full '>
>>>>>>> ced7316 (new ajustment)
=======
            <div className='absolute top-15 md:left-10 left-0 p-5  bg-white shadow-lg rounded-lg'>
>>>>>>> 5944b56 (new adjustment)
              <div className="flex justify-between ">
                <select value={months[selectedDate.month()]} onChange={handleMonthChange} className="px-4 py-1 rounded font-bold hover:border-black hover:border-1 mb-2">
                  {months.map((month) => (
                    <option key={month} value={month}> {month} {selectedDate.format('YYYY')} </option>
                  ))}
                </select>
                <div>
                  <button className="px-4 py-2 text-orange-225 rounded hover:bg-black" onClick={() => setSelectedDate(selectedDate.subtract(1, 'month'))}>
                    <FaLessThan />
                  </button>
                  <button className="px-4 py-2 text-orange-225 rounded hover:bg-black" onClick={() => setSelectedDate(selectedDate.add(1, 'month'))}>
                    <FaGreaterThan />
                  </button>
                </div>
              </div>
              <button className="px-4 py-1 border-1 border-amber-48 text-orange-225 rounded hover:bg-black" onClick={() => setSelectedDate(selectedDate.add(1, 'year'))}>
                Next year
              </button>
              <button className="ml-2 px-4 py-1 border-1 border-amber-48 text-orange-225 rounded hover:bg-black" onClick={() => setSelectedDate(selectedDate.subtract(1, 'year'))}>
                Previous Year
              </button>
              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-3">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((dayName) => (
                  <div key={dayName} className="text-center font-bold">
                    {dayName}
                  </div>
                ))}
                {days.map((day) => (
                  <div
                    key={day.format('DDMMYYYY')}
                    className={`text-center p-2 rounded-lg cursor-pointer ${day.isSame(selectedDate, 'month') ? 'bg-blue-100' : 'bg-gray-100 text-gray-400'} ${day.isSame(dayjs(), 'day') ? 'border-2 border-gray-400' : ''} ${selectedDay && day.isSame(selectedDay, 'day') ? 'border-2 border-orange-225' : ''}`}
                    onClick={() => handleDayClick(day)}
                  >
                    {day.format('D')}
                  </div>
                ))}
              </div>
            </div>
          </div>
<<<<<<< HEAD
<<<<<<< HEAD
       
=======

          <div>
            <div class='mt-8 md:mt-0'>
              <h1 class="font-poppins text-2xl font-extrabold">Calendar</h1>
              <p class='font-Roboto text-base font-normal pb-10 pt-5'>Sync your tasks with your favourite calendar applications for a comprehensive view of your deadlines and priorities.</p>
            </div>

            <button >
              <Link to="/Sign_up" class="px-4 md:px-8 py-2.5 bg-amber-48 font-Roboto text-base font-medium text-white hover:bg-white border-2 hover:text-amber-48" smooth>
                Show Demo
              </Link>
            </button>
          </div>
        </div>

>>>>>>> ced7316 (new ajustment)
=======
       
>>>>>>> 5944b56 (new adjustment)
      </div>
    </div>
  );
};

export default Calendar;
