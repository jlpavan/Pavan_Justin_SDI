/**
 * Justin
 * 10/15/15.
 * Conditionals Assignment
 *
 * This Program is made to determine how many boxes of a specific size can fit in a container of that is 7 feet wide,
 * 10 feet in length, and 8 feet tall.
 */

alert("To determine how many of a particular box you can fit into a container that is 7 feet wide, 10 feet in lenght, and 8 feet tall, " +
    "please insert the information requested when required.");
// Variables
var containVolume = (967680); //The volume of the container in inches
var boxLength = prompt("What is the length of your box in inches?");//User's insert for box length.

boxLength = Number(boxLength);//converting boxLegth from string to number type.

//Validating that the the variable boxLength is a number variable with no string variables
while(isNaN(boxLength)){
    boxLength = prompt("You did not enter a valid number. Please try again?"); //asking the user to insert another value
}
var boxWidth = prompt("what is the width of your box in inches?");  // user's input for box's width

boxWidth = Number(boxWidth);//converting boxWidth from a string to a number variabl.

//Validating that the variable boxWidth is a number variable with no string variables
while(isNaN(boxWidth)){
    boxWidth = prompt("You did not enter a valid number. Please try again?");//asking the user to insert another value
}
var boxHeight = prompt("What is the height of your box in inches?"); //User's input for box's height

boxHeight = Number(boxHeight);//converting boxHeight from a string to a number variabl.

//Validating that the variable boxLength is a number variable with no string variables
while(isNaN(boxHeight)){
    boxHeight = prompt("You did not enter a valid number. Please try again?");//asking the user to insert another value
}





