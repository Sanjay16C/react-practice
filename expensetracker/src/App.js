import { useState } from 'react';
import './App.css';
import List from './components/List';

function App() {

  const [exp,setExp] = useState([{title:"Food",price:500},{title:"Petrol",price:200}]);
  const [title,setTitle] = useState('');
  const [price,setPrice] = useState(0);
  
  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <List exp={exp} setExp={setExp} title={title} setTitle={setTitle} price={price} setPrice={setPrice}  />;
    </div>
  );
}

export default App;
