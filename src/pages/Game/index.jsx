import './styles.css';
import React, { useState } from 'react';

function GamePage() {
  const [name, setName] = useState('circle');
  const [inputs, setInputs] = useState([{ id: 'input1', value: '' }]);

  const startRotation = () => {
    setName('circle rotate-class');
    const randomValue = 1000 + Math.random() * (2000 - 1000);
    console.log(randomValue);
    setTimeout(() => {
      setName('circle rotate-class stop-class');
    }, 1231 + randomValue);
  };

  console.log(name);

  return (
    <main>
      <div>
        <div className="wheel-Options">
          {inputs.map((input) => (
            <input
              key={input.id}
              type="text"
              id={input.id}
              onChange={(e) => {
                const inputsCopy = inputs.splice(0);
                inputsCopy.filter((x) => x.id === input.id)[0].value = e.target.value;
                console.log(inputsCopy);
                setInputs(inputsCopy);
              }}
              value={input.value}
            />
          ))}
          <button
            onClick={() => setInputs([...inputs, { id: `input${inputs.length + 1}`, value: '' }])}>
            Add option
          </button>
        </div>
      </div>
      <div>
        <ul className={name}>
          {inputs.map((input) => (
            <li key={'part' + input.id}>
              <div
                className="text"
                id={`part${input.id}`}
                style={{
                  transform: `rotate(${360 / inputs.length}deg)`,
                  backgroundColor: Math.floor(Math.random() * 16777215).toString(16),
                  width: 360 / inputs.length + '%'
                }}>
                <h2>{input.value}</h2>
              </div>
            </li>
          ))}
        </ul>
        <div className="arrow" id="arrow"></div>

        <button className="spin-button" onClick={startRotation}>
          {' '}
          SPIN
        </button>
      </div>
    </main>
  );
}

export default GamePage;
