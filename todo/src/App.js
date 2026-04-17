import './App.css';
import InputBox from './components/InputBox';
import TodoList from './components/TodoList';
import { useState } from 'react';


function App() {

  const [tasks,changeTask] = useState([{text:'Wake up early morning',completed:false}]);
  const [typed,changeTyped] = useState('');
 
  const toggleTask = (index) =>{
    changeTask(curr => 
        curr.map((task,i)=>
          i===index ? {...task, completed: !task.completed} : task
    ));
  }

  const deleteTask = (index) =>{
    changeTask(curr=> curr.filter((_,i)=> i!==index ));
  }
  

  return (
    <div className="App">
      <h1>ToDo for Everything</h1>
      <InputBox tasks={tasks} typed={typed} changeTask={changeTask} changeTyped={changeTyped}/>
      <TodoList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} />
   
      
    </div>
  );
}

export default App;
