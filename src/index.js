import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';


import { HashRouter as Router, Route, Switch} from 'react-router-dom';

import App from './App';
import Main from './Main';

import { allReducers } from './reducers/allReducers';
import  Complete  from './Complete';

import "./css/allstyles.less";


const middleware = [ thunkMiddleware ];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore( allReducers , composeEnhancers(
    applyMiddleware(...middleware)
));

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
              
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route path="/home/:id" component={Main} />
                    <Route path="/complete" component={Complete} />
                </Switch>
               
            </div>
        </Router> 
    </Provider>, document.getElementById("app")
)

