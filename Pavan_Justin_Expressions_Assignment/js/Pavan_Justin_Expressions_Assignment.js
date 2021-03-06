/**
 * Justin Pavan
 * 10/08/2015
 * Expressions Assignment
 *
 * This program is used to calculate an adults body fat % using bmi, age, and gender. The formula for BMI and BF% are;
 * BMI = weight * .45 /(height * .025)^2
 * BF% = (1.20 x BMI) + (0.23 x Age) – (10.8 x gender) – 5.4
 */


//variables used to complete the program
var myCalculations = [.45,.025,1.20,.23,10.8,5.4]; //the various numbers needed for BMI and body fat calculations

var sex = prompt("Are you Male or female?");//necessary for determining calculation for BF%

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

//additional variables

var age = prompt("How old are you?");//necessary for determining calculations for BF%
var height = prompt("How tall are you in inches?");//necessary for determining BMI
var weight = prompt("How much do you weight in pounds?");//necessary for determining BMI

//Converting variables age, height, and weight to numbers

age = Number(age);// converted so i can us it to calculate body fat %
height = Number(height);//converted so i can us it to calculate body fat %
weight = Number(weight);//converted so i can us it to calculate body fat %

//calculations for BMI
weight *= myCalculations[0];//converting weight to kilograms
height *= myCalculations[1];//converting height to meters
height *= height;//multiplying height to itself
bmi = weight / height; //dividing weight by height to get bmi
bmi = bmi.toFixed();//Converted bmi to round to the nearest integer

//Calculations for Body fat percentage
var bodyFat =  myCalculations[2] * bmi + myCalculations[3] * age - myCalculations[4] * sex - myCalculations[5];

bodyFat = bodyFat.toFixed();//converted bodyFat to round to the nearest integerl

//alert to the user his or her results
var results = ("Your body fat percentage is " + bodyFat + "% and have a BMI of " + bmi+".");
alert(results);

//console log the user's results
console.log(results);

/**To test my program I put in these values
 * response 1 = MaLE, 27, 74, 212 (Program worked as expected.
 * response 2 = FMSD, (was notified that I input an invalid response and to refresh the page. Like expected
 * response 3 = FeMALe, 22, 60, 145. program worked as expected.
 */
