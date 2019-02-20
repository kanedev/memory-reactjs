import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// Creating a new component with a function
function CoolComponent() {
    return React.createElement('p', {}, 'Youpi So Cool !')
  }

  // Linking to the virtual DOM
ReactDOM.render(
    React.createElement(CoolComponent),
    document.getElementById('root')
  )






// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
