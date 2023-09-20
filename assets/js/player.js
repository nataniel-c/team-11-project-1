// This page will be used to allow the user to play the song that was selected by Chat GPT to represent the user's image
// Image will be displayed

// set elements in the second-page html as objects
var imageEl = document.getElementById('song-image');
var songTitleEl = document.getElementById('song-title');
var authorEl = document.getElementById('author');
var albumEl = document.getElementById('album');

var songEl = localStorage.getItem('song');

function fetchSongID(songName) {
  const url = 'https://spotify23.p.rapidapi.com/search/?q=Space+Oddity&type=tracks&offset=0&limit=1&numberOfTopResults=1';
  console.log(url);
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'f187835d25mshfafee30a0e4bdf5p1f3f9djsn48b7ead96d1e',
      'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
    }
  }
  fetch(url, options)
    .then(function(response) { 
      console.log(response);
      return response.json();
    })
    .then(function(data) {
      console.log(1);
      songID = data.tracks.items.data.id;
      console.log(songID);
      playSong(songID);
    })
  .catch(function(error) { 
    alert("Error: Could not retrieve song data"); 
  });
}

var playSong = function (song) { 
  var playerEl = document.getElementById('embedded-player');
  playerEl.src = "https://open.spotify.com/embed/track/" + songID + "?utm_source=generator&theme=0"; 
  // playerEl.src = "https://open.spotify.com/embed/track/72Z17vmmeQKAg8bptWvpVG?utm_source=generator&theme=0"; 
}

fetchSongID(songEl);

console.log(songEl);

// https://www.youtube.com/watch?v=c5daGZ96QGU
// https://www.youtube.com/watch?v=c5daGZ96QGU
// https://www.youtube.com/watch?v=c5daGZ96QGU