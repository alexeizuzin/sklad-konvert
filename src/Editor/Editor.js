import React, { useEffect } from 'react';
import { transformText } from './../utils';
import './Editor.css';
const defaultText = 'Без труда не вынешь и рыбку из пруда';

export function Editor(props) {
  const { setTransformedText } = props;

  const changeTextHandler = (event) => {
    setTransformedText(transformText(event.target.value));
  };

  useEffect(() => {
    setTransformedText(transformText(defaultText));
  }, [setTransformedText]);

  return (
    <div className="Editor">
      <div>
        <textarea
          autoFocus
          className="Editor_input-area"
          onChange={changeTextHandler}
          defaultValue={defaultText}
        />
      </div>
    </div>
  );
}
