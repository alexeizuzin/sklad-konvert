import React from 'react';
import './Controls.css';

export function Controls(props) {
  const {
    decrementFontSize,
    incrementFontSize,
    isFormVisible,
    hideForm,
    showForm,
  } = props;

  return (
    <div className="Controls">
      <div>
        <button
          className="Controls__button"
          onClick={decrementFontSize}
        >
          -
        </button>
        <button
          className="Controls__button"
          onClick={incrementFontSize}
        >
          +
        </button>
        
        {isFormVisible ? (
          <button
            className="Controls__button"
            onClick={ hideForm }
          >
            ^
          </button>
        ) : (
          <button
            className="Controls__button"
            onClick={ showForm }
          >
            v
          </button>
        )}
      </div>
    </div>
  );
}
