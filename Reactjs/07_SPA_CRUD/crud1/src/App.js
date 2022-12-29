
import "./App.css";
import Users from "./component/Users";
import {BrowserRouter,Route,Routes,} from 'react-router-dom'
import Layout from "./component/Layout";
import EditUser from "./component/EditUser";
import Deleteuser from "./component/Deleteuser";
import CreateUser from "./component/CreateUser";
import Navbar from "./component/Navbar";
function App() {
  return (
    
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Users/>}/>
          <Route path="/edit/:id" element={<EditUser/>}/>
          <Route path="/delete/:id" element={<Deleteuser/>}/>
          <Route path="/create" element={<CreateUser/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
