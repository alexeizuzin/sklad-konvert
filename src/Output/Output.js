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

export function Output(props) {
  const { text, fontSize } = props;

  return (
    <div className="Output">
      <div
        className={'Output__sklad-text ' + fontClasses[fontSize ?? defaultSize] }
        dangerouslySetInnerHTML={{ __html: text }}
      />
    </div>
  );
}

Output.MaxFontSize = fontClasses.length - 1;
Output.MinFontSize = 0;
Output.DefaultFontSize = defaultSize;
