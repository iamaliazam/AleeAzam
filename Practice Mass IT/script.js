// Take input from the user for the number and length of the table
let tableNumber = parseInt(prompt("Enter the number for the multiplication table:"));
let tableLength = parseInt(prompt("Enter the length of the multiplication table:"));

// Check if the input is valid
if (isNaN(tableNumber) || isNaN(tableLength) || tableNumber <= 0 || tableLength <= 0) {
    console.log("Please enter valid numbers for the table number and length.");
} else {
    // Print the multiplication table
    console.log(`Multiplication table of ${tableNumber} with length ${tableLength}:`);
    for (let i = 1; i <= tableLength; i++) {
        console.log(`${tableNumber} * ${i} = ${tableNumber * i}`);
    }
}
