var express 		= require('express'),
	request 		= require('request'),

	apiPath        	= 'http://swapi.co/api/',
	router 			= express.Router();

router.get('/', function(req, res, next){
	request(
		{ 
			method: 'get',
			uri : apiPath+'people'
		},
		function(err, response, body){
			res.send(JSON.parse(body))
			console.log(body)
		}
	)
	// res.render('module/person_list', {

	// });
	
});

router.get('/:id', function(req, res, next){
	console.log('Search Person with ID number : ', req.params.id);
	next();	
}, function(req, res, next){
	res.render('person', {
		personId : req.params.id
	});
});

module.exports = router;