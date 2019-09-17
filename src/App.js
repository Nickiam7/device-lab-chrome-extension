import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom' 

import { Provider } from 'react-redux'
import store from './store'

import Navbar from './components/layout/Navbar'
import AddSite from './components/sites/AddSite'

import './App.css';

class App extends Component {
  render() {
    return (
    	<Provider store={store}>
    	<Router>
	      <div className="App">
					<Navbar />
					<div className="container">
						<AddSite />						
		      </div>
	      </div>
      </Router>
      </Provider>
    );
  }
}

export default App
