import './styles.css';
import React, { useState } from 'react';

function GamePage() {
  const [name, setName] = useState('circle');
  const startRotation = () => {
    setName('circle rotate-class');

    setTimeout(() => {
      console.log('here');
      setName('circle rotate-class stop-class');
    }, 2500);
  };

  console.log(name);

  const [one, setone] = useState('');
  const [two, settwo] = useState('');
  const [three, setthree] = useState('');
  const [four, setfour] = useState('');

  const handleChange = (event) => {
    setone(event.target.value);
    settwo(event.target.value);
    setthree(event.target.value);
    setfour(event.target.value);

    console.log('value is:', event.target.value);
  };

  return (
    <main>
      <div>
        <div className="wheel-Options">
          <input type="text" id="one" name="one" onChange={handleChange} value={one} />
          <input type="text" id="two" name="two" onChange={handleChange} value={two} />
          <input type="text" id="three" name="three" onChange={handleChange} value={three} />
          <input type="text" id="four" name="four" onChange={handleChange} value={four} />
        </div>
        <div className="arrow"></div>
        <ul className={name}>
          <li>
            <div className="text" spellCheck="false">
              <h2>{one}</h2>
            </div>
          </li>
          <li>
            <div className="text" spellCheck="false">
              <h2>{two}</h2>
            </div>
          </li>
          <li>
            <div className="text" spellCheck="false">
              <h2>{three}</h2>
            </div>
          </li>
          <li>
            <div className="text" spellCheck="false">
              <h2>{four}</h2>
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
