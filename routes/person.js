var express 		= require('express'),
	router 			= express.Router();

router.get('/:id', function(req, res, next){
	console.log('Search Person with ID number : ', req.params.id);
	next();	
}, function(req, res, next){
	res.render('person', {
		personId : req.params.id
	});
});

module.exports = router;