import React, { useState } from 'react';
import './calculator.css';

const Calculator = () => {
  const [display, setDisplay] = useState('');

  const handleButtonClick = (value) => {
    if (value === 'C') {
      // Clear the entire display
      setDisplay('');
    } else if (value === '←') {
      // Delete the last digit
      setDisplay(display.slice(0, -1));
    } else if (value === '=') {
      try {
        // Calculate the result when '=' button is clicked
        setDisplay(eval(display).toString());
      } catch (error) {
        setDisplay('Error');
      }
    } else {
      // Add the digit/operator to the display
      setDisplay(display + value);
    }
  };
  

  const handleCalculate = () => {
    try {
      setDisplay(eval(display).toString());
    } catch (error) {
      setDisplay('Error');
    }
  };



  const buttons = [
    '7', '8', '9', 'C',
    '4', '5', '6', '÷',
    '1', '2', '3', '*','-',
    '0', '.', '+', '←', '='
  ];

  return (
    <div className="calculator">
      <div className="display">{display}</div>
      <div className="buttons">
        {buttons.map((button, index) => (
          <button key={index} onClick={() => handleButtonClick(button)}>{button}</button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
