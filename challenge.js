"use strict";

/*
// CHALLENGE 3

Steven needs a very simple tip calculator for whenever he goes to eat in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

Your tasks:

Calculate the tip, depending on the bill value. Create a variable called tip for this. It's not allowed to use an if...else statement (if it's easier for you, you can start with an if...else statement, and then try to convert it to a ternary operator).

Print a string to the console containing the bill value, the tip, and the final value (bill + tip).

Example: The bill was 275, the tip was 41.25, and the total value 316.25.

Note: Use the values of the bill and tip variables to construct this string. Don't hard-code them 🙂

TEST DATA: Test with different bill values: 275, 40, and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2

HINT 2: Value X is between 50 and 300, if it's >= 50 && <= 300 😉
*/

// SOLUTION:
/*
const bill = 400;

const tip = bill >= 50 && bill <= 300 ? (bill * 15) / 100 : (bill * 20) / 100;
console.log(
  `The bill was $${bill}, the tip was $${tip}, and the total value $${bill + tip}`,
);
*/

/*
// CHALLENGE 4
There are two gymnastics teams: Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!

Your tasks:

1. Calculate the average score for each team, using the test data included below. The average score for Dolphins should be assigned to the scoreDolphins variable, and the average score of Koalas should be assigned to the scoreKoalas variable.

2. Compare the team's average scores to determine the winner of the competition, and print to the console:

"Dolphins win the trophy" if Dolphins win, or

"Koalas win the trophy" if Koalas win, or

"Both win the trophy" if their average scores are equal.



TEST DATA: Dolphins scored 96, 108, and 89. Koalas scored 88, 91, and 110.
*/

//SOLUTION
/*
const scoreDolphins = (97 + 112 + 101) / 3;
const scoreKoalas = (109 + 95 + 106) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log("Dolphins win the trophy🏆");
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
  console.log("Koalas win the trophy🏆");
} else if (scoreDolphins >= 100 && scoreKoalas >= 100) {
  console.log("Both team win the trophy🏆🏆");
} else {
  console.log("No one wins the trophy😞");
}
*/

/*
// CHALLENGE 5
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.

Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).

A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!



Your tasks:

Create an arrow function calcAverage to calculate the average of 3 scores. This function should have three parameters and return a single number (the average score).

Create two new variables — scoreDolphins and scoreKoalas, and assign the value returned from the calcAverage function to them (you will need to call this function, and pass scores as arguments).

Create a function checkWinner that takes the average score of each team as parameters (avgDolphins and avgKoalas), and then logs the winner to the console, together with the victory points, according to the rule above. Example: Koalas win (30 vs. 13) (use avgDolphins and avgKoalas instead of hard-coded values).

Use the checkWinner function to determine the winner for both DATA 1 and DATA 2.

Ignore draws this time. Instead, log No team wins... to the console if there is no winner.



TEST DATA 1: Dolphins scored 44, 23, and 71. Koalas scored 65, 54, and 49.

TEST DATA 2: Dolphins scored 85, 54, and 41. Koalas scored 23, 34, and 27.
*/

/*
//SOLUTION
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

//TEST DATA 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= avgDolphins * 2) {
    console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log("No team wins...");
  }
}

checkWinner(scoreDolphins, scoreKoalas);

//TEST DATA 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
checkWinner(scoreDolphins, scoreKoalas);
*/

//CHALLENGE 6
/*
Steven wants you to improve his tip calculator, using the same rules as before — tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

Your tasks:

Write a function calcTip that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from the first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.

And now let's use arrays! So, create an array called bills containing the test data below.

Create an array called tips containing the tip value for each bill, calculated from the function you created before.

BONUS: Create an array totals containing the total values, so the bill + tip.

TEST DATA: 125, 555, and 44.
*/

//SOLUTION
/*
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? (bill * 15) / 100 : (bill * 20) / 100;
};

calcTip(100);

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills, tips, totals);
*/

// CHALLENGE 7
/*
Let's go back to Mark and John comparing their BMIs!

This time, let's use objects to implement the calculations! Remember: BMI = mass / (height * height) (mass in kg and height in meters).

Your tasks:

For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith). Name these objects as mark and john, and their properties exactly as fullName, mass and height.

Create a calcBMI method on each object to calculate the BMI (the same method on both objects). Assign the BMI value to a property called bmi (lowercase), and also return it from the method.

Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!".

TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.

IMPORTANT: The ** operator is not supported in this editor. Please make sure to use exactly this formula mass / (height * height), and not this one mass / (height ** 2).
*/

//SOLUTION
/*
const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

mark.calcBMI();
john.calcBMI();

if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName}'s BMI: ${mark.bmi} is higher than ${john.fullName}'s BMI: (${john.bmi})!`,
  );
} else {
  console.log(
    `${john.fullName}'s BMI: ${john.bmi} is higher than ${mark.fullName}'s BMI: ${mark.bmi}!`,
  );
}

mark.bmi > john.bmi
  ? console.log(
      `${mark.fullName}'s BMI: ${mark.bmi} is higher than ${john.fullName}'s BMI: (${john.bmi})!`,
    )
  : console.log(
      `${john.fullName}'s BMI: ${john.bmi} is higher than ${mark.fullName}'s BMI: ${mark.bmi}!`,
    );
*/

// CHALLENGE 8
/*
Let's improve Steven's tip calculator even more, this time using loops!

Your tasks:

Create an array called bills containing all 10 test bill values.

Create empty arrays for the tips and the totals (tips and totals)

Use the calcTip function we wrote before (included in the starter code) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!



TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86, and 52.



BONUS:

Write a function calcAverage which takes an array called arr as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it if you feel like it:

First, you will need to add up all values in the array. To do the addition, start by creating a variable sum that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the sum variable. This way, by the end of the loop, you have all values added together.

To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements).

Call the function with the totals array.
*/

// SOLUTION
/*
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? (bill * 15) / 100 : (bill * 20) / 100;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}

console.log(bills);
console.log(tips);
console.log(totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);
  return sum / arr.length;
};

console.log(calcAverage([2, 4, 6]));
console.log(calcAverage(totals));
*/

/*
Sub-challenge 1
Write an arrow function called multiply that takes two parameters a and b and returns their product. Call it with 6 and 7 and log the result.
*/

// SOLUTION
// const multiply = (a, b) => a * b;
// console.log(multiply(6, 7));

/*
Sub-challenge 2
Create an array called temperatures with these values: 30, 18, 24, 15, 27. Write a for loop that logs each temperature to the console one by one.
*/

// SOLUTION
// const temperatures = [30, 18, 24, 15, 27];
// for (let i = 0; i < temperatures.length; i++) {
//   console.log(`Temperatures: ${temperatures[i]}°C`);
// }

/*
Sub-challenge 3
Create an object called car with properties brand, year, and speed. Add a method called accelerate that adds 10 to this.speed and returns it. Call the method twice and log the speed after each call.
*/

// SOLUTION
// const car = {
//   brand: "BMW",
//   year: 2025,
//   speed: 300,
//   accelerate: function () {
//     this.speed += 10;
//     return this.speed;
//   },
// };
// console.log(car.accelerate(210));
// console.log(car.accelerate(220));

/*
Sub-challenge 4
Write a function called isAdult that takes an age as argument and uses a ternary operator to return "Adult" if age is 18 or above, and "Minor" otherwise. Test it with ages 20 and 15 and log both results.
*/

// SOLUTION
// const isAdult = function (age) {
//   return age >= 18 ? "Adult" : "Minor";
// };

// console.log(isAdult(20));
// console.log(isAdult(15));

/*
Sub-challenge 5
Create an array called numbers with values 4, 8, 15, 16, 23, 42. Write a function called calcSum that takes an array and returns the sum of all its values using a for loop. Call it with numbers and log the result.
*/

// SOLUTION
// const numbers = [4, 8, 15, 16, 23, 42];

// const calcSum = function () {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   return sum;
// };

// console.log(calcSum(numbers));

/*
Sub-challenge 6
Write a function declaration called greet that takes a name as a parameter and returns the string "Hello, [name]!". Call it with your name and log the result.
*/

//Solution
// function greet(name) {
//   return `Hello, ${name}!`;
// }
// console.log(greet("Dekunle"));

/*
Sub-challenge 6
Write a function declaration called greet that takes a name as a parameter and returns the string "Hello, [name]!". Call it with your name and log the result.
*/

//Solution
// function greet(name) {
//   return `Hello ${name}`;
// }
// console.log(greet("Dekunle"));

/*
Sub-challenge 7
Create an array called scores with values 45, 78, 92, 60, 55. Write a function called findMax that takes an array and returns the highest value using a for loop. Log the result.
*/

//Solution
// const scores = [45, 78, 92, 60, 55];

// const findMax = function (arr) {
//   let max = arr[0]; // start by assuming first item is the highest
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i]; // update max whenever you find something higher
//     }
//   }
//   return max;
// };

// console.log(findMax(scores));

/*
Sub-challenge 8
Create an object called bank account with properties ownerName, balance, and a method called deposit that takes an amount parameter, adds it to this.balance, and returns the new balance. Call deposit twice with different amounts and log the balance after each.
*/

//Solution
// const bankAccount = {
//   ownerName: "Adekunle Anifowose",
//   balance: 100000000000,
//   deposit: function (amount) {
//     this.balance += amount;
//     return this.balance;
//   },
// };

// console.log(bankAccount.deposit(90000000));
// console.log(bankAccount.deposit(5800000));

/*
Sub-challenge 9
Write an arrow function called isEven that takes a number and uses a ternary operator to return "Even" if the number is divisible by 2, and "Odd" otherwise. Test it with 4 and 7 and log both results.
*/

//Solution
// const isEven = (num) => {
//   return num % 2 === 0 ? "Even" : "Odd";
// };

// console.log(isEven(4));
// console.log(isEven(7));

/*
Sub-challenge 10
Create an array called words with values "apple", "banana", "cherry", "date", "fig". Write a for loop that logs only the words that have more than 4 characters. (Hint: every string has a .length property)
*/

//Solution
// const words = ["apple", "banana", "cherry", "date", "fig"];
// for (let i = 0; i < words.length; i++) {
//   if (words[i].length > 4) {
//     console.log(words[i]);
//   }
// }

/*
Challenge 11:
Write a function declaration called calcSquare that takes a number n and returns its square (n * n). Call it with 9 and log the result.
*/

//Solution
// const calcSquare = function (n) { // ← expression
//   return n * n;
// };

// console.log(calcSquare(9));

// function calcSquare(n) { // ← declaration
//   return n * n;
// }

/*
Challenge 12:
Create an array called prices with values 120, 45, 890, 230, 67. Write a function called findMin that takes an array and returns the lowest value using a for loop. Log the result.
*/

//Solution
// const prices = [120, 45, 890, 230, 67];

// const findMin = function (arr) {
//   let min = arr[0]; //start by assuming the first item is the lowest
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < min) {
//       min = arr[i]; //update when condition is met
//     }
//   }
//   return min;
// };

// console.log(findMin(prices));

/*
Challenge 13:
Create an object called student with properties fullName, grade, and a method called promote that adds 1 to this.grade and returns it. Call promote three times and log the grade after each call.
*/

//Solution
// const student = {
//   fullName: "John Doe",
//   grade: 87,
//   promote: function () {
//     return (this.grade += 1);
//   },
// };

// console.log(student.promote());
// console.log(student.promote());
// console.log(student.promote());

/*
Challenge 14:
Write an arrow function called isPositive that takes a number and uses a ternary operator to return "Positive" if the number is greater than 0, and "Negative" otherwise. Test it with 10 and -5 and log both results.
*/

//Solution
// const isPositive = (num) => {
//   return num > 0 ? "Positive" : "Negative";
// };

// console.log(isPositive(10));
// console.log(isPositive(-5));

/*
Challenge 15:
Create an array called names with values "Ali", "Dekunle", "Sam", "Christopher", "Mo". Write a for loop that logs only names with 5 or more characters.
*/

//Solution
// const names = ["Ali", "Dekunle", "Sam", "Christopher", "Mo"];

// for (let i = 0; i < names.length; i++) {
//   if (names[i].length >= 5) {
//     console.log(names[i]);
//   }
// }

/*
Challenge 16:
Write a function declaration called double that takes a number n and returns it multiplied by 2. Call it with 15 and log the result.
*/

//Solution 1
// function double(n) {return n * 2};

// console.log(double(15));

/*
Challenge 17:
Create an array called ages with values 12, 45, 7, 31, 28, 3. Write a function called findMax that takes an array and returns the highest value using a for loop. Log the result.
*/

//Solution 2
// const ages = [12, 45, 7, 31, 28, 3];

// const findMax = function (arr) {
//   let maxAge = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > maxAge) {
//       maxAge = arr[i];
//     }
//   }
//   return maxAge;
// };
// console.log(findMax(ages));

/*
Challenge 18:
Create an object called wallet with properties ownerName, balance, and a method called withdraw that takes an amount, subtracts it from this.balance, and returns the new balance. Call it twice with different amounts and log after each.
*/

//Solution 3
// const wallet = {
//   ownerName: "John Doe",
//   balance: 10000,
//   withdraw: function (amt) {
//     return (this.balance -= amt);
//   },
// };
// console.log(wallet.withdraw(500));
// console.log(wallet.withdraw(900));

/*
Challenge 19:
Write an arrow function called isLong that takes a word and uses a ternary operator to return "Long" if the word has more than 6 characters, and "Short" otherwise. Test it with "JavaScript" and "code" and log both.
*/

//Solution 4
// const isLong = (word) => {
//   return word.length > 6 ? "Long" : "Short";
// };

// console.log(isLong("Javascript"));
// console.log(isLong("code"));

/*
Challenge 20:
Create an array called numbers with values 3, 16, 9, 42, 7, 25. Write a function called findMin that takes an array and returns the lowest value using a for loop. Log the result.
*/

//Solution 5
// const numbers = [3, 16, 9, 42, 7, 25];

// const findMin = function (data) {
//   let min = data[0];
//   for (let i = 0; i < data.length; i++) {
//     if (data[i] < min) {
//       min = data[i];
//     }
//   }
//   return min;
// };
// console.log(findMin(numbers));

/*
Challenge 21:
Write a function declaration called calcPerimeter that takes width and height as parameters and returns the perimeter of a rectangle (2 * (width + height)). Call it with 10 and 5 and log the result.
*/

//Solution
// function calcPerimeter(width, height) {
//   let perimeter = (width + height) * 2;
//   return perimeter;
// }

// console.log(calcPerimeter(10, 5));

/*
Challenge 22:
Create an array called temperatures with values 38, 12, 25, 7, 44, 19. Write a function called findMax that takes an array and returns the highest value. Log the result.
*/

//Solution
// const temperatures = [38, 12, 25, 7, 44, 19];

// const findMax = function (arr) {
//   let max = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// };

// console.log(findMax(temperatures));

/*
Challenge 23:
Create an object called counter with a property count starting at 0, and two methods — increment that adds 1 to this.count and returns it, and decrement that subtracts 1 from this.count and returns it. Call increment three times and decrement once, logging after each call.
*/

//Solution
// const counter = {
//   count: 0,
//   increment: function () {
//     this.count += 1;
//     return this.count;
//   },
//   decrement: function () {
//     this.count -= 1;
//     return this.count;
//   },
// };

// console.log(
//   counter.increment(),
//   counter.increment(),
//   counter.increment(),
//   counter.decrement(),
// );

/*
Challenge 24:
Write an arrow function called classify that takes a score and uses a ternary operator to return "Pass" if the score is 50 or above, and "Fail" otherwise. Test with 72 and 35 and log both.
*/

//Solution
// const classify = (score) => {
//   return score >= 50 ? "Pass" : "Fail";
// };

// console.log(classify(72), classify(35));

/*
Challenge 25:
Create an array called distances with values 5, 18, 3, 11, 7. Write a function called findMin that takes an array and returns the lowest value. Log the result.
*/

//Solution
// const distances = [5, 18, 3, 11, 7];

// const findMin = function (arr) {
//   let min = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < min) {
//       min = arr[i];
//     }
//   }
//   return min;
// };

// console.log(findMin(distances));

/*
Challenge 26:
Write a function declaration called calcArea that takes width and height as parameters and returns the area of a rectangle (width * height). Call it with 8 and 6 and log the result.
*/

//Solution
// const calcArea = function (width, height) {
//   let rectangleArea = width * height;
//   return rectangleArea;
// };

// console.log(calcArea(8, 6));

/*
Challenge 27:
Create an array called scores with values 67, 23, 89, 14, 56, 91. Write a function called findMax that takes an array and returns the highest value. Log the result.
*/

//Solution
// const scores = [67, 23, 89, 14, 56, 91];

// const findMax = function (arr) {
//   let max = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// };

// console.log(findMax(scores));

/*
Challenge 28:
Create an object called lamp with a property isOn starting at false, and two methods — turnOn that sets this.isOn to true and returns "Lamp is on", and turnOff that sets this.isOn to false and returns "Lamp is off". Call turnOn twice and turnOff once, logging after each call.
*/

// //Solution
// const lamp = {
//   isOn: false,
//   turnOn: function () {
//     this.isOn = true;
//     return "Lamp is on";
//   },
//   turnOff: function () {
//     this.isOn = false;
//     return "Lamp is off";
//   },
// };

// console.log(lamp.turnOn(), lamp.turnOn(), lamp.turnOff());

/*
Challenge 29:
Write an arrow function called getDiscount that takes a price and uses a ternary operator to return "10% discount" if the price is above 100, and "No discount" otherwise. Test with 150 and 80 and log both.
*/

//Solution
// const getDiscount = (price) => {
//   return price > 100 ? "10% discount" : "No discount";
// };

// console.log(getDiscount(150));
// console.log(getDiscount(80));

/*
Challenge 30:
Create an array called weights with values 72, 15, 48, 93, 31. Write a function called findMin that takes an array and returns the lowest value. Log the result.
*/

//Solution
// const weights = [72, 15, 48, 93, 31];

// const findMin = function (data) {
//   let min = data[0];
//   for (let i = 0; i < data.length; i++) {
//     if (data[i] < min) {
//       min = data[i];
//     }
//   }
//   return min;
// };

// console.log(findMin(weights));

/*
Challenge 31:
Write a function declaration called calcTip that takes a bill and returns 15% if the bill is between 50 and 300 (inclusive), and 20% otherwise. Use a ternary operator. Call it with 120 and log the result.
*/

//Solution
// function calcTip(bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }

// console.log(calcTip(120));

/*
Challenge 32:
Create an array called temps with values 31, 8, 45, 22, 17, 39. Write a function called findMax that takes an array and returns the highest value. Log the result.
*/

//Solution
// const temps = [31, 8, 45, 22, 17, 39];

// const findMax = function (arr) {
//   let max = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// };

// console.log(findMax(temps));

/*
Challenge 33:
Create an object called bankAccount with properties ownerName, balance, and two methods — deposit that adds an amount to this.balance and returns it, and withdraw that subtracts an amount from this.balance and returns it. Call each method twice and log after every call.
*/

//Solution
// const bankAccount = {
//   ownerName: "John Doe",
//   balance: 1000,
//   deposit: function (amount) {
//     this.balance += amount;
//     return this.balance;
//   },
//   withdraw: function (amount) {
//     this.balance -= amount;
//     return this.balance;
//   },
// };

// console.log(bankAccount.deposit(900));
// console.log(bankAccount.withdraw(800));

/*
Challenge 34:
Write an arrow function called isExpensive that takes a price and uses a ternary operator to return "Expensive" if the price is above 500, and "Affordable" otherwise. Test with 750 and 200 and log both.
*/

//Solution
// const isExpensive = (price) => {
//   return price > 500 ? "Expensive" : "Affordable";
// };

// console.log(isExpensive(750));
// console.log(isExpensive(200));

/*
Challenge 35:
Create an array called lengths with values 14, 3, 27, 9, 41, 6. Write a function called findMin that takes an array and returns the lowest value. Log the result.
*/

//Solution
// const lengths = [14, 3, 27, 9, 41, 6];

// const findMin = function (data) {
//   let min = data[0];
//   for (let i = 0; i < data.length; i++) {
//     if (data[i] < min) {
//       min = data[i];
//     }
//   }
//   return min;
// };

// console.log(findMin(lengths));

/*
Challenge 36:
Write a function declaration called calcTip that takes a bill and returns the actual tip amount — 15% of the bill if it's between 50 and 300 (inclusive), 20% otherwise. Use a ternary operator. Call it with 200 and log the result.
*/

//Solution
// function calcTip(bill) {
//   return bill >= 50 && bill <= 300 ? (bill * 15) / 100 : (bill * 20) / 100;
// }

// console.log(calcTip(200));

/*
Challenge 37:
Create an array called heights with values 180, 154, 172, 165, 191. Write a function called findMax that takes an array and returns the highest value. Log the result.
*/

//Solution
// const heights = [180, 154, 172, 165, 191];

// const findMax = function (arr) {
//   let max = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// };

// console.log(findMax(heights));

/*
Challenge 3:
Create an object called library with a property books starting at 100, and two methods — addBooks that takes an amount, adds it to this.books and returns it, and removeBooks that takes an amount, subtracts it from this.books and returns it. Call each method twice with different amounts and log after every call.
*/

//Solution
// const library = {
//   books: 100,
//   addBooks: function (amt) {
//     this.books += amt;
//     return this.books;
//   },
//   removeBooks: function (amt) {
//     this.books -= amt;
//     return this.books;
//   },
// };

// console.log(library.addBooks(50));
// console.log(library.addBooks(20));
// console.log(library.removeBooks(70));
// console.log(library.removeBooks(10));

/*
Challenge 4:
Write an arrow function called isPass that takes a score and uses a ternary operator to return "Pass" if score is 40 or above, and "Fail" otherwise. Test with 55 and 30 and log both.
*/

//Solution
// const isPass = (score) => {
//   return score >= 40 ? "Pass" : "Fail";
// };

// console.log(isPass(55));
// console.log(isPass(30));

/*
Challenge 5:
Create an array called prices with values 99, 34, 150, 12, 76. Write a function called findMin that takes an array and returns the lowest value. Log the result.
*/

//Solution
// const prices = [99, 34, 150, 12, 76];

// const findMin = function (data) {
//   let min = data[0];
//   for (let i = 0; i < data.length; i++) {
//     if (data[i] < min) {
//       min = data[i];
//     }
//   }
//   return min;
// };

// console.log(findMin(prices));

// 3
// const temperatures = [33, 12, 45, 28, 19, 7, 39];
// const coldTemps = [];
// for (let i = 0; i < temperatures.length; i++) {
//   if (temperatures[i] < 20) {
//     coldTemps.push(temperatures[i]);
//   }
// }
// console.log(coldTemps);

// 5
// const shop = {
//   itemName: "Shoes",
//   price: 200,
//   applyDiscount: function (percent) {
//     this.price -= (this.price * percent) / 100;
//     return this.price;
//   },
//   resetPrice: function () {
//     this.price = 200;
//     return "Price reset";
//   },
// };
// console.log(shop.applyDiscount(10));
// console.log(shop.applyDiscount(5));
// console.log(shop.resetPrice());

/*
Challenge 1:
Write a function called filterBills that takes an array of bill amounts and returns a new array containing only the bills that qualify for a 15% tip (between 50 and 300 inclusive). Test it with [22, 120, 450, 75, 300, 15, 200] and log the result.
*/

// Solution
// const bills = [22, 120, 450, 75, 300, 15, 200];
// const filterBills = function (arr) {
//   let filteredBills = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] >= 50 && arr[i] <= 300) {
//       filteredBills.push(arr[i]);
//     }
//   }
//   return filteredBills;
// };

// console.log(filterBills(bills));

/*
Challenge 2:
Create an object called classroom with a property students that is an array containing ["Ali", "Dekunle", "Sam", "Joy", "Mo"]. Add a method called findLongestName that loops through this.students and returns the name with the most characters. Log the result by calling the method.
*/

// Solution
// const classroom = {
//   students: ["Ali", "Dekunle", "Sam", "Joy", "Mo"],
//   findLongestName: function () {
//     let longest = this.students[0];
//     for (let i = 0; i < this.students.length; i++) {
//       if (this.students[i].length > longest.length) {
//         longest = this.students[i];
//       }
//     }
//     return longest;
//   },
// };

// console.log(classroom.findLongestName());

/*
Challenge 3:
Write a function called calcTips that takes an array of bill amounts and returns a new array of tip values for each bill — 15% if between 50 and 300, 20% otherwise. Then write a second function called calcAverage that takes an array and returns the average. Call both functions with [44, 120, 350, 85, 29] and log the average tip.
*/

// Solution
// const bills = [44, 120, 350, 85, 29];
// const calcTips = function (arr) {
//   let tips = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] >= 50 && arr[i] <= 300) {
//       let tip = arr[i] * 0.15;
//       tips.push(tip);
//     } else {
//       let tip = arr[i] * 0.2;
//       tips.push(tip);
//     }
//   }
//   return tips;
// };

// console.log(calcTips(bills));

// const tips = calcTips(bills);
// const calcAverage = function (arr) {
//   let average = 0;
//   for (let i = 0; i < arr.length; i++) {
//     average += arr[i];
//   }
//   return average / arr.length;
// };

// console.log(calcAverage(tips));

/*
Challenge 4:
Create an object called scoreboard with a property scores that is an array starting empty. Add two methods — addScore that takes a score, pushes it into this.scores and returns the current scores array, and getAverage that returns the average of all scores in this.scores using a loop. Call addScore four times with different values, then call getAverage and log the result.
*/

// Solution
// const scoreboard = {
//   scores: [],
//   addScore: function (score) {
//     this.scores.push(score);
//     return this.scores;
//   },
//   getAverage: function () {
//     let sum = 0;
//     for (let i = 0; i < this.scores.length; i++) {
//       sum += this.scores[i];
//     }
//     return sum / this.scores.length;
//   },
// };

// console.log(scoreboard.addScore(1));
// console.log(scoreboard.addScore(3));
// console.log(scoreboard.addScore(5));
// console.log(scoreboard.addScore(7));
// console.log(scoreboard.getAverage());

/*
Challenge 5:
Write a function called gradeBills that takes an array of bill amounts and returns a new array of strings — "Low" if the bill is below 50, "Medium" if between 50 and 300 inclusive, and "High" if above 300. Test with [22, 120, 450, 75, 310, 15] and log the result.
*/

// Solution
// const bills = [22, 120, 450, 75, 310, 15];
// const gradeBills = function (arr) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 50) {
//       result.push("Low");
//     } else if (arr[i] >= 50 && arr[i] <= 300) {
//       result.push("Medium");
//     } else {
//       result.push("High");
//     }
//   }
//   return result;
// };

// console.log(gradeBills(bills));

/*
Challenge 1:
Write a function called calcTipTotal that takes an array of bills, calculates the tip for each one (15% if between 50 and 300, 20% otherwise), and returns the total of all tips combined as a single number. Test with [44, 120, 350, 85, 29] and log the result.
*/

//Solution
// const bills = [44, 120, 350, 85, 29];

// const calcTipTotal = function (arr) {
//   let total = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] >= 50 && arr[i] <= 300) {
//       total += arr[i] * 0.15;
//     } else {
//       total += arr[i] * 0.2;
//     }
//   }
//   return total;
// };

// console.log(calcTipTotal(bills));

/*
Challenge 2:
Create an object called hotel with properties name, roomPrice, and an empty array guests. Add two methods — checkIn that takes a guestName, pushes it into this.guests and returns "Welcome, [guestName]!", and getRevenue that returns the total revenue by multiplying this.roomPrice by the number of guests. Check in four guests and log the revenue.
*/

//Solution
// const hotel = {
//   name: "John Doe",
//   roomPrice: 2000,
//   guests: [],
//   checkIn: function (name) {
//     this.guests.push(name);
//     return `Welcome, ${name}!`;
//   },
//   getRevenue: function () {
//     let revenue = this.roomPrice * this.guests.length;
//     return revenue;
//   },
// };

// console.log(hotel.checkIn("David"));
// console.log(hotel.checkIn("Ayo"));
// console.log(hotel.checkIn("Paula"));
// console.log(hotel.checkIn("Cynhtia"));
// console.log(hotel.getRevenue());

/*
Challenge 3:
Write a function called gradedTips that takes an array of bills and returns a new array of objects — one per bill — where each object has two properties: bill and tip. Test with [60, 400, 150] and log the result.
Expected output shape:
*/

//Solution
// const bills = [60, 400, 150];
// const gradedTips = function (arr) {
//   let newObj = [];
//   for (let i = 0; i < arr.length; i++) {
//     newObj.push({
//       bill: arr[i],
//       tip: arr[i] >= 50 && arr[i] <= 300 ? arr[i] * 0.15 : arr[i] * 0.2,
//     });
//   }
//   return newObj;
// };

// console.log(gradedTips(bills));

/*
Challenge 4:
Create an object called gym with a members array containing ["Ali", "Dekunle", "Sam", "Joy"] and a monthlyFee of 5000. Add a method called getRevenue that returns the total monthly revenue, and another called addMember that takes a name, pushes it into this.members, and returns "[name] added. Total members: [count]". Add two new members and log the revenue after each addition.
*/

//Solution
// const gym = {
//   members: ["Ali", "Dekunle", "Sam", "Joy"],
//   monthlyFee: 5000,
//   getRevenue: function () {
//     let revenue = this.monthlyFee * this.members.length;
//     return revenue;
//   },
//   addMember: function (name) {
//     this.members.push(name);
//     return `${name} added. Total members: ${this.members.length}`;
//   },
// };

// console.log(gym.addMember("Mo"));
// console.log(gym.getRevenue());
// console.log(gym.addMember("Ayo"));
// console.log(gym.getRevenue());

/*
Challenge 5:
Write a function called summariseBills that takes an array of bills and returns a single object with three properties — total (sum of all bills), average (average bill), and highest (the highest bill). Test with [22, 120, 450, 75, 310, 15] and log the result.
*/

//Solution
// const bills = [22, 120, 450, 75, 310, 15];
// const summariseBills = function (arr) {
//   let totalBill = 0;
//   let averageBill = 0;
//   let highestBill = arr[0];

//   for (let i = 0; i < arr.length; i++) {
//     totalBill += arr[i];

//     if (arr[i] > highestBill) {
//       highestBill = arr[i];
//     }
//   }

//   averageBill = totalBill / arr.length;
//   return { total: totalBill, average: averageBill, highest: highestBill };
// };

// console.log(summariseBills(bills));

/*
PROBLEM:
We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."
*/

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

//1: Understanding the problem.
// - What is the temperature amplitude? Ans: difference between highest and lowest temperature.
// - How to compute max and min temperatures.
// - What is a sensor error and what to do?
// console.log(temperatures);

//2. Breaking up into sub-problems.
// - How to ignore errors?
// - Find max value in temp array.
// - FInd min value in temp array.
// - Subtract min from max (amplitude) and return it

// const calcTempAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     if (typeof temps[i] !== "number") continue;
//     if (temps[i] > max) {
//       max = temps[i];
//     }
//     if (temps[i] < min) {
//       min = temps[i];
//     }
//   }
//   console.log(max, min);

//   return max - min;
// };

// const amplitude = calcTempAmplitude(temperatures);
// console.log(amplitude);

//PROBLEM 2:
// Function should now recieve 2 arrays of temperatures.

//1. Understanding the problem.
// - With 2 arrays, should we implement functionality twice? No!, just merge two arrays.

//2. Breaking into sub-problems.
// - How to merge 2 arrays?

// const calcTempAmplitudeNew = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);

//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     if (typeof temps[i] !== "number") continue;
//     if (temps[i] > max) {
//       max = temps[i];
//     }
//     if (temps[i] < min) {
//       min = temps[i];
//     }
//   }
//   console.log(max, min);
//   return max - min;
// };

// const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
// console.log(amplitudeNew);

//Debugging with the console and breakpoints
/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures. 

Example: [17, 21, 23] will print "... 17ºC in 1 day ... 21ºC in 2 days ... 23ºC in 3 days ...". 

Create a function called printForecast which takes in an array and logs a string like the above to the console. 

TEST DATA 1: [17, 21, 23].
TEST DATA 2: [12, 5, -5, 0, 4].
*/

//SOLUTION
/*
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  // 1. Start with an empty string where we will accumulate our forecast
  let forecast = "";

  // 2. Loop through every temperature in the array
  for (let i = 0; i < arr.length; i++) {
    forecast += `${arr[i]}°C in ${i + 1} ${i === 0 ? "day" : "days"}...`;
  }
  // 3. Log the final completed string to the console
  console.log(`...${forecast}`);
};

// --- Testing the function ---
printForecast(data1);
printForecast(data2);
*/

//PROBLEM: Shopping Cart Discount Calculator
/*
A shopping website wants to offer discounts based on the total amount in the cart. The rules are as follows:
- If the total is above $100, apply a 10% discount.
- If the total is above $200, apply a 20% discount.
- If the total is above $500, apply a 30% discount.
*/

//SOLUTION

//PROBLEM: Shopping Cart Discount Calculator
/*
You work for an e‑commerce site. Write a function called checkout(cart) that:

Input: an array of product objects. Each object has:

> name (string)

> price (number, in dollars)

>  category (string: "electronics", "clothing", or "food")

Rules:

> If total price > $100 → apply 10% discount

> If customer buys any electronics → add $5 shipping fee (after discount)

> If customer buys 3 or more different items → add $2 gift wrap fee

Output: an object containing:

> subtotal (sum of all prices)

> discountAmount (0 or 10% of subtotal)

> shippingFee (0 or 5)

> giftWrapFee (0 or 2)

> total (subtotal − discountAmount + shippingFee + giftWrapFee)
*/

//SOLUTION
/*
const eStore = [
  { name: "phone", price: 300, category: "electronics" },
  { name: "Jean", price: 120, category: "clothing" },
  { name: "Pineapple", price: 20, category: "food" },
];

const checkout = function (cart) {
  let subtotal = 0;
  let shippingFee = 0;
  let discountedAmount = 0;
  let giftWrap = 0;
  let total = 0;
  let hasElectronics = false;

  for (let i = 0; i < cart.length; i++) {
    subtotal += cart[i].price;

    if (cart[i].category === "electronics") {
      hasElectronics = true;
    }
  }

  if (hasElectronics) {
    shippingFee = 5;
  }

  if (subtotal > 100) {
    discountedAmount = subtotal * 0.1;
  }

  if (cart.length >= 3) {
    giftWrap = 2;
  }

  total = subtotal - discountedAmount + shippingFee + giftWrap;
  // console.log(subtotal);

  return {
    subtotal: subtotal,
    discountedAmount: discountedAmount,
    shippingFee: shippingFee,
    giftWrap: giftWrap,
    total: total,
  };
};

console.log(checkout(eStore));
*/

//Using AI

/*
Let's say you're building a time tracking application for freelancers. At some point in building the app, you need a function that recieves daily work hours for a certain week, and returns:
1. Total hours worked
2. Average daily hours
3. The day with the most hours worked
4. Whether the week was full-time (worked 35 hours or more)

TEST DATA: [7.5, 8, 6.5, 0, 8.5, 4, 0]
*/

//SOLUTION
/*
const workHours = [7.5, 8, 6.5, 0, 8.5, 4, 0];

const analyzeWorkWeek = function (hours) {
  let totalHours = 0;
  let maxHours = 0;
  let busiestDay = 1; // Start with the first day as the busiest
  for (let i = 0; i < hours.length; i++) {
    totalHours += hours[i];

    if (hours[i] > maxHours) {
      maxHours = hours[i];
      busiestDay = i + 1; // Update the day with the most hours worked
    }
  }
  let averageHours = Math.round((totalHours / hours.length) * 10) / 10; // Round to 1 decimal place

  return {
    totalHours: totalHours,
    averageHours: averageHours,
    maxHours: maxHours,
    busiestDay: `${busiestDay === 1 ? "Monday" : busiestDay === 2 ? "Tuesday" : busiestDay === 3 ? "Wednesday" : busiestDay === 4 ? "Thursday" : busiestDay === 5 ? "Friday" : busiestDay === 6 ? "Saturday" : "Sunday"}`,
    isFullTime: totalHours >= 35,
  };
};

console.log(analyzeWorkWeek(workHours));
*/

/*
- CHALLENGE
Write a function called analyzeScores that receives an array of student test scores and returns an object with:

1. Total number of students
2. Average score (rounded to one decimal place)
3. The highest score
4. Which student number got the highest score (e.g. "Student 3")
5. Whether the class passed overall (average score of 50 or above)

TEST DATA: [45, 78, 92, 36, 88, 55, 71]
*/

//SOLUTION
/*
const scores = [45, 78, 92, 36, 88, 55, 71];
const analyzeScores = function (scores) {
  let totalStudents = scores.length;
  let totalScore = 0;
  let averageScore = 0;
  let maxScore = 0;
  let eliteStudent = 1;

  for (let i = 0; i < scores.length; i++) {
    totalScore += scores[i];

    if (scores[i] > maxScore) {
      maxScore = scores[i];
      eliteStudent = i + 1;
    }
  }
  // console.log(totalStudents);
  // console.log(totalScore);
  averageScore = Math.round((totalScore / scores.length) * 10) / 10;
  // console.log(averageScore);

  return {
    totalStudents: totalStudents,
    averageScore: averageScore,
    highestScore: maxScore,
    eliteStudent: `Student ${eliteStudent}`,
    overall: averageScore >= 50 ? "pass" : "fail",
  };
};

console.log(analyzeScores(scores));
*/

/*
PROBLEM: Employee Shift Bonus Calculator

A restaurant wants to calculate weekly pay with bonuses. Write calculatePay(employee):

Input: an object with:
{
  name: "Sarah",
  hourlyRate: 15,
  hoursWorked: [8, 7, 9, 8, 10, 5, 0],  // Mon to Sun
  role: "chef"  // or "waiter"
}

Rules:

1. Base pay = hourlyRate × total hours

2. If any day > 10 hours → add $50 bonus (once, not per day)

3. If role is "chef" → multiply base pay by 1.2 (20% skill bonus) before adding other bonuses

4. If employee worked 7 days (no zeros) → add $30 perfect attendance bonus

Output:
{
  name: "Sarah",
  basePay: 705,        // after role multiplier but before other bonuses
  overtimeBonus: 50,   // or 0
  attendanceBonus: 30, // or 0
  total: 785
}
*/
/*
const users = [
  {
    name: "Dekunle",
    address: {
      city: "Lagos",
      zip: "100001",
    },
    job: {
      title: "Developer",
      company: "Tech Corp",
    },
  },
  {
    name: "John",
    job: {
      title: "Designer",
      company: "Creative Co",
    },
  },
];

console.log(users[0].address.city);
console.log(users[1].address?.zip);
console.log(users[1].address?.zip ?? "Zip code doesn't exist");
*/

/*
const player = {
  name: "Lewandowski",
  club: "Bayern Munich",
  goals: 35,
  assists: 10,
  nationality: "Polish",
};

const property = Object.keys(player);
console.log(property);

const value = Object.values(player);
console.log(value);

const entrie = Object.entries(player);
for (const [props, val] of entrie) {
  console.log(`${props}: ${val}`);
}

const lengthProps = property.length;
console.log(lengthProps);
*/

/*
// CHALLENGE
const employees = {
  engineering: {
    manager: "Sarah",
    developers: ["Dekunle", "John", "Ali"],
    avgSalary: 95000,
  },
  design: {
    manager: "Mike",
    developers: ["Joy", "Sam"],
    avgSalary: 75000,
  },
  marketing: {
    manager: "Lisa",
    developers: ["Chris", "Paula", "Mo", "Dave"],
    avgSalary: 65000,
  },
};

// # Your tasks:

// - Using Object.entries and a loop, log each department name and its manager in this format: "Engineering is managed by Sarah"
// - Using Object.entries, find and log the department with the highest average salary
// - Using Object.values, calculate and log the total number of developers across all departments
// - Using Object.entries and destructuring, log each developer's name alongside their department in this format: "Dekunle works in Engineering"
// - Using Object.keys, log the number of departments that have more than 2 developers

// 1
for (const [department, { manager }] of Object.entries(employees)) {
  console.log(
    `${department[0].toUpperCase() + department.slice(1)} is managed by ${manager}`,
  );
}

// 2
const data = Object.entries(employees);
let averageSalary = 0;
let mostPaidDept = "";
for (const [department, { avgSalary }] of data) {
  if (avgSalary > averageSalary) {
    averageSalary = avgSalary;
    mostPaidDept = department;
  }
}
console.log(
  `The department with the highest avergage salary(${averageSalary}) is ${mostPaidDept[0].toUpperCase() + mostPaidDept.slice(1)}`,
);

// 3
let staffSum = 0;
for (const { developers } of Object.values(employees)) {
  staffSum += developers.length;
}
console.log(`The number of staffs across all departments is ${staffSum}`);

// 4
for (const [department, { developers }] of Object.entries(employees)) {
  for (const developer of developers) {
    console.log(
      `${developer} works in ${department[0].toUpperCase() + department.slice(1)} department`,
    );
  }
}

// 5
let count = 0;
for (const [department, { developers }] of Object.entries(employees)) {
  if (developers.length > 2) {
    count++;
  }
}
console.log(`${count} departments has more than 2 developers`);
*/

/*
// CHALLENGE
const company = {
  name: "TechCorp",
  founded: 2010,
  departments: {
    engineering: {
      head: "Alice",
      team: ["Bob", "Charlie", "Diana", "Eve"],
      budget: 500000,
    },
    design: {
      head: "Frank",
      team: ["Grace", "Henry"],
      budget: 200000,
    },
    marketing: {
      head: "Iris",
      team: ["Jack", "Karl", "Leo"],
      budget: 350000,
    },
  },
};

// # Your tasks:

// - Destructure name and founded from company
// - Destructure the head of the engineering department in one line
// - Using Object.entries, log each department name and its head: "Engineering is headed by Alice"
// - Find the department with the lowest budget and log it
// - Log the total budget across all departments
// - Log every team member across all departments in this format: "Bob is in Engineering"

// 1
const { name, founded } = company;
console.log(name, founded);

// 2
const {
  engineering: { head },
} = company.departments;
console.log(head);

// 3
for (const [department, { head }] of Object.entries(company.departments)) {
  console.log(
    `${department[0].toUpperCase() + department.slice(1)} is headed by ${head}`,
  );
}

// 4
let minBudget = Infinity;
let lowBudgetDept = "";
for (const [department, { budget }] of Object.entries(company.departments)) {
  if (budget < minBudget) {
    minBudget = budget;
    lowBudgetDept = department;
  }
}
console.log(
  `${lowBudgetDept[0].toUpperCase() + lowBudgetDept.slice(1)} has the lowest budget: $${minBudget}`,
);

// 5
let totalBudget = 0;
for (const [department, { budget }] of Object.entries(company.departments)) {
  totalBudget += budget;
}
console.log(`The total budget across all departments is $${totalBudget}`);

// 6
for (const [department, { team }] of Object.entries(company.departments)) {
  // for (const teamMembers of Object.values(team)) {
  for (const teamMembers of team) {
    console.log(
      `${teamMembers} is in ${department[0].toUpperCase() + department.slice(1)}`,
    );
  }
}

*/

// const storeData = {
//   store: {
//     name: "Mega Mart",
//     location: {
//       address: "123 Main St",
//       city: "Springfield",
//       zip: "12345",
//     },
//     inventory: {
//       electronics: [
//         {
//           id: 1,
//           name: "Laptop",
//           price: 999,
//           specs: { ram: "16GB", storage: "512GB" },
//         },
//         {
//           id: 2,
//           name: "Phone",
//           price: 699,
//           specs: { ram: "8GB", storage: "256GB" },
//         },
//       ],
//       clothing: [{ id: 3, name: "T-Shirt", price: 20, sizes: ["S", "M", "L"] }],
//     },
//   },
// };

// const { store } = storeData;

//////////////////////////////////
// STRING EXERCISE
/*
Coding Challenge #4
Write a program that receives a list of variable names written in underscore_case 
and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below to 
insert the elements), and conversion will happen when the button is pressed.
Test data (pasted to textarea, including spaces):
underscore_case
first_name
Some_Variable 
 calculate_AGE
delayed_departure
Should produce this output (5 separate console.log outputs):
underscoreCase ✅
firstName ✅✅
someVariable ✅✅✅
calculateAge ✅✅✅✅
delayedDeparture ✅✅✅✅✅
Hints:
§ Remember which line defines a new line in the textarea �
§ The solution only needs to work for a variable made out of 2 words, like a_b
§ Start without worrying about the ✅. Tackle that only after you have the variable 
name conversion working �
§ This challenge is difficult on purpose, so start watching the solution in case 
you're stuck. Then pause and continue!
Afterwards, test with your own test data!
GOOD LUCK �   
*/

/*
document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

const text = document.querySelector("textarea");
const btn = document.querySelector("button");

btn.addEventListener("click", function () {
  const textLower = text.value.toLowerCase().trim().split("\n");

  for (const [i, line] of textLower.entries()) {
    const trimmedLine = line.trim();
    if (!trimmedLine) continue;

    const [first, second] = trimmedLine.split("_");
    const camelCase = first + second[0].toUpperCase() + second.slice(1);

    const checkmarks = "✅".repeat(i + 1);
    console.log(`${camelCase.padEnd(20)} ${checkmarks}`);
  }
});
*/

// Given this:
// const name = "first_name";
// const [a, b] = name.split("_");
// console.log(a + b[0].toUpperCase() + b.slice(1));

/*
REAL WORLD SCENARIO: User Registration Form
You're building a signup form where users enter their full name, and you need to automatically generate their username.

The Problem: Users type names in all sorts of ways:

"john doe"
"JANE SMITH"
" robert johnson "
"mary-ann williams"

# Your Job: Create a username generator that:
- Takes their full name
- Converts to lowercase
- Removes extra spaces
- Creates firstname.lastname@company.com
*/
/*
// Solution
const generateUsername = function (name) {
  const user = name.toLowerCase().trim().split(/\s+/);
  const [firstName, lastName] = user;
  // return `a: ${a} b: ${b}`;
  // return `${firstName}.${lastName}@company.com`; //option 1
  return `${firstName}` + "." + `${lastName}` + "@company.com"; // option 2
};
console.log(generateUsername("john doe")); // → "john.doe@company.com"
console.log(generateUsername("JANE SMITH")); // → "jane.smith@company.com"
console.log(generateUsername("  robert  johnson  ")); // → "robert.johnson@company.com"

const name = "  mary_ann  smith  ";
const cleaned = name.trim().split(/\s+/).join(" ").split("_").join(".");
console.log(cleaned);
*/

//String Method Practice
/*
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";
// 🔴 Delayed Departure from FAO to TXL (11h25)
//               Arrival from BRU to FAO (11h45
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const getCode = (str) => str.slice(0, 3).toUpperCase();

const flightSPlit = flights.split("+");
for (const flight of flightSPlit) {
  const [type, from, to, time] = flight.split(";");
  const output =
    `${type.includes("Delayed") ? "🔴" : ""}${type.replaceAll("_", " ")} from ${getCode(from)} to ${getCode(to)} (${time.replace(":", "h")})`.padStart(
      44,
    );
  console.log(output);
}
*/

//------------------------------------------------------------
/*
You're building a simple data processor. Write a function called processData that takes an array of numbers and a callback function, applies the callback to each number, and returns a new array of results.

Then write three separate callback functions:

i. double — multiplies a number by 2
ii. square — returns a number squared (n * n)
iii. isEven — returns "Even" if the number is even, "Odd" otherwise

Test all three:
processData([1, 2, 3, 4, 5], double);
processData([1, 2, 3, 4, 5], square);
processData([1, 2, 3, 4, 5], isEven);

Expected outputs:
[2, 4, 6, 8, 10]
[1, 4, 9, 16, 25]
['Odd', 'Even', 'Odd', 'Even', 'Odd']
 */

// SOLUTION
/*
const double = (n) => {
  return n + n;
};

const square = (n) => {
  return n * n;
};

const isEven = (n) => {
  return n % 2 === 0 ? "Even" : "Odd";
};

const processData = function (arr, fn) {
  const result = [];
  for (const num of arr) {
    result.push(fn(num));
  }
  return result;
};

console.log(processData([1, 2, 3, 4, 5], double));
console.log(processData([1, 2, 3, 4, 5], square));
console.log(processData([1, 2, 3, 4, 5], isEven));
*/

//------------------------------------------------------------
/*
You're building a gradebook system. Write a function called processStudents that takes an array of student objects and a callback function, applies the callback to each student, and returns a new array of results.

Write three callback functions:

getGrade — returns "Pass" if score is 50 or above, "Fail" otherwise
addBonus — returns a new object with the student's name and score increased by 10
formatResult — returns a string like "Dekunle scored 72"

Test all three:

console.log(processStudents(students, getGrade));
console.log(processStudents(students, addBonus));
console.log(processStudents(students, formatResult));
*/
/*
const students = [
  { name: "Dekunle", score: 72 },
  { name: "Ali", score: 45 },
  { name: "Joy", score: 88 },
  { name: "Sam", score: 55 },
  { name: "Mo", score: 91 },
];

const getGrade = (student) => {
  return student.score >= 50 ? "Pass" : "Fail";
};

const addBonus = (student) => {
  return { name: student.name, score: student.score + 10 };
};

const formatResult = (student) => {
  return `${student.name} scored ${student.score}`;
};

const processStudents = function (students, callBack) {
  let result = [];
  for (const individual of students) {
    result.push(callBack(individual));
  }
  return result;
};

console.log(processStudents(students, getGrade));
console.log(processStudents(students, addBonus));
console.log(processStudents(students, formatResult));
*/

//------------------------------------------------------------

/*
E-Commerce Order Processor 🛒
You're building an order processing system. Write a function processOrders that takes an array of order objects and a callback, applies the callback to each order, and returns a new array.

Write three callback functions:

1) applyDiscount - applies a 15% discount to the order total (round to 2 decimal places).
2) getStatus - returns "Express" if total > $100, "Standard" otherwise.
3)formatOrder - returns a string like "Order #A001: $47.99".
*/

/*
const orders = [
  { id: "A001", item: "Laptop", total: 999.99 },
  { id: "B002", item: "Mouse", total: 24.5 },
  { id: "C003", item: "Monitor", total: 199.99 },
  { id: "D004", item: "Keyboard", total: 45.75 },
];

const applyDiscount = (order) => {
  //  return { 
  //   ...order, // Spread operator to copy all properties
  //   total: Number((order.total * 0.85).toFixed(2))
  // };
  return {
    id: order.id,
    item: order.item,
    total: (order.total * 0.85).toFixed(2),
  };
};

const getStatus = (order) => {
  return order.total > 100 ? "Express" : "Standard";
};

const formatOrder = (order) => {
  return `Order #${order.id}: $${order.total}`;
};
console.log(formatOrder({ id: "A001", item: "Laptop", total: 999.99 }));

const processOrders = function (orders, callBack) {
  const result = [];
  for (const order of orders) {
    result.push(callBack(order));
  }
  return result;
};

console.log(processOrders(orders, applyDiscount));
console.log(processOrders(orders, getStatus));
console.log(processOrders(orders, formatOrder));
*/

//------------------------------------------------------------

/*
You're building a task management app. Write processTasks that takes an array of task objects and a callback.

Write three callback functions:

1) isOverdue - returns true if the task's due date is in the past (compare with today's date)

2) getPriority - returns "High" if days until due is less than 3, "Medium" if 3-7 days, "Low" otherwise

3) createReminder - returns a string like "📌 Submit report - Due in 2 days"
*/

/*
const tasks = [
  { id: 1, title: "Submit report", dueDate: "2026-08-02" },
  { id: 2, title: "Review code", dueDate: "2026-08-15" },
  { id: 3, title: "Team meeting", dueDate: "2026-07-25" },
  { id: 4, title: "Update docs", dueDate: "2026-08-10" },
];

const today = new Date();

const isOverdue = (task) => {
  const due = new Date(task.dueDate);
  return due < today;
};

const getPriority = (task) => {
  const due = new Date(task.dueDate);
  const daysUntil = Math.ceil((due - today) / (1000 * 60 * 60 * 24));

  if (daysUntil < 3) {
    return "High";
  } else if (daysUntil <= 7) {
    return "Medium";
  } else {
    return "Low";
  }
};

const createReminder = (task) => {
  const due = new Date(task.dueDate);
  const daysUntil = Math.ceil((due - today) / (1000 * 60 * 60 * 24));

  if (daysUntil < 0) {
    return `📌 ${task.title} - OVERDUE by ${Math.abs(daysUntil)} days`;
  } else if (daysUntil === 0) {
    return `📌 ${task.title} - Due TODAY!`;
  } else {
    return `📌 ${task.title} - Due in ${daysUntil} days`;
  }
};

const processTask = function (tasks, callBack) {
  const result = [];
  for (const task of tasks) {
    result.push(callBack(task));
  }
  return result;
};

console.log(processTask(tasks, isOverdue));
console.log(processTask(tasks, getPriority));
console.log(processTask(tasks, createReminder));
*/

//------------------------------------------------

/*
Challenge 3: Employee Salary Manager 💼
You're processing employee records. Write processEmployees that takes an array of employee objects and a callback.

Write three callback functions:

1) giveRaise - returns a new object with salary increased by 10% (round to nearest integer).
2) getDepartment - returns "Engineering" if role includes "Developer" or "Engineer", "Management" if role includes "Manager" or "Director", "Other" otherwise.
3) formatSummary - returns "Alex (Developer) - $75,000"
*/

/*
const employees = [
  { name: "Alex", role: "Frontend Developer", salary: 75000 },
  { name: "Jamie", role: "Project Manager", salary: 82000 },
  { name: "Taylor", role: "Backend Engineer", salary: 78000 },
  { name: "Jordan", role: "UX Designer", salary: 68000 },
  { name: "Casey", role: "Engineering Director", salary: 95000 },
];

const giveRaise = (employee) => {
  const raise = employee.salary * 0.1;
  return { ...employee, salary: Math.round(employee.salary + raise) };
};

const getDepartment = (employee) => {
  if (employee.role.includes("Developer") || employee.role.includes("Engineer"))
    return "Engineering";
  if (employee.role.includes("Manager") || employee.role.includes("Director"))
    return "Management";
  return "Other";
};

const formatSummary = (employee) => {
  return `${employee.name} (${employee.role}) - $${employee.salary}`;
};

const processEmployees = function (employees, callBack) {
  const result = [];
  for (const employee of employees) {
    result.push(callBack(employee));
  }
  return result;
};

console.log(processEmployees(employees, giveRaise));
console.log(processEmployees(employees, getDepartment));
console.log(processEmployees(employees, formatSummary));
*/

//-----------------------------------------------------

/*
Challenge 4: Weather Data Analyzer 🌤️
You're building a weather app. Write analyzeWeather that takes an array of daily weather data and a callback.

Write three callback functions:

toFahrenheit - converts Celsius to Fahrenheit (C * 9/5 + 32), returns rounded number

weatherDescription - returns "☀️ Sunny" if temp > 25°C, "⛅ Cloudy" if 15-25°C, "❄️ Cold" if < 15°C

formatDaily - returns "Monday: 22°C (⛅ Cloudy)"
*/

/*
const weatherData = [
  { day: "Monday", temp: 22, condition: "Cloudy" },
  { day: "Tuesday", temp: 18, condition: "Rainy" },
  { day: "Wednesday", temp: 30, condition: "Sunny" },
  { day: "Thursday", temp: 12, condition: "Snowy" },
  { day: "Friday", temp: 25, condition: "Clear" },
];

const toFahrenheit = (data) => {
  return Math.round(data.temp * 1.8 + 32);
};

const weatherDescription = (data) => {
  if (data.temp > 25) return `☀️ Sunny`;
  if (data.temp >= 15 && data.temp < 25) return `⛅ Cloudy`;
  return `❄️ Cold`;
};

const formatDaily = (data) => {
  return `${data.day}: ${data.temp}°C - (${weatherDescription(data)})`;
};

const analyzeWeather = function (datas, callBack) {
  const result = [];
  for (const data of datas) {
    result.push(callBack(data));
  }
  return result;
};

console.log(analyzeWeather(weatherData, toFahrenheit));
console.log(analyzeWeather(weatherData, weatherDescription));
console.log(analyzeWeather(weatherData, formatDaily));
*/

//-----------------------------------------------------

/*
// 🎯 THREE CALLBACKS TO WRITE:

// 1. applyLateFee
// - If book is checked out AND overdue (daysOverdue > 0):
//   Return a new object with fee property added (fee = daysOverdue * 0.50)
// - Otherwise return the original book with fee = 0
// HINT: Use ...spread operator to create new object

// 2. getAvailability  
// - If checkedOut is false: return "Available"
// - If checkedOut is true: return `Due on YYYY-MM-DD`
// - If dueDate is null but checkedOut is false: return "Available"

// 3. createCard
// - Return a string like: "📖 '1984' by George Orwell - Due: 2026-08-15"
// - If available: "📖 '1984' by George Orwell - Available"
// HINT: Use getAvailability inside createCard!

// 📝 PROCESSOR FUNCTION:
const processBooks = function (books, callback) {
  // Your loop here - remember to use the parameter!
};

// 🧪 TEST ALL THREE:
console.log(processBooks(books, applyLateFee));
console.log(processBooks(books, getAvailability));
console.log(processBooks(books, createCard));
*/

const books = [
  {
    title: "1984",
    author: "George Orwell",
    checkedOut: true,
    dueDate: "2026-08-15",
  },
  {
    title: "Sapiens",
    author: "Yuval Harari",
    checkedOut: false,
    dueDate: null,
  },
  {
    title: "Dune",
    author: "Frank Herbert",
    checkedOut: true,
    dueDate: "2026-07-20",
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    checkedOut: true,
    dueDate: "2026-08-01",
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    checkedOut: false,
    dueDate: null,
  },
];

const today = new Date(); // Get today's date & time

const applyLateFee = (book) => {
  const due = new Date(book.dueDate); // Convert dueDate string to Date object
  const daysOverdue = Math.floor((today - due) / (1000 * 60 * 60 * 24));
  if (book.checkedOut && daysOverdue > 0)
    return { ...book, fee: daysOverdue * 0.5 };

  return { ...book, fee: 0 };
};

const getAvailability = (book) => {
  if (book.checkedOut === false) return "Available";
  if (book.checkedOut === true) return `Due on ${book.dueDate}`;
  if (!book.dueDate && book.checkedOut === false) return "Available";
};
// x
console.log(
  getAvailability({
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    checkedOut: false,
    dueDate: null,
  }),
);

const createCard = (book) => {
  if (getAvailability(book))
    return `📖 '${book.title}' by ${book.author} - Due: ${book.dueDate}`;
};
// - Return a string like: "📖 '1984' by George Orwell - Due: 2026-08-15"
// - If available: "📖 '1984' by George Orwell - Available"
// HINT: Use getAvailability inside createCard!

// console.log(
//   createCard({
//     title: "1984",
//     author: "George Orwell",
//     checkedOut: true,
//     dueDate: "2026-08-15",
//   }),
// );
// console.log(
//   createCard({
//     title: "The Hobbit",
//     author: "J.R.R. Tolkien",
//     checkedOut: false,
//     dueDate: null,
//   }),
// );
