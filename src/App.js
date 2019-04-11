import React, { Component } from 'react'
// import logo from './logo.svg'
import './App.css'
// import Quotes from './Quotes'
// import Lamp from './Lamp'
import  GenerateCitation  from  './GenerateCitation';
import  DisplayCitation  from  './DisplayCitation';

const  sampleCitation = {
    "quote": "Shoplifting is a victimless crime, like punching someone in the dark.",
    "character": "Nelson Muntz",
    "image" : "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185",
    "characterDirection" : "Left"
};
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      citation:  sampleCitation
    };
  };

getCitation() {
  // Récupération de l'employé via fetch
  fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
    .then(response  =>  response.json())
    .then(data  => {
      // Une fois les données récupérées, on va mettre à jour notre state avec les nouvelles données
      this.setState({
        citation:  data[0],
      });
  });
}
  render () {
    return (
      <div className='App'>
        {/* <header className='App-header'>
          <img src={logo} className="App-logo" style={this.state.working ? {animation: 'App-logo-spin infinite 2s linear'} : null} alt='logo' />
          <h1 className='App-title'>Simpsons Quotes</h1>
        </header> */}
        <GenerateCitation  selectCitation={() =>  this.getCitation()}  />
        <DisplayCitation    citation={this.state.citation}  />
        {/* <button
          onClick={()=> this.setState({working: !this.state.working })}>
          Working : {this.state.working.toString()}
        </button>
        <Lamp on />
        <Lamp /> 
        <Quotes /> */}
      </div>
    )
  }
}
export default App
