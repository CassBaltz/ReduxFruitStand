import React from 'react';
import ReactDOM from 'react-dom';
import Store from './store';
import FruitStandContainer from './fruit_stand.container';

document.addEventListener('DOMContentLoaded', () => {
  const stand = document.getElementById('stand');
  ReactDOM.render(<FruitStandContainer store={Store} />, stand);
});

window.store = Store;
