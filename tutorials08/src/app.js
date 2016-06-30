import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

// 可以使用箭头函数创建无状态组件
// let App = () => {
//   return (
//     <div>
//       <h1>Hello hjs-webpack!!!!!!!</h1>
//       hot load...aaaaaaa
//       <p>sdfasdfasdfasdf</p>
//     </div>
//   );
// };


ReactDOM.render(
  <App />,
  document.querySelector('#root')
)
