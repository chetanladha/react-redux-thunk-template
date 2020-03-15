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
import styled from "styled-components";

const Nav = styled.ul`
    display: flex;
    padding: 0;
    flex-wrap: wrap;
`;

const NavLink = styled.li`
    display: inline-block;
    margin: 5px;
    background-color: #007bff;
    border: 1px solid #007bff;
    color: white;
    padding: 0.25rem 0.5rem;
    outline: none;
`;

const RouterLink = styled(Link)`
    color: white;
    text-decoration: none;
`;

const App = () => 
    <div className="App">
        <Router>
            <Nav>
                <NavLink>
                    <RouterLink to="/">
                        Home
                    </RouterLink>
                </NavLink>
                <NavLink>
                    <RouterLink to="/product">
                        Product
                    </RouterLink>
                </NavLink>
                <NavLink>
                    <RouterLink to="/topic">
                        Topic
                    </RouterLink>
                </NavLink>
                <NavLink>
                    <RouterLink to="/abrakadabra">
                        Unknown
                    </RouterLink>
                </NavLink>
            </Nav>
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