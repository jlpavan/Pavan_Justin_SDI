/**
 * Justin
 * 10/24/15.
 * Functions Assignment
 */

//Variables
var player = prompt("Hello, What is your name?");

while(player === ""){
    player = prompt("You did not enter your name.\n\nPlease enter name below.");
}

var gameDecision = prompt("Hi " + player + " Would you like to play the Powerball or the Florida Lottery?\n\nPlease answer Yes or No.");

gameDecision = gameDecision.toLowerCase();

while(gameDecision !== "yes" && gameDecision !== "no"){
    gameDecision = prompt("You did not enter a valid response.\n\nPlease enter Yes to play, or No to decline.");
}

if(gameDecision == "no"){
    alert("Okay, Thank you for visiting. Come again soon!");
}else{
    var gameName = prompt("That is great!\nTo play the Powerball, please type:\t Powerball.\nTo play Florida Lottery, please type:\t Florida");
}

gameName = gameName.toLowerCase();
