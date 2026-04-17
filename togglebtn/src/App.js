import './App.css';
import { useState } from 'react';
function App() {

  const [state,changeState] = useState('light');

  return (
    <div className={`App ${state}`}>
     
        <h1>Toggle Button assignment</h1>
        <h1>Mode : {state}</h1>
        <button id="btn"
                onClick={
                  () => {
                    if(state==='light') changeState('dark')
                    else changeState('light')
                  }
                }  
        >Toggle me</button>
  
    </div>
  );
}

export default App;
