import { useState } from 'react';
import './App.css';
import Search from './components/Search';
import EachUser from './components/EachUser';
import { useEffect } from 'react';

function App() {

  
  const [users,setUsers] = useState({});
  const [typed,setTyped] = useState('');
  const [loading,setLoading] = useState(false);
  const [error,setError] = useState(false);
  const [element,setElement] = useState('');
  const url = 'https://api.github.com/users/'+element;
  

  useEffect(()=>{
    const fetchUsers = async() =>{
      if (!element) return;
      setLoading(true);
      setError(false);

      const res = await fetch(url);
      const data = await res.json();
      if(!res.ok){
        setError(true);
        setUsers({});
        setLoading(false);
        return;
      }
      setUsers(data);
      setLoading(false);
    };
    fetchUsers();
  }

  ,[url]);

  

  return (
    <div className="App">
      <h1>Github Profile Viewer</h1>
      <Search typed={typed} setTyped={setTyped} element={element} setElement={setElement} loading={loading} setLoading={setLoading} />
      {error ? <h1>User Not Found</h1> : loading ? <h1>Loading...</h1> : <EachUser users={users} />}
      

    </div>
  );
}

export default App;
