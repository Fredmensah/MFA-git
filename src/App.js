import done from './done.png';
import './App.css';

function App() {
  return (
    <div className="app">
      <h1 class="welcome">Thanks man</h1>
      <img src={done} className="box bounce-7" alt="logo" />

      <p class="headline">We learnt something new</p>
    </div>
  );
}

export default App;
