import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route
} from "react-router-dom";
import Home from "./components/Home";
import Product from "./components/Product";
import Topic from "./components/Topic";

const App = () => 
    <div className="App">
        <Router>
            <ul>
                <li>
                    <Link to="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/product">
                        Product
                    </Link>
                </li>
                <li>
                    <Link to="/topic">
                        Topic
                    </Link>
                </li>
                <li>
                    <Link to="/abrakadabra">
                        Unknown
                    </Link>
                </li>
            </ul>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/product">
                    <Product />
                </Route>
                <Route path="/Topic">
                    <Topic />
                </Route>
                <Route path="*">
                    <div>
                        404 Not Found
                    </div>
                </Route>
            </Switch>
        </Router>
    </div>

export default App;