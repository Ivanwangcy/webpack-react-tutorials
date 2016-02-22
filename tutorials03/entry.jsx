var React = require('react');
var ReactDOM = require('react-dom');

// ReactDOM.render(
//        <div>12323</div>,
//        document.getElementById('example')
//      );
var Hello = React.createClass({
  render: function() {
    return <div>Hello {this.props.name}</div>;
  }
});

ReactDOM.render(
  <Hello name="World" />,
  document.getElementById('container')
);
