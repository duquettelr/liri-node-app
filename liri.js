require("dotenv").config();

var keys = require("./keys");
var axios = require("axios");
var fs = require("fs");
var Spotify = require('node-spotify-api');

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
////////////////////////////////////////


var spotifyThisSong = "spotify-this-song";
//client id 5726119031cb4611aa27f623afd2488d
//client secret b3397cd00460457fb912e25e0ec19468
if (process.argv[2] === spotifyThisSong) {
    var song = process.argv[3]

    var spotify = new Spotify({
        id: "5726119031cb4611aa27f623afd2488d",
        secret: "b3397cd00460457fb912e25e0ec19468"
    });

    spotify.search({ type: 'track', query: song }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }

        console.log(data.tracks.items[0].album.artists[0].name);
        console.log(data.tracks.items[0].album.name);
        console.log(data.tracks.items[0].album.href);
    });
}

//////////////////////////////////////////

var movieThis = "movie-this";

if (process.argv[2] === movieThis) {
    var movie = process.argv[3]

    var URL2 = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";

    axios.get(URL2).then(
        function (response) {
            console.log(response.data.Title);
            console.log(response.data.Year);
            console.log(response.data.imdbRating);
            console.log(response.data.Plot);
            console.log(response.data.Actors);
            console.log(response.data.Country);
            console.log(response.data.Language);
            console.log(response.data.Ratings[1].Value);
        }
    );
}

/////////////////////////////////////////////////
var doWhatItSays = "do-what-it-says";

if (process.argv[2] === doWhatItSays) {

    fs.readFile("random.txt", "utf8", function (error, data) {

        if (error) {
            return console.log(error);
        }

        console.log(data);
        var dataArr = data.split(",");
        console.log(dataArr);

        if (dataArr[0] === spotifyThisSong) {
            var song = dataArr[1];

            var spotify = new Spotify({
                id: "5726119031cb4611aa27f623afd2488d",
                secret: "b3397cd00460457fb912e25e0ec19468"
            });

            spotify.search({ type: 'track', query: song }, function (err, data) {
                if (err) {
                    return console.log('Error occurred: ' + err);
                }

                console.log(data.tracks.items[0].album.artists[0].name);
                console.log(data.tracks.items[0].album.name);
                console.log(data.tracks.items[0].album.href);
            });
        } if (dataArr[0] === movieThis) {
            var movie = dataArr[1];

            var URL2 = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";

            axios.get(URL2).then(
                function (response) {
                    console.log(response.data.Title);
                    console.log(response.data.Year);
                    console.log(response.data.imdbRating);
                    console.log(response.data.Plot);
                    console.log(response.data.Actors);
                    console.log(response.data.Country);
                    console.log(response.data.Language);
                    console.log(response.data.Ratings[1].Value);
                }
            );

        } if (dataArr[0] === concertThis) {
            var artist = dataArr[1];

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

    });
}