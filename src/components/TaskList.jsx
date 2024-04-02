// TaskList.js
import React, { useState } from 'react'; // Import useState hook
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, taskCompleted } from '../Slices/todoSlice';

function TaskList() {
  const { todos } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const [filter, setFilter] = useState('all'); // State to manage the filter value

  const handleFilterChange = (e) => {
    setFilter(e.target.value); // Update the filter value when select input changes
  };

  // Function to handle task deletion
  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <div className="mt-4">
      {/* Select input for filtering tasks */}
      <select value={filter} onChange={handleFilterChange} className="px-2 py-1 rounded border">
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="incomplete">Incomplete</option>
      </select>
      <ol className="mt-2 space-y-4 w-full">
        {/* Filter tasks based on selected filter value */}
        {todos
          .filter((todo) => {
            if (filter === 'all') return true;
            if (filter === 'completed') return todo.complete;
            if (filter === 'incomplete') return !todo.complete;
            return true;
          })
          .map((todo, index) => (
            <li key={todo.id} className="flex items-center justify-between bg-white shadow-md rounded-md p-4">
              {/* Styled span element */}
              <span className={`${todo.complete ? 'line-through text-red-500' : 'text-gray-800'} capitalize font-semibold`}>
                {index + 1}.{todo.task}
              </span>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="h-4 w-4 md:mr-2 mr-0"
                  checked={todo.complete}
                  onChange={() => dispatch(taskCompleted(todo.id))}
                />
                <button onClick={() => handleDelete(todo.id)}>
                  <svg
                    className="w-6 h-6 fill-current text-red-400 transition-colors duration-300 hover:text-red-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    fill="none"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </li>
          ))}
      </ol>
    </div>
  );
}

export default TaskList;
