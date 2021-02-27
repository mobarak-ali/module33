import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Hero></Hero>
        <Hero></Hero>
        <Hero></Hero>
        <Hero></Hero>
        <Hero></Hero>

      </header>
    </div>
  );
}

// Hero
function Hero() {
  const style = {
    border: '1px dotted purple',
    padding: '15px',
    margin: '10px',
    background: "purple"
  }

  return (
    <div style={style}>
      <h1>Hello! I'm {}, one of your fevourite Hreos!</h1>
      <p>I have here for almost {} years.</p>
    </div>

  )
}

export default App;
