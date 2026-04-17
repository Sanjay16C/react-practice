const TodoItem = (props) => {

    const task = props.task;
    const index = props.index;
    const toggleTask = props.toggleTask;
    const deleteTask = props.deleteTask;
    
    return ( 
        <div className="task">
                    
                    <input type="checkbox"
                            checked={task.completed}
                            onChange={()=>toggleTask(index)}
                    />
                    
                    {
                        task.completed? <s>{task.text}</s> : <span>{task.text}</span>
                    }
                    <button
                        onClick={()=>deleteTask(index)}
                    >Delete</button>
        </div>
     );
}
 
export default TodoItem;