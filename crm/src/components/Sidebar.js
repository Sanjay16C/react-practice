//import './Sidebar.css';

const Add = ({setModal}) => {
    return ( 
        <div className="add">
            <button onClick={()=>setModal(true)}>Add Customer</button>
        </div>
     );
}
 
export default Add;