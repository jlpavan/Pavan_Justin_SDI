/**
 * Justin Pavan
 * SDI-1510
 * Output Assignment
 */
//creating a variable that represents a boolean value of true
    var booleanValue = true;

//Creating a string variable called school
    var schoolName = "Full Sail University";

//creating a string variable for how many years I have been in the army
    var armyYears = 4;

//prompt for string variable for user's name
    var usersName = prompt("Hello, my name is Justin Pavan. What is your name?");


//prompt for a a string variable to compare to condition
    var usersResponse = prompt("Hello " + usersName + ", Are you my instructor? Answer Yes or No");

//setting usersResponse to be lower case so the variable will always work with the future condition
var usersResponse = usersResponse.toLowerCase();

//comparing the conditions of booleanValue to usersName to determine response
    if(usersResponse == "yes"){
        alert("Hi Professor, let me tell you about myself. I am currently in the Army.I have been in the Army for " + armyYears + "years. I enrolled at " + schoolName +
            " because I wanted to learn Mobile Development. I am very excited to be in your class!")
    }else {
        alert("Sorry, I must have the wrong person, Goodbye!")
    }

//console output for boolean variable
console.log("The fact my name is Justin Pavan is " + booleanValue);

//console output for number variable
console.log("I have served " + armyYears + " years in the Army.");

//console output for string variable
console.log("I am currently studying Mobile Development at " + schoolName);
