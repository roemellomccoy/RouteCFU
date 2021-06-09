import './App.css';
import React from 'react'
import Home from './Components/home'
import Products from './Components/Products'
import IndProducts from './Components/IndProducts'
import Cart from './Components/Cart'
import Checkout from './Components/Checkout'
import { Route, Link } from 'react-router-dom'

const App = () => {
  return (
    <div>
      {/* The unordered list below could also be a navigation bar */}
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Products">Products</Link></li>
        <li><Link to="/IndProducts">This Product</Link></li>
        <li><Link to="/Cart">View Cart</Link></li>
        <li><Link to="/Checkout">Checkout</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/Products" component={Products}/>
      <Route path="/IndProducts" component={IndProducts}/>
      <Route path="/Cart" component={Cart}/>
      <Route path="/Checkout" component={Checkout}/>
    </div>
  )
}

export default App;
