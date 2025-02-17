import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./pages/Home";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import About from "./pages/About";
import EventDetails from "./pages/EventDetails";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/eventdetails/:eventId" element={<EventDetails />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
