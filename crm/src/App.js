import Search from './components/Search';
import Add from './components/Sidebar';
import './App.css';
import { useState } from 'react';
import List from './components/List';
import Modal from './components/Modal';

function App() {

  const [cust,setCust] = useState([{id:1,Name:"Sanjay",Email:"sanjay@gmail.com"},
    {id:2,Name:"Sachin",Email:"sachin@gmail.com"}]);
  const [modal,setModal] = useState(false);
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');

  const [ele,setEle] = useState('');
  const filtered = cust.filter(val=>
    val.Name.toLowerCase().includes(ele.toLowerCase())
  );
  const delItem = (id) =>{
    setCust(cust.filter(val=>val.id!==id));
  };

  return (
    <div className="App">
     
      <h1>MINI CRM</h1>
      <Search setEle={setEle} cust={cust} ele={ele}/>
      
      <Add setModal={setModal}/>


      {modal && <Modal cust={cust} setCust={setCust} setModal={setModal} name={name} email={email} setName={setName} setEmail={setEmail} /> }

      <List cust={filtered} setcust={setCust} delItem={delItem} />
      
    </div>
  );
}

export default App;
