import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';

const template = (
  <div>
    <h1>===========</h1>
    <h3>
      Events Microfrontend
    </h3>

    <h1>===========</h1>
  </div>
);

ReactDOM.render(
  template,
  document.querySelector(
    '#events'
  )
);
