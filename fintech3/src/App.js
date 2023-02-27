import './App.css';
import {Routes,Route} from 'react-router-dom'
import Navbar from './components/pages/Navbar';
import Home from './components/pages/Home';
import Personal  from './components/pages/Personal';
import Business from './components/pages/Business';
import About from './components/pages/About';
import LoginButton from './components/pages/LoginButton';
import Dashboard from './components/pages/Dashboard';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/personal" element={<Personal/>}/>
        <Route path="/business" element={<Business/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/loginbutton" element={<LoginButton/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
