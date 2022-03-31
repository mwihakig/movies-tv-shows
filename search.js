
// function to call movie/tv show API
var getListings = function() {
    fetch("");
  }


fetch("").then(function(response) {
    response.json().then(function(data) {
      console.log(data);
    });
  })

//search form input
var userFormEl = document.querySelector("#user-form");
var nameInputEl = document.querySelector("#form-control");

var formSubmitHandler = function(event) {
    event.preventDefault();
    console.log(event);
  }

userFormEl.addEventListener("submit", formSubmitHandler);

// get value from input element
var username = nameInputEl.value.trim();

if (username) {
  getUserRepos(username);
  nameInputEl.value = "";
} else {
  alert("Please enter a GitHub username");
}