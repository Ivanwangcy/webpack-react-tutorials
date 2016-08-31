import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import Counter from '.components/Counter';

class Counter extends React.Component {
  render(){
    return <div>Hello World</div>
  }
}

function render(){
  ReactDOM.render(
    <Counter />,
    document.getElementById('root')
  )
}

render();
