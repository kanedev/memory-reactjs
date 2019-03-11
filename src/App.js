import React, { Component } from 'react'
import './App.css'
import GuessCount from './GuessCount';
import Card from './Card';

class App extends Component {
  
  handleCardClick(card){
 
    console.log(card,'clicked');
    
  }

  render() {
    return  (
    <div className="memory" >
   
   <GuessCount guesses={0} />
   <Card card="1" feedback="hidden" myOnClick={this.handleCardClick} />
   <Card card="2" feedback="justMatched" myOnClick={this.handleCardClick}  />
   <Card card="3" feedback="justMismatched" myOnClick={this.handleCardClick} />
   <Card card="4" feedback="visible" myOnClick={this.handleCardClick} />
   <Card card="5" feedback="hidden" myOnClick={this.handleCardClick} />
   <Card card="6" feedback="justMatched" myOnClick={this.handleCardClick}  />
   </div>
    )
  }
}

export default App