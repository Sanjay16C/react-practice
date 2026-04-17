import './Sidebar.css'

const Sidebar = ({open}) => {
    return ( 
        <div className={`cont ${open?"open":""}`}>
            <div className="elements">
                <h1>Home</h1>
                <h1>Users</h1>
                <h1>Settings</h1>
            </div>
            
        </div>
     );
}
 
export default Sidebar;
