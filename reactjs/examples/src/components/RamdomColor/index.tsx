import { useState } from 'react';
import useRandomColor from "../RamdomColor/RamdomColor";
 const index = () => {
  const [count, setCount] = useState(0);
  const {color, generateRandomColor} = useRandomColor();

  const handleButtonClick = () => {
    setCount(count + 1);
    index();
  };

  return (
    <>
     <div>
      <p>You clicked the button {count} times</p>
      <button onClick={handleButtonClick}>Click me</button>
      <div style={{ backgroundColor: color, width: '100px', height: '100px' }}></div>
    </div>
    </>
   
  );
};
export default index();