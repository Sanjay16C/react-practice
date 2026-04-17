import './Modal.css';
const Modal = ({cust,setCust,setModal,name,email,setName,setEmail}) => {
    return ( 
        <div className="overlay">
            <div className="modal">

                <h3>Enter Name</h3>
                <input
                    onChange={(e)=>setName(e.target.value)}
                />
                <h3>Enter Email</h3>
                <input 
                    onChange={(e)=>setEmail(e.target.value)}
                />
                <button 
                    onClick={()=>{
                          setCust([...cust,{
                            id:Date.now(),
                            Name:name,
                            Email:email
                          }
                        ])
                        setModal(false)
                    }}
                >ADD</button>
            </div>
        </div>
        
     );
}
 
export default Modal;
