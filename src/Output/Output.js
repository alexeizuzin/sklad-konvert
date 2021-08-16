import React from 'react';
import './Output.css';

const fontClasses = [
  'Output__size_0',
  'Output__size_1',
  'Output__size_2',
  'Output__size_3',
  'Output__size_4',
  'Output__size_5',
];
const defaultSize = 2;
const activeColor = 'red';

let U;
if (SpeechSynthesisUtterance) {
  U = new SpeechSynthesisUtterance();
}

function convertTextToSpeech(sklad) {
  if (!sklad || !U) return;
  U.text = sklad;
  speechSynthesis.speak(U);
}

const handleTextClick = (event) => {
  let sklad;
  if (event.target.tagName.toLowerCase() === 'i') {
    sklad = event.target.innerText;
    if (sklad.length === 1) {
      sklad = sklad + 'ъ';
    }
    event.target.style.color = activeColor;
    setTimeout(() => {
      event.target.style.color = 'unset';
    }, 800);
  }
  convertTextToSpeech(sklad);
}

export function Output(props) {
  const { text, fontSize } = props;

  return (
    <div className="Output">
      <div
        className={'Output__sklad-text ' + fontClasses[fontSize ?? defaultSize] }
        dangerouslySetInnerHTML={{ __html: text }}
        onClick={handleTextClick}
      />
    </div>
  );
}

Output.MaxFontSize = fontClasses.length - 1;
Output.MinFontSize = 0;
Output.DefaultFontSize = defaultSize;
