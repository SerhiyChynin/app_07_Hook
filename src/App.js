import './App.css';
import React, { useState, useRef } from 'react';
import useInput from './Hooks/useInput';
import Hover from './Components/Hover';
import useHover from './Hooks/useHover';
import { useCallback } from 'react';
import useDebounce from './Hooks/useDebounce';
import search from './Hooks/useDebounce';
// import List from './Components/List';

function App() {
  const userName = useInput();
  const password = useInput();
  const ref = useRef();
  const isBlueHovering = useHover(ref); 
  const [value, setValue] = useState('');
  const debouncedSearch = useDebounce(search, 500);
  function seacrh (query) {
        fetch(`https://jsonplaceholder.typicode.com/todos?query=`+query)
            .then(response => response.json())
            .then(json => {
              console.log(json);
            })   
}
  const onChange = e => {
    setValue(e.target.value)
    debouncedSearch(e.target.value)
  }

  return (
    <div>
      <input {...userName} type="text" placeholder='Username'  />
      <input {...password} type="text"  placeholder='Password '/>
      <button onClick={() => console.log(userName.value, password.value)}>Click</button>
      
      <Hover />
      
      <div ref={ref} style={{ width: 300, height: 300, background: isBlueHovering ? 'orange' : 'blue', margin: 20, }}></div>
        <input style={{margin: 20,}}  type="text" value={value} onChange={onChange} />  
      {/* <List /> */}
         
    </div>  
  );
}

export default App;
