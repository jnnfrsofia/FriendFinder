//routes that will send the user from the home page
//to the survey page and vice versa
const path = require('path');

module.exports = function(app) {

//get route for / returns home.html
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, '/../public/home.html'));
});

//get route for /survey returns the survey.html
app.get('/survey', function(req, res) {
    res.sendFile(path.join(__dirname, '/../public/survey.html'));
});

};