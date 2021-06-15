import './App.css';
import GlobalStyles from './globalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Skills from './pages/Skills/Skills';
import Yo from './pages/Yo/Yo';

function App() {
  return (
    <div className="App">
      <Router>
      <GlobalStyles />
      <switch>
        <Route path="/yo" exact components={Yo} /></switch>
      <switch>
        <Route path="/skills" exact components={Skills} />
      </switch>

      </Router>
      
      
    </div>
  );
}

export default App;
