import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const App = () => {
  return(
    <div className="font-poppins">
      <Navbar />
      <Hero/>
      <Footer />
    </div>
  );
};

export default App;















/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/
