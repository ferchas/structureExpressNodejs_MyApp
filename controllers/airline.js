var express = require('express')
  , router = express.Router()
  , airLineModels = require('../models/airline')

router.get('/getListAirline',function(req, res) {
  airLineModels.getList(req.params, function (err, data) {
    res.setHeader('Content-Type', 'application/json');
    //res.send(JSON.stringify(data));
 	res.send(data);	
  });  
});

router.post('/updateAirline',function(req, res) {
  airLineModels.updateItem(req.body, function (err, data) {
    res.setHeader('Content-Type', 'application/json');
    res.send(data);	
  });  
});

router.get('/airline.html',function(req, res) {	
	 var params = {	menuModules: req.modules
  					,public_path: global.config._path
  				};
    res.render('airline/index',params);
});

router.get('/list.html',function(req, res) {  
    res.render('airline/list');
});

router.get('/add-edit.html',function(req, res) {	
    res.render('airline/add-edit');
});

module.exports = router;
