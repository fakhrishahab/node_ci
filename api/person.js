var express 		= require('express'),
	router 			= express.Router(),
	app 			= express();


router.get('/', function(req, res){
	res.send('person list')
});

module.exports = router;

