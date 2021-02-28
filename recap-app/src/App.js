import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {

  const heros = [{name: 'Ziaur Rahman', age:45}, {name:"Major Jalil", age:50}, {name:"Ataul Goni Usmani", age:65}, {name:"Rafiqul Islam", age:68}]

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <BookCounter></BookCounter>
        {
          heros.map(hero =>  <Hero name = {hero.name} age = {hero.age}></Hero> )
         
        }

      </header>
    </div>
  );
}
// BookCounter
function BookCounter(){
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count+ 1)} >Add Books</button>
      <button onClick={() => (count >=1) ? setCount(count - 1): setCount(0)} >Remove Books</button>
      <h4>Number of Books: {count}</h4>
      <BookBought books = {count}></BookBought>
      <BookBought books = {count + 3}></BookBought>
    </div>
  )
}

function BookBought(prop){
  return (
    <h2>So far I have Read {prop.books} Book(s)</h2>
  ) 
}

// Hero
function Hero(prop) {
  const style = {
    border: '1px dotted purple',
    padding: '15px',
    margin: '10px',
    background: "purple",
    maxWidth: "300px"
  }

  return (
    <div style={style}>
      <h3><i>{prop.name}</i></h3>
      <p>Died at the age of {prop.age}</p>
    </div>

  )
}

export default App;
