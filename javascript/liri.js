// add code to read and set any environment variables with the dotenv package
require("dotenv").config();
let fs = require('fs');
//Add the code required to import the keys.js file and store it in a variable.
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');

//access keys info
var spotify = new Spotify(keys.spotify);

var action = process.argv[2];
var value = process.argv[3];
//Make it so liri.js can take in one of the following commands

switch (action) {
    // concert-this
    case "concert-this":
        break;


        // spotify-this-song
    case "spotify-this-song":
        spotifyThisSong();
        break;

};

function spotifyThisSong() {
    // fs.readFile('keys.js', 'utf-8', function (err, data) {
    //     if (err) {
    //         return console.log(err);
    //     }
    //     console.log(data)
    // })
    // console.log(keys)
    var spotify = new Spotify({
        id: keys.spotify.id,
        secret: keys.spotify.secret
    });

    spotify
        .search({
            type: 'track',
            query: value,
            limit: 1
        }).then(function (data, err) {
            if (err) {
                return console.log('Error occurred: ' + err);
            }
            // console.log(JSON.stringify(data));
            // console.log("Spotify Link: " + data.tracks.items[0].artists[0].external_urls.spotify);
            console.log(
                "+---------------RESULT-----------------------+" +
                "\nSong: " + data.tracks.items[0].name +
                "\nArtist: " + data.tracks.items[0].artists[0].name +
                "\nAlbum: " + data.tracks.items[0].album.name +
                "\nSpotify Link: " + data.tracks.items[0].external_urls.spotify +
                "\n+---------------------------------------------+"
            );

        });
}


// movie-this
// var axios = require('axios');
// axios
//     .get("http://www.omdbapi.com/?i=tt3896198&apikey=5c223620")
//     .then(function (response) {
//         // If the axios was successful...
//         // Then log the body from the site!
//         console.log(response.data);
//     })
//     .catch(function (error) {
//         if (error.response) {
//             // The request was made and the server responded with a status code
//             // that falls out of the range of 2xx
//             console.log(error.response.data);
//             console.log(error.response.status);
//             console.log(error.response.headers);
//         } else if (error.request) {
//             // The request was made but no response was received
//             // `error.request` is an object that comes back with details pertaining to the error that occurred.
//             console.log(error.request);
//         } else {
//             // Something happened in setting up the request that triggered an Error
//             console.log("Error", error.message);
//         }
//         console.log(error.config);
//     });

// do-what-it-says