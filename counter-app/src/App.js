import './App.css';
import { useState } from 'react';



function App() {

  const [count,setCount] = useState(0);

  return (
    <div className="App">
      <div className="container">
          <h1 className="heading">Press to Count da Maka</h1>
          <h1 id="cnt">{count}</h1>
          <button className="circle-btn" 
                  onClick = {()=>setCount(count+1)}
          >Add</button>
          <button className="circle-btn" 
                  onClick = {()=>{
                    if(count>0){
                      setCount(count-1)
                    }
                  }
                  }
          >Reduce</button>
          <button className="circle-btn"
                  onClick = {()=>setCount(0)}
          >Reset</button>
      </div>
    </div>
  );
}

export default App;
