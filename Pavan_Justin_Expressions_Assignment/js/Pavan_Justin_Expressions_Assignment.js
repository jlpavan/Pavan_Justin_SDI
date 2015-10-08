/**
 * Justin Pavan
 * 8 October 2015
 * Expressions Assignment
 *
 *This program calculates the user's body fat percentage in accordance with the U.S Army's body composition
 * program (AR 600-9). This program uses the the calculations of the users sex, age, height, and weight to determine
 * if the user is compliant with Army standards.
 */

//arrays
var maleAllowedBFP = [20,22,24,26];   //allowable male body fat percentage for ages [17-20,21-27,28-39,40<]
var femaleAllowedBFP = [30,32,34,36]; //allowable female body fat percentage for ages [17-20,21-27,28-39,40<]

//variables

var sex = prompt("Are you Male or Female?"); //prompting for user input on sex to determine how to calculate
var age = prompt("How old are you?"); //prompting for user input on age to determin how to calculate
var height = prompt("How tall are you in inches? Please round to the nearest half inch."); // prompting for height to calculate
var weight = prompt("How much do you weight in pounds?"); // prompting for user's weight to calculate

// Adjusting values to prepare to for calculations

sex = sex.toLowerCase(); //reassigning the value of sex so that the string will be consistent after the user inputs value
age = Number(age); //casting the variable age into a number
height = Number(height); // casting the variable height into a number
weight = Number(weight); // casting the variable weight into a number


