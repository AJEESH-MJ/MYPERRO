import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Footer, Navbar } from './components/index';
import { About, Contact, Homepage, SignIn, SignUp } from './pages';

function App() {
  const homeRoute = process.env.PUBLIC_URL;

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path={`${homeRoute}/`} element={<Homepage />} />
        <Route path={'/about'} element={<About />} />
        <Route path={'/contact'} element={<Contact />} />
        <Route path={'/signin'} element={<SignIn />} />
        <Route path={'/signup'} element={<SignUp />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
