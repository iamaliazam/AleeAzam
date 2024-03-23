// // Take input from the user for the number and length of the table
// let tableNumber = parseInt(prompt("Enter the number for the multiplication table:"));
// let tableLength = parseInt(prompt("Enter the length of the multiplication table:"));

// // Check if the input is valid
// if (isNaN(tableNumber) || isNaN(tableLength) || tableNumber <= 0 || tableLength <= 0) {
//     console.log("Please enter valid numbers for the table number and length.");
// } else {
//     // Print the multiplication table
//     console.log(`Multiplication table of ${tableNumber} with length ${tableLength}:`);
//     for (let i = 1; i <= tableLength; i++) {
//         console.log(`${tableNumber} * ${i} = ${tableNumber * i}`);
//     }
// }



// // Print numeric counting from 1 to 10
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }



// // Take input from the user for the number and length of the table
// let tableNumber = parseInt(prompt("Enter the number for the multiplication table:"));
// let tableLength = parseInt(prompt("Enter the length of the multiplication table:"));

// // Check if the input is valid
// if (isNaN(tableNumber) || isNaN(tableLength) || tableNumber <= 0 || tableLength <= 0) {
//     console.log("Please enter valid numbers for the table number and length.");
// } else {
//     // Print the multiplication table
//     console.log(`Multiplication table of ${tableNumber} with length ${tableLength}:`);
//     for (let i = 1; i <= tableLength; i++) {
//         console.log(`${tableNumber} * ${i} = ${tableNumber * i}`);
//     }
// }






// Counting: 1, 2, 3, ..., 15
console.log("Counting:");
for (let i = 1; i <= 15; i++) {
    console.log(i);
}

// Reverse counting: 10, 9, 8, ..., 1
console.log("\nReverse counting:");
for (let i = 10; i >= 1; i--) {
    console.log(i);
}

// Even numbers: 0, 2, 4, ..., 20
console.log("\nEven:");
for (let i = 0; i <= 20; i += 2) {
    console.log(i);
}

// Odd numbers: 1, 3, 5, ..., 19
console.log("\nOdd:");
for (let i = 1; i <= 19; i += 2) {
    console.log(i);
}

// Series: 2k, 4k, 6k, ..., 20k
console.log("\nSeries:");
for (let i = 2; i <= 20; i += 2) {
    console.log(i + "k");
}




// // Define the fruits array
// let fruits = ["apple", "banana", "mango", "orange", "strawberry"];

// // Print items of the array using for loop
// console.log("Printing items of the fruits array:");
// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }