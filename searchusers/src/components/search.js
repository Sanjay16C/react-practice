
const Search = (props) => {
    
    const element = props.element;
    const setTyped = props.setTyped;
    const setElement = props.setElement;
    const typed = props.typed;

    return ( 
        <div className="user">
            
            <h1>Enter Name of the user</h1>
            <input type='text'
            value={typed}
            onChange={(e)=>setTyped(e.target.value)}
            />
           
            

        </div>
     );
}
 
export default Search;
