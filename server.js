//**SETTING UP SERVER AND ROUTES

    //set up dependencies
    const express = require('express');
    const bodyParser = require('body-parser');
    const path = require('path');


    //set up the express app
    const app = express();
    const PORT = process.env.PORT || 3000;

    //set up the express app to handle data parsing
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.text());
    app.use(bodyParser.json({
        type: 'application/vnd.api+json'
    }))

    app.use(express.static('public'));

    //import api routes
    require('./app/routing/apiRoutes')(app);
    require('./app/routing/htmlRoutes')(app);



    //starts the server to begin listening
    app.listen(PORT, function(err) {
        if (err) {
            return console.error(err)
        }
        console.log('App listening on PORT ' + PORT);
    });
