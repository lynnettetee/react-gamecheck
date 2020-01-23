import React from 'react';
import ReactDOM from 'react-dom';
import importAll from './ImportImages';
import NavBar from './NavBar.js';
import Product from './Product.js';
import Review from './Review.js'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Home.js';

import './index.scss';


const App = () => {
    return(
        <Router>
            <div>
                <NavBar />            
                    <div>
                        <Switch>    
                            <Route path='/home' exact component={Home} />
                            <Route path='/product' exact component={Product} />
                            <Route path='/review' exact component={Review} />
                        </Switch>
                    </div>
            </div>
        </Router>
    )

}

ReactDOM.render(<App />, document.getElementById('root'));
