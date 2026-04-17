import './App.css';
import { useState } from 'react';
function App() {

  const [name,setName] = useState('Sanjay');

  return (
    <div className="App">
      <h1>Dynamic Greeting</h1>
      <div className="container">
        <p>Enter Your Name</p>
        <input 
            value={name}
            placeholder="Enter your name"
            onChange={(e)=>setName(e.target.value)}
        /> 
        <p></p>
        <h2>Hello, {name}</h2>
      </div>
    </div>
  );
}

export default App;
