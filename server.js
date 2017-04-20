var express		= require('express'),
	path		= require('path'),
	expressLayouts = require('express-ejs-layouts')

	routeIndex 	= require('./routes/index'),
	routePerson = require('./routes/person'),
	app 		= express();

app.set('views', path.join(__dirname, 'dev/views'));
app.set('view engine', 'ejs');
app.use('/static', express.static(path.join(__dirname, './dist/static')));

app.use(expressLayouts);
app.set('layout', 'layout/layout');

app.use('/', routeIndex);
app.use('/person', routePerson);

app.use(function (err, req, res, next) {
	console.error(err.stack)
	res.status(500).send('Something broke!')
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	res.send('Error : Not Found')
});

// app.get('/user/:id', function (req, res, next) {
//   console.log('ID:', req.params.id)
//   next()
// }, function (req, res, next) {
//   res.send('User Info')
//   next('route')
// })

// // handler for the /user/:id path, which prints the user ID
// app.get('/user/:id', function (req, res, next) {
// 	console.log('yess')
//   res.end(req.params.id)
// })

// app.get('/', function(req, res){
// 	console.log('index routing');
// 	res.render('index', {
// 		title : "This is Title"
// 	});
// });

// app.get('/person/:personId-:bookId', function(req, res){
// 	res.send(req.params);
// });

app.listen(3000, function(){
	console.log('Server run listening on port 3000');
});

module.exports = app;