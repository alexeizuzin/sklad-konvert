import React, { useState } from 'react';
import { transformText } from './../utils';
import './Editor.css';

export function Editor(props) {
  const { setTransformedText } = props;
  const [text, setText] = useState('');

  const transformHandler = () => {
    setTransformedText(transformText(text));
  };
  const changeTextHandler = (event) => {
    // setText(event.target.value);
    setTransformedText(transformText(event.target.value));
  };

  return (
    <div className="Editor">
      <div>
        <textarea
          className="Editor_input-area"
          onChange={changeTextHandler}
        />
      </div>
      {/* <div>
        <button
          className="Editor_button"
          onClick={transformHandler}
        >
          Разбить по складам
        </button>
      </div> */}
    </div>
  );
}
