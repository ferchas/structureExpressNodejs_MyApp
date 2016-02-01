var express = require('express')
  , app = express()
  , bodyParser = require('body-parser')
  , port = process.env.PORT || 9290
  , pathConfig = (process.argv[2] == 'dev')? './config/configDev': './config/configProduction'; 


//Gobal set  
global.config = require(pathConfig);  

// Set the view engine to use handlebars
app.set('view engine', 'jade');
app.set('views', __dirname + '/views/jade');


app.use('/'+global.config._path, express.static(__dirname + '/public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(require('./controllers'))



app.listen(port, function() {
  console.log('Listening on port ' + port);
  console.log('Config Start ',global.config);
  
})
