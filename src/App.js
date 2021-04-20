import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage.component.jsx';

const HatsPage1 = (props) => {
  console.log(props);
  return (<div>
    <button onClick={() => props.history.push('/')}>Home</button>
    <h1>Hats Page</h1>
    <Link to={`${props.match.url}/13`}>13</Link>
    <br></br>
    <Link to={`${props.match.url}/24`}>24</Link>
    <br></br>
    <Link to={`${props.match.url}/3`}>3</Link>
  </div>
);
  }

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/hats1' component={HatsPage1} />
      </Switch>
    </div>
  );
}

export default App;
