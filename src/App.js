
import './App.css';
import Login from './login';
import Dashboard from './Dashboard';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Viewlr from './Viewlr';
import RegistrationLrForm from './RegistrationLrForm';
import ChangeStatus from './ChangeStatus';

function App() {
  

  return (
    <div>
       <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/view-details" component={Viewlr} />
        <Route path="/lr-entry" component={RegistrationLrForm} />
        <Route path="/view-lr" component={Viewlr} />
        <Route path="/change-status" component={ChangeStatus} />
      </Switch>
    </Router>
    </div>
    
  );
}

export default App;
