import { useState } from 'react';

const useRandomColor = () => {
  const [color, setColor] = useState("#000000");

  const generateRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let newColor = "#";
    for (let i = 0; i < 6; i++) {
      newColor += letters[Math.floor(Math.random() * 16)];
    }
    setColor(newColor);
  };

  return {color, generateRandomColor};
};
export default useRandomColor;