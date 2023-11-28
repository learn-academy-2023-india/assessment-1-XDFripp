// ASSESSMENT 1: Coding Practical Questions

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, leave comments to help us understand your thought process

// Run the file with the following command: $ node code-challenges.js

// --------------------INSTRUCTOR EXAMPLE: Create a function that evaluates two strings and determines which of the strings has more characters. Use the two sets of test variables provided.

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"
// Expected outcome: "cherry"

// Pseudo code:


// --------------------1) Create the code that will combine the two arrays and return the length using the test variables provided below.

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]

// console.log((padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns)).length)
// Expected output: 9

// Pseudo code: 
//   Input: combine both const arrays 
//   Output: after combined they should equal the expected output which is 9
//   What we want to do is combine both const.  To do so, we would .concat(padres1998worldSeriesRuns) to the end of padres1994WorldSeriesRuns.
//   Once that is done, we have to .length at the end of all of that to get the number output, otherwise the terminal would just kick out
//   all 9 numbers in a combined array.


// --------------------2) Create the code that will reverse the letters of a string using the test variable provided below.

const currentCohort = "LEARN 2023"

// var reverseCo = (currentCohort.split("")).reverse()
// console.log(reverseCo.join(""))
// Expected output: "3202 NRAEL"

// Pseudo code:
//   Input: Split, reverse, and join the const currentCohort
//   Output: Reversing the output of 'Learn 2023'
//   You first must declare a name for your variable which in this case is reverseCo.  From there, you split and reverse the const currentCohort which 
//   will split your string up into individual characters then reverse the order of those characters.  Once that is done, you console.log that 
//   variable and .join it to turn those indiviual characters back into a string.




// --------------------3) Use a for loop to log only the odd numbers from the array using the test variable provided below.

const stockExchange = [13, 34, -4, 42, 5, -5, 10, 27, 42, 10]

// for(let x = 0; x < stockExchange.length; x++) {
//     if(stockExchange[x] % 2 !== 0) {
//         console.log(stockExchange[x])
//     }
// }
// Expected output: 13 5 -5 27

// Pseudo code:
//   Input: convert stockExchange into for loop
//   Output: Pulling all odd numbers from stockExchange array
//   To begin with a for loop, we are going to have a for(let) formula.  We want to start at the 0 index and go for the entire length
//   of the array so x = 0 and x < stockExchange.length with x++ as we want to progress through the array 1 index at a time.  Once done,
//   we move on to the if statement.  We would have stockExchange[x] and divide it by 2 and want every answer that doesn't equal 0, so 
//   we could use !==.  We would then console.log(stockExchange[x]) and we should get our answer of 13, 5, -5, and 27.

