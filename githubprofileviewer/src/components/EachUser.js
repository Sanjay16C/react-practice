const EachUser = (props) => {
    
    const user = props.users;

    
    return ( 
        <div className="user">
            <h1>{user.login}</h1>
            <p>{user.name}</p>
            <p>{user.bio}</p>
        </div>
     );
}
 
export default EachUser;