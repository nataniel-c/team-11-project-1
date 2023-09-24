// This page will be used to allow the user to play the song that was selected by Chat GPT to represent the user's image
// Image will be displayed

// set elements in the second-page html as objects
var imageEl = document.getElementById('song-image');

// retrieve localStorage data
var songEl = localStorage.getItem('song');
var songImg = localStorage.getItem('song-img');
console.log(localStorage);

// created function to display the song image
function fillImage() {
  console.log(songImg);
  imageEl.src = songImg;
}

// created function to fetch the song ID from spotify 
function fetchSongID(songName) {
  console.log(songName);
  songName.replace(/\s/g, '%20');
  const url = 'https://spotify23.p.rapidapi.com/search/?q=' + songName + '&type=tracks&offset=0&limit=1&numberOfTopResults=1';
  console.log(url);
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'f187835d25mshfafee30a0e4bdf5p1f3f9djsn48b7ead96d1e',
      'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
    }
  }
  fetch(url, options).then(function(response) { return response.json(); }).then(function(data) {
      console.log(data);
      songID = data.tracks.items[0].data.id;
      console.log(songID);
      playSong(songID);
    }).catch(function(error) { 
    alert("Error: Could not retrieve song data");
    console.log(error);
  });
}

// created function to play selected song using the embedded spotify player
var playSong = function (songIDforPlayer) { 
  var playerEl = document.getElementById('embedded-player');
  playerEl.src = "https://open.spotify.com/embed/track/" + songIDforPlayer + "?utm_source=generator&theme=0"; 
  // playerEl.src = "https://open.spotify.com/embed/track/72Z17vmmeQKAg8bptWvpVG?utm_source=generator&theme=0"; 
}

fetchSongID(songEl);
fillImage();
console.log(songEl);
