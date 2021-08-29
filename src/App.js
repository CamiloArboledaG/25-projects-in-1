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
import { useEffect, useState } from 'react';

function App() {
  const [cont, setCont] = useState(1);
  
  const handleClick = () => {
    setCont(cont + 1);
  };
  const handleClick2 = () => {
    setCont(cont - 1);
  };
  useEffect(() => {
    if(cont<1){
      setCont(3);
    }
    if(cont>3){
      setCont(1);
    }
  })
  

  return (
    <Router>
      <AppBar position="static" style={{ background: "lightgoldenrodyellow" }}>
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <Link to={"/"+cont} onClick={() => handleClick2()}>
          <NavigateBeforeIcon/>
          </Link>
          <Link to={"/"+cont} onClick={() => handleClick()}>
          <NavigateNextIcon/>
          </Link>
        </Toolbar>
      </AppBar>
      <div className="App">
      <Route path="/3">
           <Tres/>
        </Route>
        <Route path="/2">
           <Dos/>
        </Route>
        <Route path="/1">
           <Uno/>
        </Route>
      </div>
    </Router>
  );
}

export default App;

