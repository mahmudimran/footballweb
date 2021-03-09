import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import League from './components/League/League';

function App() {
  const [leagues,setLeagues ] = useState([])
  useEffect(()=>{
    const url = `https://www.thesportsdb.com/api/v1/json/1/all_leagues.php`
    fetch(url)
    .then(res=>res.json())
    .then(data =>setLeagues(data.leagues))
  },[])
  return (
    
    <div className="App">
      <h3>Leagues {leagues.length}</h3>
      {
        leagues.map(league=><League league={league}></League>)
      }
    </div>
  );
}

export default App;
