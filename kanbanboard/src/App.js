import { useState } from 'react';
import './App.css';
import Modal from "./components/modal.js";
import Board from './components/board.js';

function App() {
  const [tasks,setTasks] = useState([{id:1,title:"To build",status:"todo"},
    {id:2,title:"To craft",status:"inprogress"}
  ]);
  const [title,setTitle] = useState("");
  const [modal,setModal] = useState(false);
  const todoT = tasks.filter(ele=>ele.status==="todo");
  const ipT = tasks.filter(ele=>ele.status==="inprogress");
  const doneT= tasks.filter(ele=>ele.status==="done");
  const [dragID,setdragID] = useState(null);
  
  const handleDragStart = (e,id) =>{
    setdragID(id);
  }
  const handleDrop = (e,status) =>{
        const updated = tasks.map((each,index)=>{
          if(each.id===dragID){
            return {...each,status:status}
          }
          return each;
        })
        setTasks(updated);
    }

  return (
    <div className="App">
        <h1>Kanban board</h1>
        <button onClick={()=>setModal(true)}>Add Todo Task</button>
        {modal && <Modal setTitle={setTitle} setModal={setModal} setTasks={setTasks} tasks={tasks} title={title} />}
        <div className="whole">
            <Board status={"todo"} list={todoT} tasks={tasks} setTasks={setTasks} handleDrop={handleDrop} handleDragStart={handleDragStart} />
            <Board status={"inprogress"} list={ipT} tasks={tasks} setTasks={setTasks} handleDrop={handleDrop} handleDragStart={handleDragStart} />
            <Board status={"done"} list={doneT} tasks={tasks} setTasks={setTasks} handleDrop={handleDrop} handleDragStart={handleDragStart} />
        </div>
        
    </div>
  );
}

export default App;
