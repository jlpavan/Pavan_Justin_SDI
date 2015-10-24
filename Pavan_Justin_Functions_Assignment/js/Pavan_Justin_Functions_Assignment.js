/**
 * Justin
 * 10/24/15.
 * Functions Assignment
 */
//Functions

function gameNumbers(min, max) {
    var randomNumber = [];

    for (var i = 0; i < 6 ; i++){
        randomNumber[i] = Math.random()* (max - min) + min;
        randomNumber[i] = Math.round(randomNumber[i]);
    }
    return randomNumber;
}
//Variables
var player = prompt("Hello, What is your name?");

while(player === ""){
    player = prompt("You did not enter your name.\n\nPlease enter name below.");
}

var gameDecision = prompt("Hi " + player + " Would you like to play the Powerball or the Florida Lottery?\n\nPlease answer Yes or No.");

gameDecision = gameDecision.toLowerCase();

while(gameDecision !== "yes" && gameDecision !== "no"){
    gameDecision = prompt("You did not enter a valid response.\n\nPlease enter Yes to play, or No to decline.");
    gameDecision = gameDecision.toLowerCase()
}

if(gameDecision == "no"){
    alert("Okay, Thank you for visiting. Come again soon!");
}else{
    var gameName = prompt("That is great!\nTo play the Powerball, please type:\t Powerball.\nTo play Florida Lottery, please type:\t Florida");
}

gameName = gameName.toLowerCase();

while(gameName != "powerball" && gameDecision != "florida"){
    gameName = prompt("You did not enter a valid response.\n\nPlease enter Powerball or Florida.");
    gameName = gameName.toLowerCase();
}

if(gameName == "powerball"){
    gameNumbers = gameNumbers(1,35);

}


