import TodoItem from './TodoItem';

const TodoList = (props) => {
    const tasks = props.tasks;
    const toggleTask = props.toggleTask;
    const deleteTask = props.deleteTask;
    
    return ( 
        <div className="TodoList">
            <h1>TodoList</h1>
        <div className="task-list">
        {
          tasks.map((task,index)=>{
                return <TodoItem  key={index} task={task} index={index} toggleTask={toggleTask} deleteTask={deleteTask} />
          })  
        }
           
        </div>
        </div>
        

     );
}
 
export default TodoList;