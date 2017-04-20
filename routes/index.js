var express		= require('express'),
	router 		= express.Router(),
	app 		= express();

router.get('/', function(req, res){	
	res.render('index', {
		title : "This is Index Page"
	})
});

module.exports = router;