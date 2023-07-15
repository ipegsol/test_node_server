var express = require('express');
var app = express();

app.get('/', function (req, res) {
   //IMP : Call req.send only once or it may give headers sent error. Concatenate if needed.
   console.log('Server is Active');
   res.send('<h1>Hello World</h1>');
   console.log("Finished Sending!")
})

var server = app.listen(80, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})

