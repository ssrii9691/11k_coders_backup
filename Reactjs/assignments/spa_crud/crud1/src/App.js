
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import LayOut from "./components/LayOut";
import UserTh from "./components/UserTh";
import Edit from "./components/Edit";
import Delete from "./components/Delete";
import Create from "./components/Create";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route index element={<UserTh />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/delete/:id" element={<Delete />} />
          <Route path="/create" element={<Create />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
