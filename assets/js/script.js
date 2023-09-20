
// Phi's      ChatGPT key: b3aceeb13amshd617f234ed3b59dp130b72jsn2d2b88275752
// Nataniel's ChatGPT key: f187835d25mshfafee30a0e4bdf5p1f3f9djsn48b7ead96d1e
localStorage.clear();

var fetchURL = 'https://microsoft-computer-vision3.p.rapidapi.com/describe?language=en&maxCandidates=1';
var submitEl = document.querySelector(".submit-form");
var previewBtn = document.querySelector("#preview-btn");


function fetchDescription(URL) {
    var options = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': 'b3aceeb13amshd617f234ed3b59dp130b72jsn2d2b88275752',
            'X-RapidAPI-Host': 'microsoft-computer-vision3.p.rapidapi.com'
        },
        body: JSON.stringify({ url: URL })
    };
    
    fetch(fetchURL, options)
    .then(function(response) { return response.json(); }).then(function(data){ 
        console.log(data);
        songDescription = data.description.tags.toString();
        console.log(songDescription);
        fetchSongTitle(songDescription);
    });
};

function handleSubmit(event) {
    event.preventDefault();
    var userInput = document.querySelector("#userInput");
    var inputURL = userInput.value;
    console.log(inputURL);
    var imageContainer = document.querySelector("#image-container");
    imageContainer.classList.remove("hidden");
    imageContainer.classList.add("show");
    var uploadedImage = document.querySelector("#uploaded-image");
    uploadedImage.src = inputURL;
    fetchDescription(inputURL);
}


function fetchSongTitle(description) {
    const url = 'https://chatgpt-api8.p.rapidapi.com/';
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': chatgptKey,
            'X-RapidAPI-Host': 'chatgpt-api8.p.rapidapi.com'
        },
        body: [
            {
                content: 'In one song name and artist, give me an existing song based on the following language' + description,
                role: 'user'
            }
        ]
    };

    fetch(fetchURL, options)
    .then(function(response) {
        return response.json(); 
    }).then(function(data){ 
        console.log(data);
        localStorage.setItem("song", data);
    });
};

submitEl.addEventListener("submit", handleSubmit);

previewBtn.addEventListener("click", startPlayer);

function startPlayer() {
    window.location.assign("second-page.html");
}
// comment out fetch and then const response
