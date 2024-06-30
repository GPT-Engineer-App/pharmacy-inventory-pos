import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Inventory from "./pages/Inventory.jsx";
import POS from "./pages/POS.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/inventory" element={<Inventory />} />
        <Route exact path="/pos" element={<POS />} />
      </Routes>
    </Router>
  );
}

export default App;