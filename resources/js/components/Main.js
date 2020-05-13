import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './layouts/header';
import Preloader from './layouts/Preloader';
import Footer from './layouts/footer';
import { BrowserRouter } from "react-router-dom";
import Router from './Route';
import { Provider} from 'react-redux';
import {createBrowserHistory} from 'history'
import thunk from 'redux-thunk'
import { createStore,applyMiddleware, compose } from 'redux';
import rootReducer from '../redux/reducers/rootReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 const browserHistory = createBrowserHistory();

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);

class Main extends Component {
    
    render() {
       
        return (
            <Provider store={store}>
                <BrowserRouter history={browserHistory}>
                    <Preloader />
                    <Header />
                    <Router />
                    <Footer />
                </BrowserRouter>
            </Provider>
        );
    }
}


export default Main;

if (document.getElementById('index')) {
    
    ReactDOM.render(<Main />, document.getElementById('index'));
}
