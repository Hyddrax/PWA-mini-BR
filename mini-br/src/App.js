import './App.css';
import { BrowserRouter as Router, Redirect, Switch, Route } from 'react-router-dom';
import Accueil from './Accueil'
import Game from './Game'

function App() {
  return (
    <div className="app">
      <div className="App__content">
        < Router >
          <Switch>
            <Route exact path='/' component={Accueil} />
            <Route exact path='/Game/:gameId' component={Game} />
            <Redirect from="*" exact to="/" />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
