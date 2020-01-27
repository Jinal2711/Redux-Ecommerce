import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProductList from './components/ProductList';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Details from './components/Details';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import CartDetails from './components/CartDetails';

function App() {

  return (
    <Router>
      <div className="App">
        <div>
          <Navigation />
          <main role="main">
            <Switch>
              <Route exact path="/" component={ProductList}></Route>
              <Route path="/detail/:slug" component={Details}></Route>
              <Route path="/cart-details" component={CartDetails}></Route>
            </Switch>
          </main>
          {/* <Footer /> */}
        </div>
      </div>
    </Router>
  );
}

export default App;
