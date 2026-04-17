import Login from './components/Login';
import './App.css';
import { useState } from 'react';

function App() {

  const [error,setError] = useState(0);
  const [clicked,setClicked] = useState(false);
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password1,setPassword1] = useState('');
  const [password2,setPassword2] = useState('');

  return (
    <div className="App">
      <h1> Login Form</h1>
      <Login error={error} setError={setError} clicked={clicked} setClicked={setClicked}
        name={name} setName={setName} email={email} setEmail={setEmail}
        password1={password1} setPassword1={setPassword1}
        password2={password2} setPassword2={setPassword2}
      />
      {clicked && (error ?
      <>
      {error===1 && <h1>Name is Empty</h1>}
      {error===2 && <h1>Email is not Appropriate</h1>}
      {error===3 && <h1>Password is too short</h1>}
      {error===4 && <h1>Confirm password must be filled</h1>}
      {error===5 && <h1>Confirm password does n t match Password</h1>}
      </>
      : <h1>Submitted Successfully BRUH</h1>)
      }

    
    </div>
  );
}

export default App;
