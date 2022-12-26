
import "./App.css";
import Users from "./Component/Users";
import {BrowserRouter,Route,Routes,} from 'react-router-dom'
import Layout from "./Component/Layout";
import EditUser from "./Component/EditUser";
import Deleteuser from "./Component/Deleteuser";
import CreateUser from "./Component/CreateUser";
import Navbar from "./Component/Navbar";
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
