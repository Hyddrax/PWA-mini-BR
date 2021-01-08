import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Accueil from './Accueil'

function App() {
  return (
    <div className="app">
      <div className="App__content">
        < Router >
          <Switch>
            <Route exact path='/' component={Accueil} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
