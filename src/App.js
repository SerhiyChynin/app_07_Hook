import './App.css';
import React, { useState } from 'react';
import useInput from './Hooks/useInput';

function App() {
  const userName = useInput();
  const password = useInput();


  
  // const [value, setValue] = useState();
  // const onChange = e => {
  //   setValue(e.target.value)
  // }
  
  return (
    <div>
      <input {...userName} type="text" placeholder='Username'  />
      <input {...password} type="text"  placeholder='Password '/>
       <button onClick={() =>console.log(userName.value, password.value)}>Click</button>
       
    </div> 
  );
}

export default App;
