
import './App.css';
import Data from './Components/Data';
import Home from './Home';
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom'

function App() {
  return (
    <Router>

      <div className="App">
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/admin" element = {<Data />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;