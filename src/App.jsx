import React, { useState, useEffect } from 'react';
import './App.css'

function App() {
  const [colors, setColors] = useState([]);
  const [selectedColor, setSelectedColor] = useState(null);
  const [feedback, setFeedback] = useState('');
  const boxStyle = { width: '100px', height: '100px', margin: 'auto', backgroundColor: selectedColor }
  const generateRandomHex = () => {
    const letters = "0123456789abcdef";
    let colorHex = '#';
    let count = 0;
    while (count < 6) {
      let randomIndex = Math.floor(Math.random() * (letters.length));
      colorHex += letters[randomIndex];
      count++;
    }
    return colorHex;
  }
  const handleClick = (e) => {
    const color = e.target.textContent;
    if (color === selectedColor) {
      setFeedback('Correct!');
    } else {
      setFeedback('Sorry, Try again!');
    }

  }
  useEffect(() => {
    const randomColors = [generateRandomHex(), generateRandomHex(), generateRandomHex()];
    setColors(randomColors);
    let randomIndex = Math.floor(Math.random() * 3);
    setSelectedColor(randomColors[randomIndex]);
  }, []);
  if (selectedColor) {
    return (
      <React.Fragment>
        <div style={boxStyle}></div>
        {colors.map((color, i) => <button onClick={handleClick} key={i}>{color}</button>
        )}
        <p>{feedback}</p>
      </React.Fragment>
    )
  }
}

export default App
