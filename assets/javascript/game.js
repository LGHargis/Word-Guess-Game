document.onkeyup = function (event) {

    // Determines which key was pressed.
    var userGuess = event.key;

    // Only run the following code block if the user presses "r" or "p" or "s".
    if ((userGuess === "r") || (userGuess === "p") || (userGuess === "s")) {

        // Alert the userGuess and computerGuess
        alert("User guess: " + userGuess);
    }
