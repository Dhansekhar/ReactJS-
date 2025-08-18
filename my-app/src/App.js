import logo from './logo.svg';
import './App.css';
import Header from './Header';
import MainCompment from './MainCompment';
import Futer from './futer';

function App() {
  return (
    <div className="App">
      <Header />
      <MainCompment/>
      <Futer/>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hello world 
        </a>
      </header> */}
    </div>
  );
}

export default App;
