import './styles.css';
import React, { useState } from 'react';

function GamePage() {
  const [name, setName] = useState('circle');
  const startRotation = () => {
    setName('circle rotate-class');

    setTimeout(() => {
      console.log('here');
      setName('circle rotate-class stop-class');
    }, 1000);
  };

  console.log(name);

  return (
    <main>
      <div>
        <div className="arrow"></div>
        <ul className={name}>
          <li>
            <div className="text" contentEditable="true" spellCheck="false">
              1
            </div>
          </li>
          <li>
            <div className="text" contentEditable="true" spellCheck="false">
              2
            </div>
          </li>
          <li>
            <div className="text" contentEditable="true" spellCheck="false">
              3
            </div>
          </li>
          <li>
            <div className="text" contentEditable="true" spellCheck="false">
              4
            </div>
          </li>
        </ul>
        <button className="spin-button" onClick={startRotation}>
          {' '}
          SPIN
        </button>
      </div>
    </main>
  );
}

export default GamePage;
