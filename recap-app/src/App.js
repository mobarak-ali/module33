import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {

  const heros = ['Ziaur Rahman', "Major Jalil", 'Ataul Goni Usmani', "Rafiqul Islam"]

  return (
    <div className="App">
      <header className="App-header">
        <BookCounter></BookCounter>
        <img src={logo} className="App-logo" alt="logo" />
        <Hero name ="Ziaur Rahman"></Hero>
        <Hero name = {heros[1]}></Hero>
        <Hero name = {heros[2]}></Hero>
        <Hero name = {heros[3]}></Hero>
        <Hero name = {heros[4]}></Hero>

      </header>
    </div>
  );
}
// BookCounter
function BookCounter(){
  const [count, setCount] = useState(0)
  return (
    <div>
      <button onClick={() => setCount(count+ 1)} >Add Books</button>
      <button onClick={() => (count >=1) ? setCount(count - 1): setCount(0)} >Remove Books</button>
      <h4>Number of Books: {count}</h4>
      <BookBought books = {count}></BookBought>
    </div>
  )
}

function BookBought(prop){
  return (
    <h2>Books I have Read {prop.count}</h2>
  ) 
}

// Hero
function Hero(prop) {
  const style = {
    border: '1px dotted purple',
    padding: '15px',
    margin: '10px',
    background: "purple"
  }

  return (
    <div style={style}>
      <h3>Hello! I'm Sector Commander {prop.name}!</h3>
      <p>I was in charge of Sector {} during our independant war.</p>
    </div>

  )
}

export default App;
