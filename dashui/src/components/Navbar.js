import './Navbar.css';

const Navbar = ({toggleSidebar}) => {
    return ( 
        <div className="nav">
                <button onClick={toggleSidebar}>☰</button>
                <h1>Get Elevated</h1>
                <button>USER</button>
           
            
        </div>
     );
}
 
export default Navbar;
