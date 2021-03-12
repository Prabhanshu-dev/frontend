import React from "react";
import {
  BrowserRouter as Router,
  Route,
  useHistory,
} from "react-router-dom";
import './App.css';
import Header from './Header';
import Home from './Home';
import Carousel from './Carousel';
import Product from './Product';
import Registration from './Registration';

// import Login from './components/accountBox/loginForm';
// import SignUp from "./components/accountBox/signupForm";

function App() {
  return (
    <Router>
      <Route exact path="/"> <Header /> <Carousel /> <Home />  </Route>

      <Route path="/Registration">  <Header /><Registration /> </Route>

      {/* <Route path="/page2">   <Header /> <SignUp /> </Route> */}
      <Route path="/page3">   <Header />  </Route>
      
    </Router>
    
    // //BEM Conventions
    // <div className="app">

    //   <Header />
    //   <Home />
    //   <Product />
    //   <Carousel />
    // </div>
  );
}

export default App;
