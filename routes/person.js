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
			res.render('module/person_list',{
				personList : JSON.parse(body)
			})
			// res.send(JSON.parse(body))
		}
	)
	// res.render('module/person_list', {

	// });
	
});

router.get('/:id', function(req, res, next){
	request(
		{
			method: 'get',
			uri : apiPath+'people/'+req.params.id	
		},
		function(err, response, body){
			res.render('person', {
				personId : req.params.id,
				personData : JSON.parse(body)
			})
		}
	)
// 	console.log('Search Person with ID number : ', req.params.id);
// 	next();	
// }, function(req, res, next){
// 	res.render('person', {
// 		personId : req.params.id
// 	});
});

module.exports = router;