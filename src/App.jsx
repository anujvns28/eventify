import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from './pages/Home'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import About from "./pages/About";
import EventDetails from "./pages/EventDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/eventdetails" element={<EventDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
