import './App.css';
import UserCard from './components/UserCard.js';

function App() {

  const users = [{name:'Sanjay',email:'sanjay@gmail.com',role:'wise'}, 
    {name:'Sachin',email:'sachinoffl@gmail.com',role:'dumb'},
    {name:'Bob',email:'beachboboffl@gmail.com',role:'wanderer'},
    {name:'Bob',email:'beachboboffl@gmail.com',role:'wanderer'},
    {name:'Bob',email:'beachboboffl@gmail.com',role:'wanderer'},
    {name:'Bob',email:'beachboboffl@gmail.com',role:'wanderer'}
  ];


  return (
    <div className="App">
      <div className="card">
          <h1>UserCards</h1>
          <UserCard users={users} />
      </div>
      
    </div>
  );
}

export default App;
