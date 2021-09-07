import React from 'react';
import './Controls.css';

export function Controls(props) {
  const {
    caps,
    decrementFontSize,
    incrementFontSize,
    isFormVisible,
    hideForm,
    setCapsOff,
    setCapsOn,
    setRoboto,
    setPlayfair,
    showForm,
  } = props;

  return (
    <div className="Controls">
      <div>

        {caps ? (
          <button
            className="Controls__button"
            onClick={ setCapsOff }
          >
            a
          </button>
        ) : (
          <button
            className="Controls__button"
            onClick={ setCapsOn }
          >
            A
          </button>
        )}

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

        <button
          className="Controls__button Controls__roboto"
          onClick={setRoboto}
        >
          R
        </button>

        <button
          className="Controls__button Controls__playfair"
          onClick={setPlayfair}
        >
          P
        </button>

      </div>
    </div>
  );
}
