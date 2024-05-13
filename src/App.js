import logo from "./logo.svg";
import "./App.css";
import { NavLink, Outlet } from "react-router-dom";
import Navbar from "./Component/Navbar/Navbar";
import Herosection from "./Component/Herosection/Herosection";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Herosection />
    </div>
  );
}

export default App;
