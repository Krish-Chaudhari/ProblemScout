import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Login from './pages/Login.jsx'
// import Signup from './pages/Signup.jsx'
import CreateReport from './pages/CreateReport.jsx'

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <hr></hr>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} /> 
        {/* <Route path="/signup" element={<Signup />} /> */}
        <Route path="/reportProblem" element={<CreateReport />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App
