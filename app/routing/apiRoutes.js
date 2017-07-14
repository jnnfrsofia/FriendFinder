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
        //sets up the new user's response as a variable
        var newFriend = req.body;

        for (var i = 0; i < newFriend.scores.length; i++) {
            if (newFriend.scores[i] == "1 (Strongly Disagree)") {
                newFriend.scores[i] = 1;
            } else if (newFriend.scores[i] == "5 (Strongly Agree)") {
                newFriend.scores[i] = 5;
            } else {
                newFriend.scores[i] = parseInt(newFriend.scores[i]);
            }
        }

        //empty differences array-->this is where we will collect the differences between the current 
        //user's scores and the scores of all other friends in friendData
        var differencesArray = [];

        //loop through all of the friends in the friends.js file that we stored above in
        //friendData var
        for (var i = 0; i < friendData.length; i++) {
            //sets initial total difference to 0
            var totalDifference = 0;
            //sets a specific variable for the current friend being looped through in the above for loop
            var compFriend = friendData[i];
            //for loop that runs through compfriend's scores
            for (var k = 0; k < compFriend.scores.length; k++) {
                //sets variable of difference between compfriend's score & the current user's score
                var differenceOneScore = Math.abs(compFriend.scores[k] - newFriend.scores[k]);
                //adds the value of differenceOneScore to totalDifference
                totalDifference += differenceOneScore;
            }
            //sets the above empty array's value to the total differences for all friendData that was
            //looped through 
            differencesArray[i] = totalDifference;
        }
        // console.log(differencesArray)
            //sets two variables: the first is for the first score in the differencesArray created above
            //the second sets a score index of 0
        var bestFriendNum = differencesArray[0];
        var bestFriendIndex = 0;

        //for loop to loop through the scores in the differencesArray & determine best friend match
        for (var i = 1; i < differencesArray.length; i++) {
            //creates if statement that will determine lowest number in differencesArray
            if (differencesArray[i] < bestFriendNum) {
                bestFriendNum = differencesArray[i];
                bestFriendIndex = i;
            }
        }

        //pushes the current user's data to friendData aka ../data/friends.js
        friendData.push(newFriend);
        // console.log(newFriend)

        //sends the JSON response
        res.json(friendData[bestFriendIndex]);
    })
}
