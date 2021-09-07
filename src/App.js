import React, { useState } from 'react';

import { Controls } from './Controls/Controls';
import { Editor } from './Editor/Editor';
import { Output } from './Output/Output';

import './App.css';

function App() {
  const [text, setText] = useState(undefined);
  const [transformedText, setTransformedText] = useState('');
  const [fontSize, setFontSize] = useState(Output.DefaultFontSize);
  const [isFormVisible, setIsFormVisible] = useState(true);
  const [fontFamilyType, setFontFamilyType] = useState(Output.fontFamilyTypes.roboto);
  const [caps, setCaps] = useState(false);

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
          <Editor
            text={ text }
            setText={ setText }
            setTransformedText={setTransformedText}
          />
        </header>
      )}

      <Controls
        caps={caps}
        decrementFontSize={ decrementFontSize }
        incrementFontSize={ incrementFontSize }
        isFormVisible={isFormVisible}
        hideForm={ () => {
          setIsFormVisible(false);
        } }
        showForm={ () => {
          setIsFormVisible(true);
        } }
        setCapsOn={ () => { setCaps(true) } }
        setCapsOff={ () => { setCaps(false) } }
        setRoboto={ () => { setFontFamilyType(Output.fontFamilyTypes.roboto) } }
        setPlayfair={ () => { setFontFamilyType(Output.fontFamilyTypes.playfair) } }
      />

      <Output
        caps={caps}
        fontFamilyType={fontFamilyType}
        fontSize={fontSize}
        text={transformedText}
      />
      <div className="App-footer" />
    </div>
  );
}

export default App;
