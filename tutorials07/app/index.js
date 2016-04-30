var sub = require('./sub');
var app = document.createElement('div');

app.innerHTML = "<h1>标题一<h1>";

app.appendChild(sub());
document.body.appendChild(app);
