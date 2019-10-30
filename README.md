# liri-node-app

LIRI is a command line node app that takes in parameters and gives you back data.
It's allows you to search your favorite movie, songs and concert of an artist easier.

## It takes in the following commands: ##

### spotify-this-song ###

Give it a song name, it will return you the following:
* Song Name
* Artist
* Album
* External link to spotify

Search results are returned from node-spotify-api

![spotify-this-song](https://user-images.githubusercontent.com/52692899/67827748-2a179780-fa8e-11e9-9eb9-20834cd765de.gif)


### movie-this ###

Give it a song name, it will return you the following:

* Movie Title
* IMDB Rating
* Rotten Tomato Rating
* Release Year
* Movie Language
* Produced Country
* Movie Plot
* Actors

Using axios get request, search results are returned from OMDB api then console.logged

![movie-this](https://user-images.githubusercontent.com/52692899/67828452-af9c4700-fa90-11e9-8c7a-0156eb052f55.gif)

### movie-this ###

Give it a artist name, it will return you the following:

* Name of the venue
* Venue location
* Date of the Event

Using axios get request, search results are returned from bandsintown api then for loop each event to print out the result in console.log

![concert-this](https://user-images.githubusercontent.com/52692899/67829508-b4fb9080-fa94-11e9-9f86-1b12a3b01bf9.gif)


