
import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks=['sakib khan', 'Jafor Ikbal', 'rajjak', 'alamgir']
  return (
    <div className="App">
      <Nayok name={nayoks[1]} age='56'></Nayok>
      <Nayok name={nayoks[0]}></Nayok>
      <Nayok name={nayoks[2]}></Nayok>
      <Nayok name={nayoks[3]}></Nayok>
      <MovieCounter></MovieCounter>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
     
      </header>
    </div>
  );
}

function Nayok(props){
  return(<div style={{color:'red', border:'2px solid blue'}}>
    <h1>Ami naayok: {props.name}</h1>
    <h3>i have done 5 movies in {props.age || 30}years</h3>
    
  </div>)
}
function MovieCounter(){
  let [count, setCount] = useState(1);
  const handleClick=()=>setCount(count+1);
  return(
    <div>
      <button onClick={handleClick}>ADD Movie</button>
      <h3>Total Number of movies :{count}</h3>
      <MovieDisplay movies={count}></MovieDisplay>
    </div>
  )
}
function MovieDisplay(props){
  return(<h3>Movies i have Acteed :{props.movies}</h3>)
}

export default App;
