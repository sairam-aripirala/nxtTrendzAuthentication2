import {Route, Switch} from 'react-router-dom'

import Cart from './components/Cart'
import Header from './components/Header'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Products from './components/Products'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/cart" component={Cart} />
    <Route exact path="/header" component={Header} />
    <Route exact path="/products" component={Products} />
    <Route exact path="/login" component={LoginForm} />
    <Route exact path="/" component={Home} />
    <Route component={NotFound} />
  </Switch>
)

export default App
