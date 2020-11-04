import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import HomeCard from './components/HomeCard';
import AboutCard from './components/AboutCard';
import CuisineCard from './components/CuisineCard';

export default function App() {
        return (
                <Router>
                        <div>
                                <nav>
                                        <ul>
                                                <li>
                                                        <Link to="/">Home</Link>
                                                </li>
                                                <li>
                                                        <Link to="/about">About</Link>
                                                </li>
                                                <li>
                                                        <Link to="/cuisine">Cuisine</Link>
                                                </li>
                                        </ul>
                                </nav>

                                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                                <Switch>
                                        <Route path="/about">
                                                <About />
                                        </Route>
                                        <Route path="/cuisine">
                                                <Cuisine />
                                        </Route>
                                        <Route path="/">
                                                <Home />
                                        </Route>
                                </Switch>
                        </div>
                </Router>
        );
}

function Home() {
        return <HomeCard />;
}

function About() {
        return <AboutCard />;
}

function Cuisine() {
        return <CuisineCard />;
}
