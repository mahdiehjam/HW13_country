import React from 'react';
import './styles/App.scss';
import { Main,Country } from './_page';
import { BrowserRouter as Router, Route,Redirect } from "react-router-dom";

function App() {
  return <Router>
    <Route path="/" exact component={Main}/>
    <Route path='/country/:code' component={Country}/>
  </Router>
}

export default App;
