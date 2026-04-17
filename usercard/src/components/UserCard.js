import EachCard from './EachCard';
import './EachCard.css';

const UserCard = (props) => {

    const users = props.users;

    return ( 
        <div className="Card">
            
            {
                users.map((user,index)=>(
                    <EachCard key={index} user={user} index={index} />
                ))
            }
            
        </div>
        

        
     );
}
 
export default UserCard;
