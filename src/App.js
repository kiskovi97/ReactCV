import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Error from './pages/Error';
import Work from './pages/Work';
import Project from './pages/Project';
import References from './pages/References';
import Navbar from './Navbar';
import ReactGa from 'react-ga';
import { useEffect } from 'react';

function usePageViews() {
    let location = useLocation();
    useEffect(()=> {
      if (!window.GA_INITIALIZED) {
        ReactGa.initialize('UA-166027980-1');
        window.GA_INITIALIZED = true;
      }
      ReactGa.set({ page: location.pathname});
      ReactGa.pageview(location.pathname + location.search);
    }, [location])
}

function App() {
  usePageViews();
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>}  />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/work/*" element={<Work/>} />
        <Route exact path="/project/*" element={<Project/>} />
        <Route exact path="/references" element={<References/>} />
        <Route element={<Error/>} />
      </Routes>
      </div>
  );
}

export default App;
