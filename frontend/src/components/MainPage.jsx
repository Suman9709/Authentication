import React, { useState, useEffect } from "react";

import Navbar from './Navbar'; 

import { Forminput } from './Forminput';
import HabitList from './HabitList';
import ProgressReport from './ProgressReport'
import Footer from "./Footer";


const MainPage = ({ handleLogout }) => {

  const [habits, setHabits] = useState(
    JSON.parse(localStorage.getItem("habits")) || {}
  );
  const [selectedDay, setSelectedDay] = useState("Monday");

  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(habits));
  }, [habits]);

  const addHabit = (habit, day) => {
    const newHabits = { ...habits };
    if (!newHabits[day]) {
      newHabits[day] = [];
    }
    newHabits[day].push({ text: habit, completed: false });
    setHabits(newHabits);
  };

  const completeHabit = (day, index) => {
    const newHabits = { ...habits };
    newHabits[day][index].completed = !newHabits[day][index].completed;
    setHabits(newHabits);
  };

  const deleteHabit = (day, index) => {
    const newHabits = { ...habits };
    newHabits[day] = newHabits[day].filter((_,i) => i !== index);
    setHabits(newHabits);
  };

  const calculateProgress = (day) => {
    if (!habits[day] || habits[day].length === 0) return 0;
    const completedHabits = habits[day].filter(habit => habit.completed).length;
    return (completedHabits / habits[day].length) * 100;
  };


  return (
    <div>
      <div>
      <Navbar setIsAuthenticated={() => {}} handleLogout={handleLogout} />
      {/* Other content */}
      
    </div>

    <div className="App mt-20">
    <div className="marquee-container">
          <h1 className="text-4xl font-sans font-semibold mt-8 flex justify-center marquee-text">
            Welcome To my Habit Tracker...
          </h1>
        </div>
      
     <div className="mt-8">
     <Forminput addHabit={addHabit}/>
      <div className="day-selector  flex justify-center p-4">
        <select
          value={selectedDay}
          onChange={(e) => setSelectedDay(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[200px] p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day) => (
            <option key={day} value={day}>{day}</option>
          ))}
        </select>
      </div>
     </div>
      <HabitList
        habits={habits[selectedDay] || []}
        completeHabit={(index) => completeHabit(selectedDay, index)}
        deleteHabit={(index) => deleteHabit(selectedDay, index)}
      />
       <ProgressReport habits={habits} calculateProgress={calculateProgress} />
    </div>

<Footer/>
    </div>

    
  );
};

export default MainPage;
