var http = require('http');

// Get a list of airline 
exports.getList = function(params, funCollback) {
	var options = {
  		host: global.config._hostApiCluster,
  		path: '/airlines',
 		port: global.config._portApiCluster,
  		method: 'GET'
	};
	var callback = function(response) {
  		var str = '';
  		response.on('data', function (chunk) {
    			str += chunk;
  		});
	 	response.on('end', function () {
    		funCollback(null,str);
  		});
		
	}
	var req = http.request(options, callback);
	req.end();
}

// Update items airline
exports.updateItem = function(params, funCollback) {
	var options = {
  		host: global.config._hostApiCluster,
  		path: '/airlines/'+params.id,
 		port: global.config._portApiCluster,
  		method: 'PUT',
  		headers: {'apiKey': 'tokenInge','x-client':'abm-landings','Content-Type': 'application/json'}
	};
	var callback = function(response) {
  		var str = '';
  		response.on('data', function (chunk) {
    			str += chunk;
  		});
  	 	response.on('end', function () {
    		funCollback(null,str);
  		});
		
	}
	var req = http.request(options, callback);
	req.write(JSON.stringify(params));
	req.end();
}