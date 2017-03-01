		var letters = ["r", "u", "m"];
		var guessedLetters = [];
		var letterToGuess = null;
		var totalGuesses = 9;
		var guessesLeft = 9;

		//win&Losses
		var wins = 0;
		var losses = 0;

		var updateGuessesLeft = function() {
			document.querySelector("#guesses-left").innerHTML = guessesLeft;
		};
		var updateLetterToGuess = function() {
			this.letterToGuess =this.letters[Math.floor(Math.random() * this.letters.length)];
		};
		var updateGussesSoFar = function() {
			document.querySelector("#guesses-so-far").innerHTML = guessedLetters.join(",");
		};
		var reset = function() {
			totalGuesses = 9;
			guessesLeft = 9;
			guessedLetters = [];
			updateLetterToGuess();
			updateGuessesLeft();
			updateGussesSoFar();

		};
		updateLetterToGuess();
		updateGuessesLeft();
		document.onkeyup = function(event) {
			guessesLeft--;
			var letter = String.fromCharCode(event.keyCode).toLowerCase();
			guessedLetters.push(letter);
			updateGuessesLeft();
			updateGuessesSoFar();
			if (letter === letterToGuess) {
				wins++;
				document.querySelector("#wins").innerHTML = wins;
				reset();
			}
			if (guessesLeft === 0) {
				losses++;
				document.querySelector("#losses").innerHTML = losses;
				reset();

			}
		};
	
	