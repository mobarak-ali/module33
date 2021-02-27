import logo from './logo.svg';
import './App.css';

function App() {

  const heros = ['Ziaur Rahman', "Major Jalil", 'Ataul Goni Usmani', "Rafiqul Islam"]

  return (
    <div className="App">
      <header className="App-header">
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
      <h1>Hello! I'm Sector Commander {prop.name}!</h1>
      <p>I was in charge of Sector {} during our independant war.</p>
    </div>

  )
}

export default App;
