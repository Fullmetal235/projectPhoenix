import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Cart from './components/cart';
import Details from './components/Details';
import ProductList from './components/productList';
import PageNotFound from './components/pageNotFound';

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path='/' component={ProductList} />
        <Route path='/details' component={Details} />
        <Route path='/cart' component={Cart} />
        <Route component={PageNotFound} />

      </Switch>



    </div>
  );
}

export default App;
