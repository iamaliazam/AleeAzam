// function checkCharacter(input) {
//     // Convert input to its ASCII code
//     var charCode = input.charCodeAt(0);

//     // Check if the input is a number
//     if (charCode >= 48 && charCode <= 57) {
//         console.log(input + " is a number.");
//     }
//     // Check if the input is an uppercase letter
//     else if (charCode >= 65 && charCode <= 90) {
//         console.log(input + " is an uppercase letter.");
//     }
//     // Check if the input is a lowercase letter
//     else if (charCode >= 97 && charCode <= 122) {
//         console.log(input + " is a lowercase letter.");
//     }
//     // If the input doesn't match any of the above conditions
//     else {
//         console.log(input + " is not a valid character.");
//     }
// }

// // Test cases
// var input1 = '5';
// var input2 = 'A';
// var input3 = 'b';

// checkCharacter(input1);
// checkCharacter(input2);
// checkCharacter(input3);






// function compareIntegers(num1, num2) {
//     if (num1 === num2) {
//         console.log("The two integers are equal.");
//     } else if (num1 > num2) {
//         console.log(num1 + " is larger than " + num2 + ".");
//     } else {
//         console.log(num2 + " is larger than " + num1 + ".");
//     }
// }

// // Test cases
// var num1 = parseInt(prompt("Enter the first integer:"));
// var num2 = parseInt(prompt("Enter the second integer:"));

// compareIntegers(num1, num2);





// function checkNumber(number) {
//     if (number > 0) {
//         console.log(number + " is a positive number.");
//     } else if (number < 0) {
//         console.log(number + " is a negative number.");
//     } else {
//         console.log("The number is zero.");
//     }
// }

// // Taking input from the user
// var userInput = parseFloat(prompt("Enter a number:"));

// // Checking the number
// checkNumber(userInput);






// function isVowel(char) {
//     // Convert the character to lowercase to handle uppercase vowels as well
//     var lowerCaseChar = char.toLowerCase();
    
//     // Check if the character is a vowel
//     if (lowerCaseChar === 'a' || lowerCaseChar === 'e' || lowerCaseChar === 'i' || lowerCaseChar === 'o' || lowerCaseChar === 'u') {
//         return true;
//     } else {
//         return false;
//     }
// }

// // Test cases
// var inputChar = prompt("Enter a character:");

// // Check if the input character is a vowel
// var result = isVowel(inputChar);

// // Output the result
// if (result) {
//     console.log(inputChar + " is a vowel.");
// } else {
//     console.log(inputChar + " is not a vowel.");
// }






// // Store correct password in a variable
// var correctPassword = "myPassword123";

// // Ask user to enter their password
// var userPassword = prompt("Enter your password:");

// // Validate the passwords
// if (userPassword === "") {
//     console.log("Please enter your password.");
// } else if (userPassword === correctPassword) {
//     console.log("You've entered a correct password.");
// } else {
//     console.log("Incorrect password.");
// }






// var greeting;
// var hour = 13;
// if (hour < 18) {
//     greeting = "Good day";
// } else {
//     greeting = "Good evening";
// }

// console.log(greeting);






// // Take input from the user
// var time = parseInt(prompt("Enter the time (in 24-hour clock format):"));

// // Check if the input is valid
// if (time >= 0 && time <= 2400) {
//     // Convert time to 12-hour clock format
//     var hour, period;
//     if (time >= 1200) {
//         period = 'PM';
//     } else {
//         period = 'AM';
//     }

//     if (time === 0 || time === 2400) {
//         hour = 12;
//     } else if (time > 1200) {
//         hour = Math.floor((time - 1200) / 100);
//     } else {
//         hour = Math.floor(time / 100);
//     }

//     var minute = time % 100;

//     // Display the time in 12-hour clock format
//     console.log("The time in 12-hour clock format is: " + hour + ":" + (minute < 10 ? '0' : '') + minute + " " + period);
// } else {
//     console.log("Invalid input! Please enter a time between 0000 and 2400.");
// }






// // 1. Declare an empty array using JS literal notation to store student names in future.
// var studentNamesLiteral = [];

// // 2. Declare an empty array using JS object notation to store student names in future.
// var studentNamesObject = new Array();

// // 3. Declare and initialize a strings array.
// var stringsArray = ["apple", "banana", "cherry"];

// // 4. Declare and initialize a numbers array.
// var numbersArray = [1, 2, 3, 4, 5];

// // 5. Declare and initialize a boolean array.
// var booleanArray = [true, false, true];

// // 6. Declare and initialize a mixed array.
// var mixedArray = ["apple", 2, true, "banana", false, 5];

// // 7. Declare and Initialize an array and store available education qualifications in Pakistan.
// var qualificationsArray = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

// // Show the listed qualifications in the browser
// document.write("<h2>Educational Qualifications in Pakistan:</h2>");
// document.write("<ul>");
// for (var i = 0; i < qualificationsArray.length; i++) {
//     document.write("<li>" + qualificationsArray[i] + "</li>");
// }
// document.write("</ul>");






// // Array to store student names
// var studentNames = ["Alice", "Bob", "Charlie"];

// // Array to store scores of students
// var scores = [430, 380, 450]; // Scores out of 500 for each student

// // Display scores and percentages of students
// for (var i = 0; i < studentNames.length; i++) {
//     var percentage = (scores[i] / 500) * 100;
//     console.log(studentNames[i] + " scored " + scores[i] + " out of 500, with a percentage of " + percentage.toFixed(2) + "%.");
// }







// // Initialize an array with color names
// var colors = ["Red", "Green", "Blue"];

// // Display the array elements in the browser
// document.write("<h3>Initial Array:</h3>");
// document.write("<p>" + colors.join(", ") + "</p>");

// // a. Add color to the beginning of the array
// var colorToAddAtBeginning = prompt("Enter a color to add to the beginning:");
// colors.unshift(colorToAddAtBeginning);

// // Display the updated array
// document.write("<h3>Array after adding color to the beginning:</h3>");
// document.write("<p>" + colors.join(", ") + "</p>");

// // b. Add color to the end of the array
// var colorToAddAtEnd = prompt("Enter a color to add to the end:");
// colors.push(colorToAddAtEnd);

// // Display the updated array
// document.write("<h3>Array after adding color to the end:</h3>");
// document.write("<p>" + colors.join(", ") + "</p>");

// // c. Add two more colors to the beginning of the array
// colors.unshift("Yellow", "Orange");

// // Display the updated array
// document.write("<h3>Array after adding two colors to the beginning:</h3>");
// document.write("<p>" + colors.join(", ") + "</p>");

// // d. Delete the first color in the array
// colors.shift();

// // Display the updated array
// document.write("<h3>Array after deleting the first color:</h3>");
// document.write("<p>" + colors.join(", ") + "</p>");

// // e. Delete the last color in the array
// colors.pop();

// // Display the updated array
// document.write("<h3>Array after deleting the last color:</h3>");
// document.write("<p>" + colors.join(", ") + "</p>");

// // f. Add a color at a specific index
// var indexToAdd = parseInt(prompt("Enter the index at which you want to add a color:"));
// var colorToAddAtIndex = prompt("Enter the color you want to add:");
// colors.splice(indexToAdd, 0, colorToAddAtIndex);

// // Display the updated array
// document.write("<h3>Array after adding color at a specific index:</h3>");
// document.write("<p>" + colors.join(", ") + "</p>");

// // g. Delete color(s) from a specific index
// var indexToDelete = parseInt(prompt("Enter the index from which you want to delete color(s):"));
// var numberOfColorsToDelete = parseInt(prompt("Enter the number of colors you want to delete:"));
// colors.splice(indexToDelete, numberOfColorsToDelete);

// // Display the updated array
// document.write("<h3>Array after deleting color(s) from a specific index:</h3>");
// document.write("<p>" + colors.join(", ") + "</p>");





// // Array to store student scores
// var studentScores = [85, 72, 93, 64, 78];

// // Sort the array in ascending order
// studentScores.sort(function(a, b) {
//     return a - b;
// });

// // Display the sorted array
// console.log("Student scores in ascending order:", studentScores);







// // Initialize an array with city names
// var cities = ["Karachi", "Islamabad", "Lahore", "Dehli", "Berlin"];

// // Initialize an empty array for selected cities
// var selectedCities = [];

// // Copy three array elements from cities array to selectedCities array
// for (var i = 0; i < 3; i++) {
//     selectedCities.push(cities[i]);
// }

// // Display the selected cities array
// console.log("Selected cities:", selectedCities);









// var arr = ["This", "is", "my", "cat"];
// var singleString = arr.join(" ");

// console.log(singleString);









// // Create an empty array to store values
// var fifoArray = [];

// // Add values to the array
// fifoArray.push("Value1");
// fifoArray.push("Value2");
// fifoArray.push("Value3");

// // Access and remove values in FIFO order
// var firstValue = fifoArray.shift();
// console.log("First value:", firstValue); // Output: First value: Value1

// var secondValue = fifoArray.shift();
// console.log("Second value:", secondValue); // Output: Second value: Value2

// var thirdValue = fifoArray.shift();
// console.log("Third value:", thirdValue); // Output: Third value: Value3







// // Create an empty array to store values
// var lifoArray = [];

// // Add values to the array
// lifoArray.push("Value1");
// lifoArray.push("Value2");
// lifoArray.push("Value3");

// // Access and remove values in LIFO order
// var lastValue = lifoArray.pop();
// console.log("Last value:", lastValue); // Output: Last value: Value3

// var secondLastValue = lifoArray.pop();
// console.log("Second last value:", secondLastValue); // Output: Second last value: Value2

// var thirdLastValue = lifoArray.pop();
// console.log("Third last value:", thirdLastValue); // Output: Third last value: Value1







// Array of phone manufacturers
var phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// Display the dropdown/select menu
document.write("<select>");
for (var i = 0; i < phoneManufacturers.length; i++) {
    document.write("<option value='" + phoneManufacturers[i] + "'>" + phoneManufacturers[i] + "</option>");
}
document.write("</select>");
