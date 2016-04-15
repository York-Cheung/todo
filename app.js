require('./db');


var express = require('express');
//var cookieParser   = require( 'cookie-parser' );
var bodyParser     = require( 'body-parser' );
var path           = require( 'path' );
var routes 		   = require('./routes/index')
var app = express();

app.set('views', path.join( __dirname, '/views' ));
app.set('view engine', 'jade');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req,res,next)=>{
  console.log(req.method+req.url)
  next()
})

app.get('/', routes.index);
app.post('/create',routes.create);
app.get('/destroy/:id',routes.destory);
app.post('/update', routes.update);
var server = app.listen(3000, function () {
  var host = 	server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});