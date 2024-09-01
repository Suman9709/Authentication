
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTrash } from '@fortawesome/free-solid-svg-icons';

function HabitList({ habits, completeHabit, deleteHabit }) {
  return (
    <div className=' flex justify-center'>
      <div className='w-96 h-60 border p-4 rounded-md'>
        <ul>
          {habits.map((habit, index) => (
            <li key={index} className="flex justify-between items-center">
              <span className={habit.completed ? 'line-through' : ''}>
                {habit.text}
              </span>
              <div className="flex gap-2">
                <button
                  onClick={() => completeHabit(index)}
                  className="text-green-500 hover:text-green-700"
                >
                  <FontAwesomeIcon icon={faCheck} />
                </button>
                <button
                  onClick={() => deleteHabit(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default HabitList;