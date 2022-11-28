import { useState, useEffect } from "react";
import './App.css';
import Profile from './Profile';

function App() {



  
  const [items, setItems] = useState([]); 
  // Get users without input 

const data = ['fabpot']
  
const mainStyle = {
  fontSize: '2.5rem',
  color: '#000',
  display: 'block',
  margin: '20px 40px 0 40px',
}

const [user] = useState(data);

  useEffect(() => { 

    const fetchUsers = async () => {
      const res = await fetch(`https://api.github.com/users/${user}/repos`);
      const data = await res.json();
      setItems(data);
  }
  fetchUsers();
  }, [user]);


  return (
      <>
        <h1 style={mainStyle}> GitHub App </h1>   
        {items.slice(0,1).map((item) => ( 
          <Profile key={item.id} {...item} />
        ))}

          
        
      </>
      
      );

};

export default App;
