var express = require('express'),
	path = require('path'),
	app = express();

app.use(express.static(path.resolve('./build/')));
app.get('*', function(request, response){
  response.sendfile('./public/index.html');
});

module.exports = app;
