import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

var Hello = React.createClass({
  render: function(){
    return (
      <div className='content'>Hello world! <i className="icon"></i></div>
    );
  }
});

ReactDOM.render(
  <Hello />,
  document.getElementById("container")
);

if (__DEV__) {
  document.write(new Date());
}
