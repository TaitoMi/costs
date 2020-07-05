import React from 'react';
import { Title } from './components/my-title/my-title';
import { Header } from './components/header/Header';
import { Accumulation } from './components/accumulation/Accumulation';
import { Costs } from './components/costs/Costs';
import 'semantic-ui-css/semantic.min.css'
import styles from './styles.module.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

function App() {
  return (
    <div className={styles.app}>
      <Router>
        <Header/>
        <Switch>
          <Route path='/accumulation'>
            <Accumulation />
          </Route>
          <Route path='/costs'>
            <Costs />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
