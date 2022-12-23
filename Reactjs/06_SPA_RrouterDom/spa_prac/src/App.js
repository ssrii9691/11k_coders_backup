
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

import './App.css';
import Features from './components/Features';
import Home from './components/Home';
import NavBar from './components/NavBar';

import NoMatch from './components/NoMatch';
import Pricing from './components/Pricing';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/features' element={<Features/>}/>
        <Route path='/Pricing' element={<Pricing/>}/>
        <Route path="*" element={<NoMatch/>} />

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
