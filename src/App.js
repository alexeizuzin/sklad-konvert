import React, { useState } from 'react';
import { Editor } from './Editor/Editor';
import './App.css';

function App() {
  const [transformedText, setTransformedText] = useState('');

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Текст по складам для обучения чтению
        </p>
        <Editor setTransformedText={setTransformedText} />
      </header>
      <div
        className="app-sklad-text"
        dangerouslySetInnerHTML={{ __html: transformedText }}
      />
    </div>
  );
}

export default App;
