var express = require('express')
  , router = express.Router();

//set root url
router.use('/'+global.config._path+'/airline', require('./airline'));
//router.use('/users', require('./users'));

module.exports = router;