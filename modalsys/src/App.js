import { useState } from 'react';
import './App.css';
import Login from './components/Login';

function App() {

  const [isopen,setisopen] = useState(false);

  return (
    <div className={`App ${isopen}`}>
      
          <h1>Modal System</h1>
          <button
            onClick={()=>setisopen(true)}
          >Login</button>
      
      
      {isopen && <Login isopen={isopen} setisopen={setisopen}/>}
    </div>
  );
}

export default App;
