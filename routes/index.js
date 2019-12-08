var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/activities', function(req, res, next) {
  res.render('track', { title: 'Express' });
});

router.get('/challenges', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/stats', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/profile', function(req, res, next) {
    res.render('profile');
})

router.get('/track', function(req, res, next) {
    res.render('track');
})

module.exports = router;
