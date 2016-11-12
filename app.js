var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: true }));

var add = require('./routes/add.js');
// var add = require('./routes/sub.js');
// var add = require('./routes/multi.js');
// var add = require('./routes/div.js');
//
//
// //routes
app.use('/add', add);
// app.use('/sub', sub);
// app.use('/multiply', multi);
// app.use('/division', div);


app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), function() {
  console.log("Listening on port " + app.get('port'));
});

app.get('/*', function (req, res) {
  var file = req.params[0] || 'index.html';
  // console.log("file " + file);

  res.sendFile(path.join(__dirname, '/', file));
  // console.log("dirname" + __dirname);
});
