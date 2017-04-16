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

// View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Set Static Path
app.use(express.static(path.join(__dirname, 'public')));

var users = [{
        id: 1,
        first_name: 'Praveen',
        last_name: 'Thapliyal',
        email: 'pthapliyal781@gmail.com'
    },
    {
        id: 2,
        first_name: 'Praveen2',
        last_name: 'Thapliyal',
        email: 'pthapliyal781@gmail.com'
    },
    {
        id: 3,
        first_name: 'Praveen3',
        last_name: 'Thapliyal',
        email: 'pthapliyal781@gmail.com'
    }
]
app.get('/', function(req, res) {
    //res.send('hey pct');
    res.render('index', {
        title: 'Customers',
        users: users
    });
});
app.listen(3000, function() {
    console.log('server started on port 3000');
})

//console.log('hey');