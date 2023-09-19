/* 
When a user opens the website, the user will see a few things:
    - A navbar with links to the page's Github and info about the developers.
    - A 'choose file' button that allows the user to select a file.
    - A 'submit' button that allows ther user to send a selected file to an AI GPT to convert into a song.
    - A 'library' tab to view previous songs and images.
*/

//Idea 2 won by majority

//Idea 2:

/*
By clicking the 'choose file' button, a user can choose a file from the user's folders.
The image will be shown on the page once the user select an image.
Whichever file you've chosen, the AI will look for songs that are or related to the image.
The AI will then give a description of the image and look for a related song to use and play.
If the AI cannot find a song relating to the given image, then it will throw out a 'Muffler' error and will ask the user to choose a different image.
*/

const submitBtn = document.querySelector("#submit");
const userInput = document.getElementById("userInput");

const url = 'https://microsoft-computer-vision3.p.rapidapi.com/describe?language=en&maxCandidates=1';
const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/json',
		'X-RapidAPI-Key': 'b3aceeb13amshd617f234ed3b59dp130b72jsn2d2b88275752',
		'X-RapidAPI-Host': 'microsoft-computer-vision3.p.rapidapi.com'
	},
    body: JSON.stringify({ url: "https://img.texasmonthly.com/2022/05/boots-oneal-work-horse.jpg?auto=compress&crop=faces&fit=scale&fm=pjpg&h=768&ixlib=php-3.3.1&q=45&w=1024&wpsize=large" })
};


function fetchDescription() {
    console.log(1);
    fetch('https://microsoft-computer-vision3.p.rapidapi.com/describe?language=en&maxCandidates=1', options).then(function(response) {
        console.log(2);
        return response.json();
    }).then(function(data){
        console.log(data);
    });
    
};

function handleSubmit(event) {
    event.preventDefault();
    fetchDescription();
}

submitBtn.addEventListener("submit", handleSubmit);
fetchDescription();

