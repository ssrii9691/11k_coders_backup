
import { useState } from 'react';
import './App.css';
import { ContextProvider } from './component/Context';
import Main from './component/Main';

function App() {
  const[user,setuser]=useState(["sai","arun","sri"])
  return (
   <ContextProvider value={user}>
           <Main/>
   </ContextProvider>
  );
}

export default App;
