var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');








app.use(bodyParser.urlencoded({ extended: true }));

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), function() {
  console.log("Listening on port");
});

app.get('/*', function (req, res) {
  var file = req.params[0] || 'index.html';
  //console.log("file " + file);

  res.sendFile(path.join(__dirname, '/', file));
  //console.log("dirname" + __dirname);
});
