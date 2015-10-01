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

//prompt for a a string variable to compare to booleanValue
    var usersResponse = prompt("Hello " + usersName + ", Are you my instructor?");

//comparing the conditions of booleanValue to usersName to determine response
    if(booleanValue == usersResponse){
        alert("Hi Professor, let me tell you about myself. I am currently in the Army.\nI have been in the Army for ," + armyYears + "years.I enrolled at " + schoolName +
            " \nbecause I wanted to learn Mobile Development. I am very Excited to be in your class!")
    }else{
        alert("Sorry, I must have the wrong person, Goodbye!")
    }

