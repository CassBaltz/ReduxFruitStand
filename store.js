import {createStore} from 'redux';
import reducer from './reducer';
import * as Actions from './actions';

const store = createStore(reducer, {fruit: []});
window.store = store;
window.actions = Actions;


//getState()
//dispatch(action)
//subscribe(callbacks)

export default store;
