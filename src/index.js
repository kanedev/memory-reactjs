import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import * as serviceWorker from './serviceWorker';




// Creating a second new component with a function (JSX)
  function BestComponent({ adjective='Cool'}) {
    return <p>JSX is So  {adjective} ! ;-) </p>
  }


   // Linking to the virtual DOM
  ReactDOM.render(
    <BestComponent />,
    document.getElementById('root')
  )




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
