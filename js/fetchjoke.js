// Function to fetch a new joke from your API
function fetchJoke() {
  // Make a request to your API endpoint
  fetch("https://hasyam-api.cyclic.app/api/joke")
    .then((response) => response.json())
    .then((data) => {
      // Access the joke from the response data
      const joke = data.joke;

      // Replace newline characters with two HTML line breaks
      const formattedJoke = joke.replace(/\n/g, "<br><br>");

      // Display the joke on the webpage
      const jokeContainer = document.getElementById("joke-container");
      jokeContainer.innerHTML = formattedJoke;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

// Function to fetch a new joke on page load and refresh
function fetchJokeOnLoadAndRefresh() {
  // Fetch a new joke
  fetchJoke();
}

// Event listener for the "Get New Joke" button
const newJokeBtn = document.getElementById("new-joke-btn");
newJokeBtn.addEventListener("click", fetchJoke);

// Fetch a joke when the page loads
window.addEventListener("load", fetchJokeOnLoadAndRefresh);

// Fetch a new joke when the page is refreshed
window.addEventListener("beforeunload", fetchJokeOnLoadAndRefresh);
