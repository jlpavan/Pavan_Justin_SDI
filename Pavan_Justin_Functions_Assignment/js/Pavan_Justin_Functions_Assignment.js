/**
 * Justin
 * 10/24/15.
 * Functions Assignment
 */
//Function - This function is to find the value of random numbers for application. min and max are the parameters for function.
function gameNumbers(min, max) {
    var randomNumber = [];

    // var i is to set the index of the loop and to also store the value in the proper index in the array randomNumbers
    for (var i = 0; i < 6 ; i++){
        randomNumber[i] = Math.random()* (max - min) + min;
        randomNumber[i] = Math.round(randomNumber[i]);
    }
    return randomNumber; //Returning the value of the array randomNumber to the function gameNumbers
}
//Variable to hold users name
var player = prompt("Hello, What is your name?");

//while loop to validate the user has inserted some type of data into player variable.
while(player === ""){
    player = prompt("You did not enter your name.\n\nPlease enter name below.");
}

//variable to determine if the user wants to play either lottery
var gameDecision = prompt("Hi " + player + ", Would you like to play the Powerball or the Florida Lottery?\n\nPlease answer Yes or No.");

//re-assigning the value to be all lower case for more accurate validation
gameDecision = gameDecision.toLowerCase();

//while loop to validate the user has input the correct responses, and if not allow them to do so
while(gameDecision !== "yes" && gameDecision !== "no"){
    gameDecision = prompt("You did not enter a valid response.\n\nPlease enter Yes to play, or No to decline.");
    gameDecision = gameDecision.toLowerCase()
}
//conditional statement to determine if wether to continue with the program in application to users input.
if(gameDecision == "no"){ //Condition to terminate application
    alert("Okay, Thank you for visiting. Come again soon!");
}else{ //condition to continue application
    var gameName = prompt("That is great!\nTo play the Powerball, please type:\t Powerball.\nTo play Florida Lottery, please type:\t Florida");
}

//re-assigning the value to be all lower case for more accurate validation
gameName = gameName.toLowerCase();

//while loop to determine if the response is valid and to have the user re input value if not
while(gameName !== "powerball" && gameName !== "florida"){
    gameName = prompt("You did not enter a valid response.\n\nPlease enter Powerball or Florida.");
    gameName = gameName.toLowerCase();
}

//condition - if user chooses powerball. Call function gameNumbers to get the random numbers for variable gameTicket
if(gameName == "powerball") {
    var gameTicket = gameNumbers(1, 35);//the powerball arguments for the gameNumbers function the min and max

    //While loop to make sure that the first 5 random numbers are not the same, in accordance with powerball rules.
    //If any of the first 5 random numbers are the same it will recall the function until it finds the appriate order of numbers
    while (gameTicket[0] == gameTicket[1] || gameTicket[0] == gameTicket[2] || gameTicket[0] == gameTicket[3] || gameTicket[0] == gameTicket[4]
    || gameTicket[0] == gameTicket[5] || gameTicket[1] == gameTicket[2] || gameTicket[1] == gameTicket[3] || gameTicket[1] == gameTicket[4] ||
    gameTicket[1] == gameTicket[5] || gameTicket[2] == gameTicket[3] || gameTicket[2] == gameTicket[4] || gameTicket[2] == gameTicket[5] ||
    gameTicket[3] == gameTicket[4] || gameTicket[3] == gameTicket[5] || gameTicket[4] == gameTicket[5]) {

        gameTicket = gameNumbers(1, 35);
    }
}else{//else statement calling the gameNumbers function to establish florida lottery numbers using different arguments in accordance with
      //florida lottery rules.

    gameTicket = gameNumbers(1,53); //The florida lottery arguments for the gameNumbers function.

    //While loop to gareentee that none of the 6 random numbers are the same. if so gameNumbers function will be called again till appropriate
    //order of numbers meet the while conditions.
    while (gameTicket[0] == gameTicket[1] || gameTicket[0] == gameTicket[2] || gameTicket[0] == gameTicket[3] || gameTicket[0] == gameTicket[4]
    || gameTicket[0] == gameTicket[5] || gameTicket[0] == gameTicket[6] || gameTicket[1] == gameTicket[2] || gameTicket[1] == gameTicket[3] ||
    gameTicket[1] == gameTicket[4] || gameTicket[1] == gameTicket[5] || gameTicket[1] == gameTicket[6] || gameTicket[2] == gameTicket[3] ||
    gameTicket[2] == gameTicket[4] || gameTicket[2] == gameTicket[5] || gameTicket[2] == gameTicket[6] || gameTicket[3] == gameTicket[4] ||
    gameTicket[3] == gameTicket[5] || gameTicket[3] == gameTicket[6] || gameTicket[4] == gameTicket[5] || gameTicket[4] == gameTicket[6] ||
    gameTicket[5] == gameTicket[6]) {

        gameTicket = gameNumbers(1,53);
    }

}

//Output concatenation to the console with the users lottery numbers
console.log("Okay " + player + ", Your " + gameName + " Lottery numbers are " + gameTicket + ". Good Luck!");

//Alert box concatenation for the users lottery numbers.
alert("Okay " + player + ", Your " + gameName + " Lottery numbers are " + gameTicket + ". Good Luck!");


/* {-------------Test Results -----------------}
for player inserted no name, and was constantly prompted to input a value >worked as expected
            inserted a name, wasn't not prompted to input a value again worked as expected

for gameDecision inserted nothing, constantly prompted to input value > worked as expected
                          adsf;ljk, constantly prompted to input value > worked as expected
                          YEs, accepted > worked as expected
                          NO, accepted > worked as expected
for gameName inserted: nothing, constantly prompted to input value > worked as expected
                       asdf;ljk, constantly prompted to input value > worked as expected
                       PowERbALl, accepted > worked as expected
                       FloRIDA, accepted > worked as excepted
                       powerball, accepted > worked as expected
                       Powerball, accepted > worked as expected
                       Florida, accepted > ... 
                       florida, accepted > ...
 */



