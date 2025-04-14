// src/components/App.js
import React, { useState } from 'react';
import ShoppingList from './ShoppingList'; // Assuming you have this component
import './App.css';  // This should work if App.css is directly in the src folder

function App() {
  // Step 1: Create a state variable to manage the theme (dark or light)
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Step 2: Event handler to toggle the theme
  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);  // Toggle the current mode
  };

  return (
    <div className={`App ${isDarkMode ? 'dark' : 'light'}`}>
      {/* Button to toggle dark/light mode */}
      <button onClick={toggleDarkMode}>
        {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
      {/* Add ShoppingList component here */}
      <ShoppingList />
    </div>
  );
}

export default App;
