var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

/*
var logger = function(req, res, next) {
    console.log('Logging...');
    next();
}
app.use(logger);
*/

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Set Static Path
app.use(express.static(path.join(__dirname, 'public')));

var people = [{
        name: 'praveen',
        age: 26
    },
    {
        name: 'pct',
        age: 26
    },
    {
        name: 'pop',
        age: 26
    }
]
app.get('/', function(req, res) {
    //res.send('hey pct');
    res.json(people);
});
app.listen(3000, function() {
    console.log('server started on port 3000');
})

//console.log('hey');