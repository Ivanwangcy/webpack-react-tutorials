import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

var Hello = React.createClass({
  render: function(){
    return (
      <div className='content'>Hello dada! </div>
    );
  }
})

ReactDOM.render(
  <Hello />,
  document.getElementById("container")
);
