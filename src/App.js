import './App.css';
import React, { useState, useRef } from 'react';
import useInput from './Hooks/useInput';
import Hover from './Components/Hover';
import useHover from './Hooks/useHover';

function App() {
  const userName = useInput();
  const password = useInput();
  const ref = useRef();
  const isBlueHovering = useHover(ref); 

  
  // const [value, setValue] = useState();
  // const onChange = e => {
  //   setValue(e.target.value)
  // }
  
  return (
    <div>
      <input {...userName} type="text" placeholder='Username'  />
      <input {...password} type="text"  placeholder='Password '/>
      <button onClick={() => console.log(userName.value, password.value)}>Click</button>
      <Hover />
         <div ref={ref} style={{width: 300, height: 300, background: isBlueHovering ? 'orange' : 'blue', margin: 20,}}></div>
       
    </div> 
  );
}

export default App;
