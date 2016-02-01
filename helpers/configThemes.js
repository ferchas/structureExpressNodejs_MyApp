module.exports = function(req, res, next) {
  
  var stateProvider =[{name: "home"
  					   ,url: "/"
  					   ,templateUrl: "home.html"
  					  }];
  					  
  for(var i=0; i< req.modules.length;i++){
  		stateProvider.push({ name: req.modules[i]._slug
  						    ,url: req.modules[i]._url
  							,templateUrl: req.modules[i]._templateUrl
	  	 });
  }		  	 
	  	 
  req.configThemes = stateProvider;   
  next();
 
};