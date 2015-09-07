var express = require('express');
var router = express.Router();

/* GET request for users. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET request for registration. */
router.get('/register', function(req, res, next) {
  res.render('register', {
    'title': 'Register'
  });
});

/* GET request for login. */
router.get('/login', function(req, res, next) {
  res.render('login', {
    'title': 'Login'
  });
});

router.post('/users/register', function(req, res, next){
  // Get Form Values
  var name      = req.body.name;
  var email     = req.body.email;
  var username  = req.body.username;
  var password  = req.body.password;
  var password2 = req.body.password2;

  //Check for Image Field
  if(req.files.profileimage){
    console.log('Uploading File...');

    // File information
    var profileImageOriginalName = req.files.profileimage.originalname;
    var profileImageName         = re.files.profileimage.name;
    var profileImageMime         = re.files.profileimage.mimetype;
    var profileImagePath         = re.files.profileimage.path;
    var profileImageExt          = re.files.profileimage.extension;
    var profileImageSize         = re.files.profileimage.size;
  } else {
    // Set a default image
    var profileImageName = 'noimage.png';
  }

  // Form Validation
  req.checkBody('name', 'Name field is required.').notEmpty();
  req.checkBody('email', 'Email field is required.').notEmpty();
  req.checkBody('email', 'Email is not valid.').isEmail();
  req.checkBody('username', 'Username field is required.').notEmpty();
  req.checkBody('password', 'Password field is required.').notEmpty();
  req.checkBody('password2', 'Your passwords do not match.').equals(req.body.password);
});

module.exports = router;
