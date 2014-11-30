var express = require('express');
var stylus = require('stylus');
var logger = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');


var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

// stylus
function compile(str, path){
    return stylus(str).set('filename', path);
}

app.set('views', __dirname + '/server/views');
app.set('view engine', 'jade');

app.use(logger('dev'));

app.use(stylus.middleware(
    {
        src: __dirname + '/public',
        compile: compile
    }
));

// static route handling
// files under this folder will be served.
app.use(express.static(__dirname + '/public'));

// connect to mongo
if(env==='development'){
    mongoose.connect('mongodb://localhost/multivision');
}else{
    mongoose.connect('mongodb://mongodbuser:multiron@ds053370.mongolab.com:53370/multiron');
}



var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error...'));
db.once('open', function callback() {
   console.log('multivision db opened');
});

var messageSchema = mongoose.Schema({message: String});
var Message = mongoose.model('Message', messageSchema);
var mongoMessage;
Message.findOne().exec(function(err, messageDoc){
   mongoMessage = messageDoc.message;
});


app.get('/partials/:partialPath', function(req, res){
    res.render('partials/' + req.params.partialPath);
});

app.get('*', function(req, res){
    res.render('index', {
        mongoMessage: mongoMessage
    });
})

var port = process.env.PORT || 3030;
app.listen(port);

console.log('Listening on port ' + port + '...');
