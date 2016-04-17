import React from "react";
import ReactDOM from "react-dom";
import AppTitle from "./module/a";
import Content from "./module/b";

ReactDOM.render(
  <div>
    <AppTitle />
    <Content />
  </div>,
  document.querySelector(".header")
);

require.ensure(['./module/list'], function(require){
  var ListView = require('./module/list').default;
  ReactDOM.render(
    <ListView />,
    document.querySelector(".container")
  );
})
