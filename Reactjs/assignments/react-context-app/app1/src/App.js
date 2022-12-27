import logo from './logo.svg';
import './App.css';
import { ContextProvider } from './components/Mycontext';
import React,{ useState } from 'react';
import Main from './components/Main';

function App() {
  const [user,setusers]=useState(["kho-kho","kabaddi","cricket"])
  return (
    <div className="App">
      <ContextProvider value={user}>
           <Main/>
      </ContextProvider>
    </div>
  );
}

export default App;
