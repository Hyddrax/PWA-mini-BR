import './App.css';
import { BrowserRouter as Router, Redirect, Switch, Route } from 'react-router-dom';
import Accueil from './Accueil'
import Game from './Game'
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="app">
      <Toaster
        position="bottom-right"
        reverseOrder={true}
      />
      < Router >
        <Switch>
          <Route exact path='/' component={Accueil} />
          <Route exact path='/Game/:gameId' component={Game} />
          <Redirect from="*" exact to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
