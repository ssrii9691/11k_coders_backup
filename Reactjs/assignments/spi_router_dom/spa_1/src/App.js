
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Zomato from './components/Zomato';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import MoreInfo from './components/MoreInfo';

function App() {
  return (
    <div className="App">
     
     <BrowserRouter>
     <Navbar/>
      <Routes>
        <Route path='/Zomato' element={<Zomato/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/MoreInfo' element={<MoreInfo/>}/>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
