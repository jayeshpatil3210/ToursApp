import "./App.css";
import LogIn from "./components/nav-links/LogIn";
import Register from "./components/nav-links/Register";
import Tours from "./components/nav-links/Tours";
import Routing from "./components/routes/Routing";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Routing />}/>
        <Route path="/tours" element={<Tours/>}/>
        <Route path="/login" element={<LogIn/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </div>
  );
}

export default App;
