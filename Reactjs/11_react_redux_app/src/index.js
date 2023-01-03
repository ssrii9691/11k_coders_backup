import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import {createStore} from 'redux'
const root = ReactDOM.createRoot(document.getElementById('root'));

const defaultstate={
  employees:["hardik","rohit","kohli","sky"],
  users:[],
  makers:[]
}

const reducer=(state=defaultstate,action)=>{
  switch (action.type) {
    case "addemployee":
      let newemployee=[...state.employees]
      newemployee.push(action.paload)
      return {...state,employees:newemployee}
    case "deleteemployee":
      let updateemployee=state.employees.filter((emp)=>emp!==action.paload)
      return{...state,employees:updateemployee}
  
    default:
     return state
  }
}

const store=createStore(reducer)
root.render(
  <React.StrictMode>
   <Provider store={store}>
   <App />
   </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
