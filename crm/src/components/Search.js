const Search = ({setEle,cust,ele}) => {
    return ( 
        <div className="search">
            <h3>Enter Name of customer to search</h3>
            <input
                type="text"
                onChange={(e)=>setEle(e.target.value)}
            />
        </div>
     );
}

export default Search;