// Phi's ChatGPT key: b3aceeb13amshd617f234ed3b59dp130b72jsn2d2b88275752
// const chatGPTKey = 'b3aceeb13amshd617f234ed3b59dp130b72jsn2d2b88275752';

// Nataniel's ChatGPT key: 'f187835d25mshfafee30a0e4bdf5p1f3f9djsn48b7ead96d1e'
const chatGPTKey = 'f187835d25mshfafee30a0e4bdf5p1f3f9djsn48b7ead96d1e';



localStorage.clear();

var fetchURL = 'https://microsoft-computer-vision3.p.rapidapi.com/describe?language=en&maxCandidates=1';
var submitEl = document.querySelector(".submit-form");
var previewBtn = document.querySelector("#preview-btn");


// created function using the microsoft computer vision api to describe the userInput image then call the fetchSongTitle function
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

    fetch(fetchURL, options).then(function (response) { return response.json(); }).then(function (data) {
        console.log(data);
        songDescription = data.description.tags.toString();
        console.log(songDescription);
        fetchSongTitle(songDescription);
    });
};

// created function that will take userInput and display it to the page in the image container and set the input to local storage
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
    localStorage.setItem("song-img", inputURL);
    fetchDescription(inputURL);
}


// created function that uses description created from the fetchDescription function and uses the chatgpt api to generate a song title, it then sets that song title to local storage
function fetchSongTitle(description) {
    console.log(description);
    const chatGPTurl = 'https://chatgpt-api8.p.rapidapi.com/';
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': chatGPTKey,
            'X-RapidAPI-Host': 'chatgpt-api8.p.rapidapi.com'
        }, body: JSON.stringify([{
            content: 'In a single answer of a song name, and exclude artist name, give me an existing song based on the following language: ' + description,
            role: 'user'
        }])
    };

    fetch(chatGPTurl, options).then(function (response) { return response.json(); }).then(function (data) {
        console.log(data.text);
        console.log(data);
        localStorage.setItem("song", data.text);
    });
};

// added event listener to the submit button to run the handleSubmit function
submitEl.addEventListener("submit", handleSubmit);

// added event listener on the preview button to run the startPlayer function when clicked
previewBtn.addEventListener("click", startPlayer);

// created function to render the second page html when called
function startPlayer() { window.location.assign("second-page.html"); }
