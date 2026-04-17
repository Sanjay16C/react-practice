import './eachuser.css';

const EachUser = (props) => {
    const user = props.user;
    const index = props.index;

    return ( 
        <div className="user">
            {/* <p>{user.id}</p> */}
            <h1>{user.name}</h1>
            <p>Username : {user.username}</p>
            <p>Email : {user.email}</p>
            <p>PhoneNumber : {user.phone}</p>
            <p>Website : {user.website}</p>
            <b>Company Details</b>
            <p>Name : {user.company.name}</p>
            <p>{user.company.catchPhrase}</p>
            <p>{user.company.bs}</p>

            <b>Address</b>
            <p>{user.address.street}</p>
            <p>{user.address.city}</p>
            <p>{user.address.zipcode}</p>

            
        </div>
     );
}
 
export default EachUser
