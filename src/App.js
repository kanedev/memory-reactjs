import React, { Component } from 'react'
import './App.css'
import GuessCount from './GuessCount';
import Card from './Card';

class App extends Component {
  render() {
    return  (
    <div className="memory" >
   
   <GuessCount guesses={0} />
   <Card card="1" feedback="hidden" />
   <Card card="2" feedback="justMatched" />
   <Card card="3" feedback="justMismatched" />
   <Card card="4" feedback="visible" />
   <Card card="5" feedback="hidden" />
   <Card card="6" feedback="justMatched" />
   </div>
    )
  }
}

export default App