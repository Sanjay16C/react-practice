import Main from './components/Main';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import './App.css';
import { useState } from 'react';

function App() {

  const [open,setOpen] = useState(false);
  return (
    <div className="App">
      <Sidebar open={open}/>
      <div className="main-area">
         <Navbar  toggleSidebar={()=>setOpen(!open)}/>
         <Main/>
      </div>
      
      
    </div>
  );
}

export default App;
