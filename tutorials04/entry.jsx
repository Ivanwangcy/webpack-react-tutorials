import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

var Hello = React.createClass({
  render: function(){
    return (
      <div className='content'>Hello world! <i class="icon"></i></div>
    );
  }
})7

ReactDOM.render(
  <Hello />,
  document.getElementById("container")
);
