import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Error from './pages/Error';
import Work from './pages/Work';
import References from './pages/References';
import Navbar from './Navbar';

function App() {
  return (
    <main className="App">
      <Navbar/>
      <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/work" component={Work} />
          <Route path="/references" component={References} />
          <Route component={Error} />
      </Switch>
     </main>
  );
}

export default App;
