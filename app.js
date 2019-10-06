var express=require('express');
const path = require('path');
var app=express();
var server=require('http').createServer(app);
var io=require('socket.io').listen(server);
const publicDirectoryPath = path.join(__dirname,'/public')
app.use(express.static(publicDirectoryPath))
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
})


server.listen(process.env.PORT||3000);

io.on('connection',function(socket){
    console.log('connected');
    socket.on('chat',function(data){
            socket.broadcast.emit('chat',data);
    })
})

