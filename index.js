// express server
'use strict';
let express = require("express");

let app = express();

let html_start = `<!DOCTYPE html>
<html>
  <head>
	<meta charset = 'utf-8'>
	<title>Express Server Example</title>
  </head>
  <body>`
		

let html_end = `</body>
</html>`;

app.set('port', 3000);

app.get('/', function(req, res) {
	res.type('text/html');
	res.status(200);

	let content = `<h3>The Express Server Example</h3>
	<p>&copy 2016 Yuriy Bezgachnyuk</p>`

	let output = (`${html_start} ${content} ${html_end}`);

	res.send(output);
});

app.get('/about', function(req, res) {
	let content = `<h1>About...</h1>`;
	let output = (`${html_start} ${content} ${html_end}`);
	res.send(output);
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