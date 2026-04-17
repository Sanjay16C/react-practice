import './App.css';
import { useEffect } from 'react';
import { useState } from 'react';
import EachUser from './components/eachuser';

function App() {

  const url = 'https://jsonplaceholder.typicode.com/users';
  const [users,changeUsers] = useState([]);
  const [loading,setLoading] = useState(true);
   
  
    useEffect(()=>{
    const fetchUser = async() =>{
      const res = await fetch(url);
      const data = await res.json();
      changeUsers(data);
      setLoading(false);
    };
    fetchUser();
    }
    ,[]);
    
    

  return (
    <div className="App">
      <h1>Display Users</h1>
      {/* <h2>{users[0].address.street}</h2> */}
      { loading ? <h1>Loading...</h1> :
        users.map((user,index)=>(
            <EachUser user={user} index={index} key={index} />
        ))
      }
      
      
    </div>
  );
}

export default App;
