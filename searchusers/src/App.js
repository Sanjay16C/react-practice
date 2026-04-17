import './App.css';
import { useEffect } from 'react';
import { useState } from 'react';
import Search from './components/search';
import EachUser from './components/eachuser';

function App() {

  const url = 'https://jsonplaceholder.typicode.com/users';
  const [users,changeUsers] = useState([]);
  const [loading,setLoading] = useState(true);
  const [typed,setTyped] = useState('');
  const filteredUsers = users.filter(
      user => user.name.toLowerCase().includes(typed.toLowerCase())
  );

   
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
      <h1>Search Users</h1>
      
      {loading?<h1>Loading...</h1> : <Search users={users}  typed={typed} setTyped={setTyped} filteredUsers={filteredUsers}/>}
      { filteredUsers.map((user,index)=>(
        <EachUser key={user.id} user={user} index={index}/>
      ))}
    </div>
  );
}

export default App;
