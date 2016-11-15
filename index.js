// express server
'use strict';
let express = require("express");
let mysql = require("mysql");

let app = express();

// mysql connection parameters
let conn = mysql.createConnection({
	host: 'localhost',
	user: 'dtapi',
	password: 'dtapi',
	database: 'dtapi2',
	charset: 'utf8'
});

app.set('port', 3000);

app.get('/', function(req, res) {
	conn.query('SELECT * FROM users ORDER BY id', function(err, rows) {
		rows.forEach(function(row, i, rows) {
			console.log(row);
		});
	});	
	res.type('text/plain');
	res.status(200);
	res.send('MySQL Finished run the query');
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