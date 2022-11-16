import './styles.css';
import React, { useState } from 'react';

const colors = [
  '#F44336',
  '#FFEBEE',
  '#FFCDD2',
  '#EF9A9A',
  '#E57373',
  '#EF5350',
  '#F44336',
  '#E53935',
  '#D32F2F',
  '#C62828',
  '#B71C1C',
  '#FF8A80',
  '#FF5252',
  '#FF1744',
  '#D50000'
];

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

  console.log(inputs.length / 350);
  return (
    <main className="wheel-container">
      <div className="wheel-wrapper">
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
      <div className="wheel-wrapper-inner">
        <ul className={name}>
          {inputs.map((input, index) => (
            <li
              key={'part' + input.id}
              id={`part${input.id}`}
              style={{
                backgroundColor: colors[index],
                width: '200' + 'px',
                clipPath: `polygon(100% 0, 50% 100%, 0 0)`,
                transform: `rotate(${index * 60}deg)`
              }}>
              {input.value}
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
