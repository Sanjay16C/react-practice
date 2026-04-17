import './board.css';
const Board = ({status,list,tasks,setTasks,handleDrop,handleDragStart}) => {
    

    return ( 
        <div className="board"
                onDragOver={(e)=>e.preventDefault()}
                onDrop={(e)=>handleDrop(e,status)}
        >
            <h2>{status.toUpperCase()}</h2>
            {
                list && list.map((each)=>(
                    <div className="task"
                        key={each.id}
                        draggable={true}
                        onDragStart={(e)=>handleDragStart(e,each.id)}
                    >
                        <h3 id="title">{each.title}</h3>
                        <button id="btn"
                                onClick={()=>setTasks(
                                    tasks.filter(ele=>ele.id!==each.id)
                                )}
                        >Delete</button>
                    </div>
                    
                ))
            }

        </div>
     );
}
 
export default Board;