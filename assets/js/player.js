// This page will be used to allow the user to play the song that was selected by Chat GPT to represent the user's image
// Image will be displayed

// set image element info as an object
// imageEl = document.querySelector('img');

// set song name given by chatgpt as an object

// Fetch song data from streaming platform

// 

// From Spotify API:

var 
// This contains the "Client ID" and "Client Secret" that is necessary to use spotify's api to call a music search

fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    body: new URLSearchParams({
        'grant_type': 'client_credentials',
        'client_id': '610cc432c735405f9b881d0c243747b9',
        'client_secret': '192287d2a7914855aaab1a273d77ab5a'
    })
});

// 
fetch('https://api.spotify.com/v1/artists/4Z8W4fKeB5YxbusRsdQVPb', {
  headers: {
    'Authorization': 'Bearer  BQDBKJ5eo5jxbtpWjVOj7ryS84khybFpP_lTqzV7uV-T_m0cTfwvdn5BnBSKPxKgEb1'
  }
});