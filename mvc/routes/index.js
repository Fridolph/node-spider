var express = require('express');
var router = express.Router();
var usersRouter = require('./users')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api', (req, res, next) => {
  next()  
})

module.exports = router;
