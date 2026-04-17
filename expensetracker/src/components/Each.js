import './each.css'
const Each = ({ex}) => {
    return ( 
        <div className="each">
            <h1>{ex.title}</h1>
            <h1>{ex.price}</h1>
        </div>
     );
}
 
export default Each;