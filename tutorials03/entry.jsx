var React = require('react');
var ReactDOM = require('react-dom');

// ReactDOM.render(
//        <div>12323</div>,
//        document.getElementById('example')
//      );
var Hello = React.createClass({
  render: function() {

    // 定义类需要使用 className
    return <div id="content" className="hello">Hello {this.props.name}</div>;
  }
});
var CommentBox = React.createClass({
  render: function() {
    <div>
      CommentBox
    </div>
  }
});

ReactDOM.render(
  <div>
    <Hello name="World" />
    <CommentBox />
  </div>,
  document.getElementById('container')
);
