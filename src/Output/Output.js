import React from 'react';
import { checkText } from './../utils';
import './Output.css';

const langRu = 'ru-RU';
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
const inactiveColor = 'gray';
const fontFamilyTypes = {
  roboto: 'Output__roboto',
  playfair: 'Output__playfair',
};

let U;
let voices;
let defaultVoiceIndex;

if (SpeechSynthesisUtterance) {
  U = new SpeechSynthesisUtterance();
  speechSynthesis.getVoices();
  speechSynthesis.onvoiceschanged = () => {
    voices = speechSynthesis.getVoices().filter((voice) => voice.lang.includes('ru'));
    defaultVoiceIndex = voices.findIndex(
      (voice) => voice.name === 'Milena',
    );
  }
}

function convertTextToSpeech(sklad) {
  if (!sklad || !U || !voices) return;
  U.text = sklad;
  U.lang = langRu;
  U.voice = voices[defaultVoiceIndex];
  // console.log(' voices -> ', voices);
  speechSynthesis.speak(U);
}

const handleTextClick = (event) => {
  let sklad;
  if (event.target.tagName.toLowerCase() === 'i') {
    sklad = checkText(event.target.innerText);
    event.target.style.color = sklad ? activeColor : inactiveColor;
    setTimeout(() => {
      event.target.style.color = 'unset';
    }, 1000);
  }
  convertTextToSpeech(sklad);
}

export function Output(props) {
  const {
    caps,
    fontFamilyType = fontFamilyTypes.roboto,
    fontSize,
    text,
  } = props;

  return (
    <div className="Output">
      <div
        className={`Output__sklad-text ${fontClasses[fontSize ?? defaultSize]} ${fontFamilyType}  ${caps && 'Output__caps'}`}
        dangerouslySetInnerHTML={{ __html: text }}
        onClick={handleTextClick}
      />
    </div>
  );
}

Output.MaxFontSize = fontClasses.length - 1;
Output.MinFontSize = 0;
Output.DefaultFontSize = defaultSize;
Output.fontFamilyTypes = fontFamilyTypes;
