// express server
'use strict';
let mysql = require("mysql");
let express = require("express");
let app = express();
let handlebars = require("express-handlebars")
.create({defaultLayout:'main'});

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 3000);

app.get('/', function(req, res) {
	// mysql connect and query
	let conn = mysql.createConnection({
		host: 'localhost',
		user: 'dtapi',
		password: 'dtapi',
		database: 'dtapi2',
		charset: 'utf8'
	});

	conn.query('SELECT * FROM users ORDER BY id', function(err, rows) {
		res.render('home', {data : rows});
	});
});


// HTTP 404
app.use(function(req, res) {
	res.type('text/plain');
	res.status(404);
	res.send('404 - Page Not Found');
});

app.listen(app.get('port'), function() {
	console.log('express server is running on port ' + app.get('port'));
});