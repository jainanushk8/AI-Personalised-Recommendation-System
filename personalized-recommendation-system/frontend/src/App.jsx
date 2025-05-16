import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RecommendationPage from './pages/RecommendationPage';
import NotFoundPage from './pages/NotFoundPage';
import Navbar from './components/Navbar';

const App = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/recommendations" component={RecommendationPage} />
                    <Route component={NotFoundPage} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;