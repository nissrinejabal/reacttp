import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'jquery/dist/jquery.min.js'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Mock from './components/Mock';
import UpdateUser from './components/UpdateUser';
import InfoUser from './components/InfoUser';
function App() {
  return (
    <Router>
    <div className="container">
   <Navbar/> 
<br/>
<Route path="/" exact component={Home} />
<Route path="/mock" component={Mock} />
<Route path="/edit/:id" component={UpdateUser} />
<Route path="/info/:id" component={InfoUser} />
<Footer/>
    </div>
  </Router>
  );
}
export default App;
