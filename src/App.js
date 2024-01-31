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
        <Route path={`${homeRoute}/about`} element={<About />} />
        <Route path={`${homeRoute}/contact`} element={<Contact />} />
        <Route path={`${homeRoute}/signin`} element={<SignIn />} />
        <Route path={`${homeRoute}/signup`} element={<SignUp />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
