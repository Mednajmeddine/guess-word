var game="Guess My  Word";
document.title = game;
document.querySelector("h1").innerHTML=game;
document.querySelector("footer").innerHTML=${game};
var numberOfTries = 5;
var numberOfLetters = 5;
var Try=1;

var secretWord = words[Math.floor(Math.random() * words.length)];
function displayWord() {
    console.log(Word.join(' '));
}

function guessMyWord() {
    while (rest  > 0 && hiddenWord.includes('_')) {
        displayHiddenWord();
        var guessedLetter = prompt("Guess a letter:");
    }
}
$(document).ready(function() {
    var game = "Guess My Word";
    document.title = game;
    $("h1").html(game);
    $("footer").html(game);

    var words = ["javascript", "css", "html",];
    var secretWord = words[Math.floor(Math.random() * words.length)];

    $("#ht").on("click", function() {
        var enteredWord = $("#wr").val().toLowerCase(); //n

        if (enteredWord === secretWord) {
            $("#resultMessage").text("Congratulations! Your word is correct!");
        } else {
            $("#resultMessage").text("Oops! Your word is incorrect. Try again.");
        }
    });
});