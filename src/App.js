import React from 'react';
import './App.css';
import Calculator from './calculator'; // Import the Calculator component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Calculator component */}
        <Calculator />
      </header>
    </div>
  );
}

export default App;
