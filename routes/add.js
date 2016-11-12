var express = require('express');
var router = express.Router();


var numbers = {
  result: 0
}

function add (x, y) {
  return x + y;
}

router.post('/', function (req, res) {
  console.log(req.body);
  var x = parseFloat(req.body.x);
  var y = parseFloat(req.body.y);
  numbers.result = add(x, y);
  console.log(req.body);
  res.sendStatus(201);
});

router.get('/', function(req, res) {
  res.send(numbers);
});

module.exports = router;
