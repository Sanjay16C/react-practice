import './EachCard.css';

const EachCard = (props) => {

    const card = props.user;

    return ( 
        
        <div className="eachcard">
            <h1>{card.name}</h1>
            <h2>{card.email}</h2>
            <h3>{card.role}</h3>
        </div>

     );
}
 
export default EachCard;