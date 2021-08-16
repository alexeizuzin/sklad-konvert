import React, { useState } from 'react';

import { Controls } from './Controls/Controls';
import { Editor } from './Editor/Editor';
import { Output } from './Output/Output';

import './App.css';

function App() {
  const [transformedText, setTransformedText] = useState('');
  const [fontSize, setFontSize] = useState(Output.DefaultFontSize);
  const [isFormVisible, setIsFormVisible] = useState(true);

  const incrementFontSize = () => {
    if (fontSize >= Output.MaxFontSize) {
      return;
    }
    setFontSize(fontSize + 1);
  };

  const decrementFontSize = () => {
    if (fontSize <= Output.MinFontSize) {
      return;
    }
    setFontSize(fontSize - 1);
  };

  return (
    <div className="App">
      {isFormVisible && (
        <header className="App-header">
          <p>
            Текст по складам для обучения чтению
          </p>
          <Editor setTransformedText={setTransformedText} />
        </header>
      )}

      <Controls
        decrementFontSize={decrementFontSize}
        incrementFontSize={incrementFontSize}
        isFormVisible={isFormVisible}
        hideForm={() => {
          setIsFormVisible(false);
        }}
        showForm={() => {
          setIsFormVisible(true);
        }}
      />

      <Output
        text={transformedText}
        fontSize={fontSize}
      />
    </div>
  );
}

export default App;
