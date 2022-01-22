
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from './Pages/Payment';

// import AppContext from './Contexts/context';



function App() {
  return (
    <Router>
          <Switch>
              <Route path="/" exact component={Login} />
          </Switch>
    </Router>
  );
}

export default App;