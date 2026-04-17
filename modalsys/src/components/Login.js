import './Login.css';

const Login = ({isopen,setisopen}) => {
    return ( 
        <div className="overlay">
            <div className="login">
                <h4>Enter email</h4>
                <input id="i" />
                <h4>Enter password</h4>
                <input id="i"/>
                <br></br>
                <button
                    onClick={()=>setisopen(false)}
                >CLose</button>
            </div>
        </div>
        
     );
}
 
export default Login;