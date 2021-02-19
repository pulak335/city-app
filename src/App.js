import React, { Fragment } from 'react';
// import logo from "./logo.svg";
import './App.css';
import Nabar from './components/layouts/Navber';
import Footer from './components/layouts/Footer';

//import pages
import Home from './components/pages/Home';
import News from './components/pages/News';
import Contact from './components/pages/Contact';
import Details from './components/pages/Details';
import NotFoundPage from './components/pages/NotFoundPage';
//import react router 
import {Route, Switch} from 'react-router-dom';
const App = () => {
  return (
    <Fragment>      
      <Nabar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/news" component={News}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/details" component={Details}/>
        <Route component={NotFoundPage}/>
      </Switch>
      <Footer/>
    </Fragment>
  )
}

export default App;

