import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Footer, Navbar } from './components/index';
import { About, Homepage } from './pages';

function App() {
  return (
    <div className="App">
     <Navbar />
     <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App; 
