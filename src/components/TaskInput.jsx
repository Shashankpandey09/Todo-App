// TaskInput.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../Slices/todoSlice';

function TaskInput() {
  // State to store the task input value
  const [task, setTask] = useState('');
  const dispatch = useDispatch(); // Initialize useDispatch hook

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    if (task.trim() !== '') { // Check if task input is not empty
      dispatch(addTask(task)); // Dispatch the addTask action with the task input value
      setTask(''); // Clear the task input field
    }
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit} className="mt-4">
        {/* Task input field */}
        <div className="flex items-center border-b-2 border-blue-500 py-2">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)} // Update task state on input change
            placeholder="Add a new task..."
            className="appearance-none bg-transparent border-none w-full md:mr-0 text-sm text-white  py-1 px-2 leading-tight focus:outline-none font-semibold md:text-lg" // Apply font styling
          />
          {/* Add Task button */}
          <button type="submit" className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 text-sm text-white py-2 md:px-4 px-1 rounded font-semibold">
            Add Task
          </button>
        </div>
      </form>
    </div>
  );
}

export default TaskInput;
