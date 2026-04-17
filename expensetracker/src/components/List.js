import Each from "./Each";

const List = ({exp,setExp,title,setTitle,price,setPrice}) => {
    const total = exp.reduce((sum,item)=>sum+item.price,0);

    return ( 
    <div className="list">
        <h1>Enter title</h1>
        <input 
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
        />
        <h1>Enter Price</h1>
        <input 
            value={price}
            onChange={(e)=>setPrice(Number(e.target.value))}
        />
        <button
            onClick={()=>setExp([...exp,{title:title,price:price}])}
        >Add the expense</button>

        {
            exp.map((ex,index)=>(
                <Each ex={ex} index={index} key={index}/>
            ))
        }
    
        <h1>Total:{total}</h1>

       
    </div> 
    );
}
 
export default List;