import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import MainPage from './components/MainPage';
import { useEffect, useState } from 'react';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={
            isAuthenticated ? (
              <Navigate to='/home' />
            ) : (
              <Login setIsAuthenticated={setIsAuthenticated} />
            )
          }
        />
        <Route
          path='/signup'
          element={<Signup setIsAuthenticated={setIsAuthenticated} />}
        />
        <Route
          path='/home'
          element={
            isAuthenticated ? (
              <MainPage handleLogout={handleLogout} />
            ) : (
              <Navigate to='/' />
            )
          }
        />
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </Router>
  );
}

export default App;
