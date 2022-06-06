var express = require('express');
var router = express.Router();

/* GET home page. */
/*router.get('/', function(req, res, next) {
  console.log(req)
  res.json({name :"My name is Sunny gupta "})
  res.render('index', { title: 'Sunny' });
});*/
/*router.get('/:da-:ta-:ch', function(req, res, next) {
  console.log(req.params.da)
  res.json({name :req.params.da+","+req.params.ch +" and "+req.params.ta})
});*/

router.get('/:da', function(req, res) {
  
  res.render('teacher',{ title: req.params.da });
  
});

module.exports = router;
