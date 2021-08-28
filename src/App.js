import './App.css';
import Uno from './components/Uno';
import Dos from './components/Dos';
import Tres from './components/Tres';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import { Toolbar, AppBar, Typography, Button } from '@material-ui/core';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

function App() {
  return (
    <Router>
      <AppBar position="static" style={{ background: "lightgoldenrodyellow" }}>
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <Link to="/">
          <NavigateBeforeIcon/>
          </Link>
          <Link to="/dos">
          <NavigateNextIcon/>
          </Link>
        </Toolbar>
      </AppBar>
      <div className="App">
        <Route path="/dos">
           <Dos/>
        </Route>
        <Route path="/">
           <Uno/>
        </Route>
      </div>
    </Router>
  );
}

export default App;

