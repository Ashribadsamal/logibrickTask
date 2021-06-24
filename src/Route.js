import React from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import App from './App';
import Materialbutoon from './Materialbutoon';

function Routes() {
    return (
        
            <Router>
         <div>
          <Switch>
          <Route  path = "/" exact component={Materialbutoon}/>
          <Route path = "/switch" component={App}/>
          </Switch>
         </div>
      </Router>
    )
}

export default Routes
