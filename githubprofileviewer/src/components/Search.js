const Search = (props) => {
    const typed = props.typed;
    const setTyped = props.setTyped;
    const element = props.element;
    const setElement = props.setElement;
    const loading = props.loading;
    const setLoading = props.setLoading;
    

    return ( 
        <div className="search">
            <input 
            placeholder="Enter username"
            value={typed}
            onChange={(e)=>setTyped(e.target.value)}
            />
            <button
                onClick={()=>{
                    setElement(typed);
                    
                }}
            >Search</button>
        </div>
     );
}
 
export default Search;
