// Prompt the user to enter their age
const age = prompt("Please enter your age:");

// Determine the price of the movie ticket based on the user's age
let price;
if (age <= 12) {
  price = 10;
} else if (age >= 13 && age <= 17) {
  price = 15;
} else if (age >= 18) {
  price = 20;
} else {
  price = "Invalid age";
}

// Display the price of the movie ticket
alert(`The price of the movie ticket is $${price}.`);