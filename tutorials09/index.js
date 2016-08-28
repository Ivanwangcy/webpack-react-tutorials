import React from 'react';
import ReactDOM from 'react-dom';

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
