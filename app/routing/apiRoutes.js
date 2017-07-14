//import friend data

var friendData = require('../data/friends.js');


module.exports = function(app) {

    //get route for api/friends returns friend data

    app.get('/api/friends', function(req, res) {
        res.json(friendData);
    });


    // post route for /api/friends takes in the new data &
    // responds w/most compatible friend
    app.post('/api/friends', function(req, res) {
       const userInput = req.body;
       const userAnswers = userInput.scores;
       
    
        //best friend match variables
        const matchName = '';
        const matchPic = '';
        const totalDifference = 1000; //large for comparison

    
    //run through all possible matches in friendData
    for (var i = 0; i <friendData.length; i++) {
        console.log('friend = ' + JSON.stringify(friendData[i]));

        //compute differences foe every question
        const difference = 0;
        for (var x = 0; x < userAnswers.length; x++) {
            difference += Math.abs(friendData[x].scores[x] - userAnswers[x]);
        }
        console.log('difference = ' +difference);

        //record the match for the friend with the lowest difference
        if (difference < totalDifference) {
            console.log('Closest match found = ' + difference);
            console.log('Friend name = ' + friendData[i].name);
            console.log('Friend photo = ' + friendData[i].photo);

            totalDifference = difference;
            matchName = friendData[i].name;
            matchPhoto = friendData[i].photo;
        }
    }

    //add new user
    friendData.push(userInput);

    //send response
     res.json({status: 'OK', matchName: matchName, matchImage: matchImage});

        });

}
