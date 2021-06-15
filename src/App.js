import './App.css';
import {GlobalStyle} from './globalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Skills from './pages/Skills/Skills';
import Yo from './pages/Yo/Yo.jsx';
import Foto from './pages/Foto/Foto';
import Study from './pages/Study/Study';
import Experience from './pages/Experience/Experience';

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Switch >
        <Route path="/" exact component={Foto} />
        <Route path="/yo" exact component={Yo} />
        <Route path="/skills" excat component={Skills} />
        <Route path="/estudios" excat component={Study} />
        <Route path="/experiencia" excat component={Experience} />
      </Switch>
    </Router>
  );
}

export default App;

