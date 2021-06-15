import './App.css';
import {GlobalStyle} from './globalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Skills from './pages/Skills/Skills';
import Yo from './pages/Yo/Yo.jsx';

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Switch >
        <Route path="/" exact component={Yo} />
        <Route path="/skills" excat component={Skills} />
      </Switch>
    </Router>
  );
}

export default App;

