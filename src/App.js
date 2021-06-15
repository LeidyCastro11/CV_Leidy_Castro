import './App.css';
import {GlobalStyle} from './globalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Skills from './pages/Skills/Skills';
import Yo from './pages/Yo/Yo';

function App() {
  return (
  
      <Router>
      <GlobalStyle />
      <Switch>
        
      <Route path="/" exact components={Yo} />
      <Route path="/skills" exact components={Skills} />
      </Switch>

      </Router>
      
  );
}

export default App;
