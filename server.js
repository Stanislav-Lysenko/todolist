const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname + '/dist/todolist-by-stas'));
app.get('/', function(req, res){
  res.sendFile(__dirname + '/dist/todolist-by-stas/index.html');
});

app.listen(process.env.PORT || 8080);