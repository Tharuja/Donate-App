const express= require('express');
const routes= require('./routes/api'); 
const bodyParser = require('body-parser');
const mongoose=require('mongoose');
const cors=require('cors');
var multer = require( 'multer');
var upload = multer();



var socket = require('socket.io');




multer({
    limits: { fieldSize: 1024 * 1024 * 1024 }
})


const app= express();
//mongoose.connect('mongodb://chirangaw186:twinturbov8@ds163354.mlab.com:63354/foodhubdb');
mongoose.connect('mongodb://localhost:27017/test');
mongoose.Promise = global.Promise;

    app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(upload.array());

app.use(cors({origin : 'http://localhost:3001' }));


//initialize routes
app.use('/reg',routes);

// app.use(bodyparser.jason());


server=app.listen(process.env.port||3002,function(){
    console.log('now listening fro request');
});

io = socket(server);

io.on('connection', (socket) => {
    console.log(socket.id);
    console.log("Socket baby")


    socket.on('SEND_MESSAGE', function(data){
        console.log(data)
        io.emit('RECEIVE_MESSAGE', data);
    })
});