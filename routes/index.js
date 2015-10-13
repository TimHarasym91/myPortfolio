var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home', message: 'Welcome to my website.'});
});


/* GET About page */
router.get('/about', function(req, res, next) {
	res.render('about', { title: 'About', message: 'All about me.'});
});

/* GET Projects page */
router.get('/projects', function(req, res, next) {
	res.render('projects', { title: 'Projects', message: 'Check out some of my projects below.'});
});

/* GET Services page */
router.get('/services', function(req, res, next) {
	res.render('services', { title: 'Services', message: 'See what skills and services I have to offer.'});
});

/* GET Contact Me page */
router.get('/contact', function(req, res, next) {
	res.render('contact', { title: 'Contact', message: 'Feel free to contact me anytime, and I\'ll get back to you ASAP.'});
});

module.exports = router;
