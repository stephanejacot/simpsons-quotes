import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import Quotes from './Quotes'
import Lamp from './Lamp'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      working: true
    };
  };
  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className="App-logo" style={this.state.working ? {animation: 'App-logo-spin infinite 2s linear'} : null} alt='logo' />
          <h1 className='App-title'>Simpsons Quotes</h1>
        </header>
        <button
          onClick={()=> this.setState({working: !this.state.working })}>
          Working : {this.state.working.toString()}
        </button>
        <Lamp on />
        <Lamp /> 
        <Quotes />
      </div>
    )
  }
}

export default App
