  import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
  import Navbar from './components/Navbar';
  import Home from './sections/Homepage';
  import About from './sections/About';
  import Projects from './sections/Projects';
  import Contact from './sections/Contact';

  function App() {
    return (
      <Router>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />  {/* <-- Add this line */}
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
</Routes>
      </Router>
    );
  }
  export default App;