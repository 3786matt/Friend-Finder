var path = require('path');
var friendsObject = require('../data/friends.js');


var sumDifference = 0;


module.exports = function(app){

  app.get('/api/friends', function(req, res){
    //i think i need to go to refer to json, but im not specifically sure how
    res.json(friends);
});

  app.post('/api/friends', function(req, res){

    var bestMatch = {
          name: '',
          matchDifference: 0,
          image: ''
    };

    var userInfo = req.body;
    var userName = userInfo.name;
    var userImage = userInfo.image;
    var userPoints = userInfo.scores;

    for(var i=0; i<[people].length-1; i++){
      console.log(people[i].name)
      matchDifference = 0;
      
      for(var i=0; i<10; i++){
        sumDifference += Math.abs(parseInt(userPoints[i])-parseInt(people[i].scores[i]));

        if(sumDifference<=bestMatch.matchDifference){
            bestMatch.name = people[i].name;
            bestMatch.image = people[i].image;
            bestMatch.matchDifference = sumDifference;
        }
      }
    }

          people.push(userInfo);

          res.json(bestMatch);
    })
}