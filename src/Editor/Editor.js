import React, { useEffect } from 'react';
import { transformText } from './../utils';
import './Editor.css';
const defaultText = 'Без труда не вынешь и рыбку из пруда';

export function Editor(props) {
  const { setText, setTransformedText, text = defaultText } = props;

  const changeTextHandler = (event) => {
    setText(event.target.value);
    setTransformedText(transformText(event.target.value));
  };

  useEffect(() => {
    setTransformedText(transformText(text));
  }, [setTransformedText, text]);

  return (
    <div className="Editor">
      <div>
        <textarea
          autoFocus
          className="Editor_input-area"
          onChange={changeTextHandler}
          defaultValue={text}
        />
      </div>
    </div>
  );
}
