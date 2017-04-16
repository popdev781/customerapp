var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var expressValidator = require('express-validator');
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

// Global Vars
app.use(function(req, res, next) {
    res.locals.errors = null;
    next();
});

// Express error validator
app.use(expressValidator({
    errorFormatter: function(param, msg, value) {
        var namespace = param.split('.'),
            root = namespace.shift(),
            formParam = root;

        while (namespace.length) {
            formParam += '[' + namespace.shift() + ']';
        }
        return {
            param: formParam,
            msg: msg,
            value: value
        };
    }
}));
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

app.post('/users/add', function(req, res) {
    req.checkBody('first_name', 'First Name is Required').notEmpty();
    req.checkBody('last_name', 'Last Name is Required').notEmpty();
    req.checkBody('email', 'Email is Required').notEmpty();

    var errors = req.validationErrors();

    if (errors) {
        res.render('index', {
            title: 'Customers',
            users: users,
            errors: errors
        });
        //console.log('Errors');
    } else {
        var newUser = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email
        }
        console.log('Success');
    }

})

app.listen(3000, function() {
    console.log('server started on port 3000');
})

//console.log('hey');