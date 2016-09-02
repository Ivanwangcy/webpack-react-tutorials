import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import Counter from './components/Counter';
import counter from './reducers';

// class Counter extends React.Component {
//   render(){
//     return <div>Hello World</div>
//   }
// }

var store = createStore(counter);
var rootEl = document.getElementById('root');

function render(){
  ReactDOM.render(
    <Counter
    value={ store.getState() }
    onIncrement={ () => store.dispatch({type: 'INCREMENT'}) }
    onDecrement={ () => store.dispatch({type: 'DECREMENT'}) }
    />,
    rootEl
  )
}

render();

store.subscribe(render);
