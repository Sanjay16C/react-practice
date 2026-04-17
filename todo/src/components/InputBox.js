
const InputBox = (props) => {

    const tasks = props.tasks;
    const typed = props.typed;
    const changeTask = props.changeTask;
    const changeTyped = props.changeTyped;

    return ( 
        <div className="input">
            <h1>InputBox</h1>
            <div className="in">
                <input placeholder="Enter Todo task"
                        value={typed}
                        onChange={(e)=>(changeTyped(e.target.value))}
                />
                <p></p>
                <button id="btn" type="submit" onClick={()=>{
                        if (typed.trim() === '') return;
                        changeTask([...tasks,{text:typed,completed:false}]);
                     
                        changeTyped('');
                }}
                >Add task</button>
                
            </div>
            
            
        </div>
        
    );
}
 
export default InputBox;