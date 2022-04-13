import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Company from './components/pages/Company';
import NewProject from './components/pages/NewProject';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
         <link to="/">Home</link>
         <link to="/contact">Company</link>
         <link to="/company">Contact</link>
         <link to="/newproject">New Project</link>
        </div>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/company">
            <Company/>
          </Route>
          <Route exact path="/contact">
            <Contact/>
          </Route>
          <Route exact path="/newproject">
            <NewProject/>
          </Route>
        </Switch>
        <p>Footer</p>
      </Router>
    </div>
  );
}

export default App;
