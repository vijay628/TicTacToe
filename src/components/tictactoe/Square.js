import React from 'react';
import './GameBoard.css'; // Make sure to adjust the path if necessary
import circleIcon from '../assets/circle-svgrepo-com.png'; // Adjust the path as necessary
import crossIcon from '../assets/cross-svgrepo-com.png'; // Adjust the path as necessary

// Your Game component and other code


function Square({ value, onSquareClick }) {
    return (
      <button className='boxes' onClick={onSquareClick}>
        {value === 'X' ? <img src={crossIcon} alt="cross" /> : value === 'O' ? <img src={circleIcon} alt="circle" /> : null}
      </button>
    );
  }

  export default Square;
  