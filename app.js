var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
 

app.get('/js/client_world.js', function(req, res){
    res.sendFile(__dirname + '/js/client_world.js');
});

 
    
app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
	
});

app.set('port', (process.env.PORT || 5000));
 
 
http.listen(function(){
    console.log( "Listening on " +" server_port  : 5000"  );
});

 

 

 
