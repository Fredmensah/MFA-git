import welcome from './welcome.svg';
import './App.css';

function App() {
  return (
    <div className="app">
      <h1 class="welcome">Welcome to this lecture</h1>
      <img src={welcome} className="box bounce-7" alt="logo" />

      <p class="headline">Learn something cool today</p>
    </div>
  );
}

export default App;
