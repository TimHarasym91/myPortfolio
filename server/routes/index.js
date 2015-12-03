var express = require('express');
var passport = require('passport');
var router = express.Router();

var User = require('../models/user');

/* Utility functin to check if user is authenticated */
function requireAuth(req, res, next){

  // check if the user is logged in
  if(!req.isAuthenticated()){
    return res.redirect('/login');
  }
  next();
}


/* GET home page. 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home', message: 'Welcome to my website.'});
});
*/

/* GET About page */


/* Render home page. */
router.get('/', function (req, res, next) {
    res.render('index', {
        title: 'Home',
        displayName: req.user ? req.user.displayName : ''
    });
});

router.get('/about', function(req, res, next) {
	res.render('about', { title: 'About Me',
						 displayName: req.user ? req.user.displayName : '',
						 message: 'Coder  Developer  Designer  Entrepreneur'});
});

/* GET Projects page */
router.get('/projects', function(req, res, next) {
	res.render('projects', { title: 'Projects',
							displayName: req.user ? req.user.displayName : '',
							message: 'Check out some of my projects below.'});
});

/* GET Services page */
router.get('/services', function(req, res, next) {
	res.render('services', { title: 'Services',
							displayName: req.user ? req.user.displayName : '',
							message: 'See what skills and services I have to offer.'});
});

/* GET Contact Me page */
router.get('/contact', function(req, res, next) {
	res.render('contact', { title: 'Contact',
						   displayName: req.user ? req.user.displayName : '',
						   message: 'Feel free to contact me anytime, and I\'ll get back to you ASAP.'});
});



/* Render Login page. */
router.get('/login', function (req, res, next) {
    if (!req.user) {
        res.render('login', {
            title: 'Login',
            messages: req.flash('loginMessage'),
            displayName: req.user ? req.user.displayName : ''
        });
        return;
    }
    else {
        return res.redirect('/users');
    }
});

/* Process the Login Request */
router.post('/login', passport.authenticate('local-login', {
    successRedirect: '/users',
    failureRedirect: '/login',
    failureFlash: true
}));

/* Show Registration Page */
router.get('/register', function (req, res, next) {
    if (!req.user) {
        res.render('register', {
            title: 'Register',
            messages: req.flash('registerMessage'),
            displayName: req.user ? req.user.displayName : ''
        });
    }
    else {
        return res.redirect('/');
    }
});

/* POST signup data. */
router.post('/register', passport.authenticate('local-registration', {
    //Success go to Profile Page / Fail go to Signup page
    successRedirect : '/users',
    failureRedirect : '/register',
    failureFlash : true
}));


/* Process Logout Request */
router.get('/logout', function (req, res){
  req.logout();
  res.redirect('/');
});

/* GET home page. */
router.get('/todoList', requireAuth, function(req, res, next) {
  res.render('todos/index', { 
      title: 'Todo List',
      displayName: req.user ? req.user.displayName : '',
      username: req.user ? req.user.username : '' 
  });
});



module.exports = router;
