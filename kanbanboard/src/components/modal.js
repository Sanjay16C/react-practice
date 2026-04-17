import './modal.css';

const Modal = ({setTitle,setModal,setTasks,tasks,title}) => {
    return ( 
        <div className="overlay">
            <div className="add">
                <h3>Enter Todo task title</h3>
                <input
                    placeholder='Enter the task' 
                    onChange={(e)=>setTitle(e.target.value)}
                />
                <button onClick={()=>{
                    setModal(false)
                    if(title.trim()==='') return;
                    setTasks([...tasks,{
                        id:Date.now(),
                        title:title,
                        status:"todo"
                    }])
                    setTitle('');
                }
                }>Add</button>
                <button onClick={()=>setModal(false)}>Close</button>
            </div>
        </div>
     );
}
 
export default Modal;