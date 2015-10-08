/**
 * Justin Pavan
 * 10/08/2015
 * Expressions Assignment
 *
 * This program is used to calculate an adults body fat % using bmi, age, and gender.
 */


//variables used to complete the program
var myCalculations = [.45,.025,1.20,.23,10.8,5.4]; //the various numbers needed for BMI and body fat calculations
var sex = prompt("Are you Male or female?");//necessary for determining calculation for BF%
var age = prompt("How old are you?");//necessary for determining calculations for BF%
var height = prompt("How tall are you in inches?");//necessary for determining BMI
var weight = prompt("How much do you weight in pounds?");//necessary for determining BMI

//calculations for BMI
weight *= myCalculations[0];//converting weight to kilograms
height *= myCalculations[1];//converting height to meters
height *= height;//multiplying height to itself
bmi = weight / height; //dividing weight by height to get bmi

//converting sex to a number value

sex = sex.toLowerCase(); //Converting sex to all lower case for more accurate calculations

if(sex !== "male" && sex !== "female"){
    alert("You did not select a valid gender. Please refresh the page and try again.")}
if(sex == "male"){
    sex = 1;//setting sex to 1 in the case of male for calculations
}
if(sex == "female") {
    sex = 0;// setting sex to 0 in the case of female for calculations
}

//Calculations for Body fat percentage

var bodyFat =  myCalculations[2] * bmi + myCalculations[3] * age - myCalculations[4] * sex - myCalculations[5];




