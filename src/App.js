import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Tickets from './components/Tickets';
import Movies from './components/Movies';

function App() {
  return (
    <div className="App">
 
    <Navbar />
    <Home />
    <Tickets />
    <Movies />
    </div>
  );
}

export default App;
