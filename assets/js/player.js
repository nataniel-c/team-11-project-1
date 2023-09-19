// This page will be used to allow the user to play the song that was selected by Chat GPT to represent the user's image
// Image will be displayed

// set elements in the second-page html as objects
imageEl = document.getElementById('song-image');
songTitleEl = document.getElementById('song-title');
authorEl = document.getElementById('author');
albumEl = document.getElementById('album');
playerEl = document.getElementById('embedded-player');

// The following function is used to set the searchQuery variable to the song name that is given from the image description api
// function getParams() {
//   // Get the search params out of the URL (i.e. `?q=london&format=photo`) and convert it to an array (i.e. ['?q=london', 'format=photo'])
//   var searchParamsArr = document.location.search.split('&');

//   // Get the query and format values
//   var query = searchParamsArr[0].split('=').pop();
//   var format = searchParamsArr[1].split('=').pop();
// }

function fetchSongID() {
  const url = 'https://spotify23.p.rapidapi.com/search/?q=' + searchQuery + '&type=tracks&offset=0&limit=1&numberOfTopResults=1';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'f187835d25mshfafee30a0e4bdf5p1f3f9djsn48b7ead96d1e',
      'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
    }
  }
  fetch(url, options).then(function(response) {
      return response.json();
    }).then(function(data) {
      songID = data.tracks.items.data.id;
      console.log(songID);
      playSong(songID);
    }).catch(function(error) {
      alert("Error: Could not retrieve song data");
    });
}

var playSong = function (song) { playerEl.src = "https://open.spotify.com/embed/track/" + songID + "?utm_source=generator&theme=0"; }

// https://www.youtube.com/watch?v=c5daGZ96QGU
// https://www.youtube.com/watch?v=c5daGZ96QGU
// https://www.youtube.com/watch?v=c5daGZ96QGU