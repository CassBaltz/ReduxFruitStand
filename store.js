import {createStore} from 'redux';
import reducer from './reducer';
import * as Actions from './actions';

const store = createStore(reducer, {fruit: []});
window.store = store;
window.actions = Actions;

const display = () => {
  const stand = document.getElementById('stand');
  stand.innerHTML = window.store.getState().fruit;
};

window.store.subscribe(display);


//getState()
//dispatch(action)
//subscribe(callbacks)

export default store;
