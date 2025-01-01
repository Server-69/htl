
import "./App.css";
import Veg from "./Veg";
import NonVeg from "./Nonveg";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/veg" element={<Veg />} />
        <Route path="/nonveg" element={<NonVeg />} />
      </Routes>
    </Router>
  );
}

export default App;
