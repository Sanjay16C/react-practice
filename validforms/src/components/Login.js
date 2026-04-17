const Login = ({error,setError,clicked,setClicked,name,setName,email,setEmail
    ,password1,setPassword1,password2,setPassword2
}) => {
    return (
        <div className="login">
            <h1>Enter name</h1> 
            <input
                placeholder="Nameee here"
                type="text"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                required
            />
            <h1>Enter email</h1> 
            <input
                placeholder="email here"
                type="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                required
            />
            <h1>Enter password</h1> 
            <input
                placeholder="pass here"
                type="password"
                value={password1}
                onChange={(e)=>setPassword1(e.target.value)}
                required
            />
            <h1>Re - Enter password</h1> 
            <input
                placeholder="confirm pass here"
                type="password"
                value={password2}
                onChange={(e)=>setPassword2(e.target.value)}
                required
            />
            <p></p>
            <button
                onClick={()=>{
                    if (name === '') {
                    setError(1);
                    } else if (!email.includes('@')) {
                    setError(2);
                    } else if (password1.length < 6) {
                    setError(3);
                    } else if (password2.length === 0) {
                    setError(4);
                    } else if (password1 !== password2) {
                    setError(5);
                    } else {
                    setError(0); 
                    }
                    setClicked(true);
                }}
            >Submit the form</button>

        </div>
        

     );
}
 
export default Login;