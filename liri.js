require("dotenv").config();

var keys = require("./keys");
var axios = require("axios");
var fs = require("fs");

// var spotify = new Spotify(keys.spotify);

// make four if statements that say if the second argument is one of these things you will do the required API call with the third
//argument as the input variable for the API call
//var text = process.argv[2];

var concertThis = "concert-this";

if (process.argv[2] === concertThis) {
    var artist = process.argv[3]

    var URL1 = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

    axios.get(URL1).then(
        function (response) {
            // console.log(response);

            var venueName = response.data[0].venue.name;
            var venueLocation = response.data[0].venue.city + ", " + response.data[0].venue.country;
            var date = response.data[0].datetime;

            console.log(date);
            console.log(venueName);
            console.log(venueLocation);

        }
    );
}



var spotifyThisSong = "spotify-this-song";
//client id 5726119031cb4611aa27f623afd2488d
//client secret b3397cd00460457fb912e25e0ec19468

var movieThis = "movie-this";

var doWhatItSays = "do-what-it-says";