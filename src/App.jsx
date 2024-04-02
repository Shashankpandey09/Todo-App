// App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from '../store'; // Import the Redux store
import TaskInput from './components/TaskInput'; // Import TaskInput component
import TaskList from './components/TaskList'; // Import TaskList component

function App() {
  return (
    <Provider store={store}> {/* Provide Redux store to the application */}
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex flex-col items-center  py-8"> {/* Outer container with linear gradient background */}
        <div className="bg-white bg-opacity-20 backdrop-blur-lg w-[66%] rounded-lg shadow-md p-8"> {/* Inner container with blurred background */}
          <h1 className="text-4xl mb-8 font-extrabold text-white text-center">ToDo App</h1> {/* Title with attractive font */}
          <TaskInput /> {/* Render TaskInput component */}
          <TaskList /> {/* Render TaskList component */}
        </div>
      </div>
    </Provider>
  );
}

export default App;
