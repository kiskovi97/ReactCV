import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Error from './pages/Error';
import Work from './pages/Work';
import References from './pages/References';
import Navbar from './Navbar';

function App() {
  return (
    <main className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={Home}  />
        <Route exact path="/about" element={About} />
        <Route exact path="/work" element={Work} />
        <Route exact path="/references" element={References} />
        <Route element={Error} />
      </Routes>
    </main>
  );
}

export default App;
