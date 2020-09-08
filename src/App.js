import React from 'react';
import './App.css';
import './index.css';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Search from './components/Search';
import Services from './components/Services';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Load from './components/Load';
import Login from './accounts/Login';
import Signup from './accounts/Signup';



function App() {

  return (
    <>
 

    <BrowserRouter>
<Load/>


    <Navbar/>
    <Switch>
    
     <Route exact path ="/" component= {Home} />
      <Route exact path ="/about" component= {About} />
      <Route exact path ="/search" component= {Search} />
      <Route exact path ="/service" component= {Services} />
      <Route exact path="/contact" component={Contact} /> 
      <Route exact path="/login" component={Login} /> 
      <Route exact path="/signup" component={Signup} /> 
      <Redirect to="/" />

    </Switch>

    <Footer/>

    </BrowserRouter>
    </>

    
   
  );
}

export default App;
