// ## Easy Going
// 1. Write a for loop that will log the numbers 1 through 20.

for (let i = 1; i < 21; i++) {
  console.log(i);
}

// => "Commit 1 -Easy Going answered"

// ## Get Even
// 1. Write a for loop that will log only the even numbers in 0 through 200.
// >Hint: Think about the increment expression.

for (let i = 0; i < 201; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

// => "Commit 2 - Get Even answered"

// ## Excited Kitten
// 1. Write code that logs "Love me, pet me! HSSSSSS!" 20 times.

for (let i = 1; i <21; i++) {
  console.log("Love me, pet me! HSSSSSS!");
}

// 2. For every **even** number in your loop, log "...human...why you taking pictures of me?...",
//  "...the catnip made me do it...", or "...why does the red dot always get away..." at random.
// >Hint: You will need to use Math.random()



function randomCatResponse(catResponse) {
          return catResponse[Math.floor(Math.random()*catResponse.length)];
}

let catResponse = ["...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..."];

console.log(randomCatResponse(catResponse));
console.log(randomCatResponse(catResponse));
console.log(randomCatResponse(catResponse));
console.log(randomCatResponse(catResponse));


for (let i = 1; i < 21; i++) {
	console.log("Love me, pet me! HSSSSSS!");
	if (i % 2 === 0) {
    console.log(randomCatResponse(catResponse));
	}
}

// Definitely spent way too long trouble shooting this problem... :(




// => "Commit 3 - Excited Kittens answered"



// ## Fizz Buzz
//
// 1. Write a javascript application that logs all numbers from 1 - 100.
//
// 2. If a number is divisible by 3 log "Fizz" instead of the number.
//
// 3. If a number is divisible by 5 log "Buzz" instead of the number.
//
// 4. If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number.

for (let i = 1; i < 101; i++) {

      if((i % 3 === 0) && (i % 5 === 0)) {
            console.log("FizzBuzz");
      } else if (i % 3 === 0) {
            console.log("Fizz")
      } else if (i % 5 === 0) {
            console.log("Buzz")
      } else {
	         console.log(i);
         }
}


// "Commit 4 - Fizz Buzz answered"



// ## Getting to Know You
// Use the following arrays to answer the questions below (name, age, hometown):
// ```
// const thom = ["Thom", 1000, "Christchurch"]
// const karolin = ["Karolin", 16, "New York"]
// const kristyn = ["Kristyn", 5, "Pittsburgh"]
// const matt = ["Matt H", 186, "Philadelphia"]
// ```
// 1. Matt H. decides that Thom. can't be named "Thom" anymore.
//  Remove "Thom" from the `thom` array and replace it with "Gameboy".
//
// 2. Karolin just had her birthday;
//  change Karolin's array to reflect her being a year older.
//
// 3. Change Matt H's hometown from Philadelphia to "Gotham City".
//
// 4. Remove "Pittsburgh" from Kristyn's array and add "Brooklyn".
//

const thom = ["Thom", 1000, "Christchurch"]
const karolin = ["Karolin", 16, "New York"]
const kristyn = ["Kristyn", 5, "Pittsburgh"]
const matt = ["Matt H", 186, "Philadelphia"]

thom[0] = "Gameboy";
    console.log(thom);
karolin[1] = 17;
    console.log(karolin);
matt[2] = "Gotham City";
    console.log(matt);
kristyn[2] = "Brooklyn";
    console.log(kristyn);


//
// "Commit 5 - Getting to Know You answered"



// ## Yell at the Ninja Turtles
// 1. Create an array with the members of the ninja turtles
//  (Donatello, Leonardo, Raphael, Michaelangelo)
//
// 2. Use a `for loop` to call `toUpperCase()` on each of them and print out the result.

const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];

for (let i = 0; i < ninjaTurtles.length; i++) {
	     console.log(ninjaTurtles[i].toUpperCase());
}









// "Commit 6 - Yell at the Ninja Turtles answered"

// ## Return of the Closets
// EXAMPLES

// => NO COMMIT



// ### Alien Attire
// 1. Kristyn's left shoe has traveled through time and space and turned up
//  in Thom's accessories drawer! Remove Kristyn's shoe from the array
//   and save it to the variable `kristynsShoe`. Use that variable to
//    add Kristyn's lost shoe to Thom's accessories array.



// ### Dress Us Up
// 1. Modify your code to put together **3 separate outfits**
// for Kristyn and Thom. Put the output in a sentence
//  to tell us what we'll be wearing. Mix and match!












// => "Commit 7 - Kristyn and Thom have their outfits ready for class - array practice"


// ### Dirty Laundry
// Continue looking at the closet arrays:
// 1. Time to do laundry - loop through Kristyn's
// closet and log the sentence "WHIRR: Now washing (item)"
//  for each item in the array.

// ### Inventory
// 2. Thom wants to do inventory on his closet. Using **bracket notation**,
//  log the arrays containing all of Thom's shirts, pants, and accessories.








// => "Commit 8 - I loops through their closets".


// ## Multiples of 3 and 5
//
// _Yes, you might have tackled this earlier, but
// try it again (don't look back at your other code :eyes:)_





// If we list all the natural numbers below 10 that are multiples
// of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
//
// Find the sum of all the multiples of 3 or 5 below 1000.
//
// :clap: You just solved [Project Euler](https://projecteuler.net/problem=1) problem 1! :clap:











// => "Commit 9 - Project Euler Problem 1 answered"

// ---


// # Hungry for more?
//
// ## Triangles
//
// 0. declare a variable `argument` and set it equal to 7.
//
// 1. Write a loop that console logs a "left isosceles" triangle
// (SEE BELOW) made of '#' that has the height and length of `argument`.
//
// >Ex: argument is 7
// ```
// #
// ##
// ###
// ####
// #####
// ######
// #######
// ```




// 2. Write a loop that console logs a "right isosceles" triangle
// (SEE BELOW) made of '#' that has the height and length of `argument`.
//   This is deceptively tricky.
//
// >Ex: argument is 7
// ```
//       #
//      ##
//     ###
//    ####
//   #####
//  ######
// #######
// ```


// 3. Write a loop that console logs an "upside down left" isosceles triangle made
//  of '#' that has the height and length of the argument.
//
// >Ex: argument is 7
// ```
// #######
// ######
// #####
// ####
// ###
// ##
// #
// ```




// 4. Write a loop that console logs an "upside down right" isosceles
// triangle made of '#' that has the height and length of the argument.
//  This is also tricky.
//
// >Ex: argument is 7
// ```
// #######
//  ######
//   #####
//    ####
//     ###
//      ##
//       #
// ```

// 5. Change the value of argument and reload your code and marvel at
//  how you just solved a challenging problem and feel proud of yourself.
//
//
//
//
//
//










// => "Commit 10 - Triangles answered"





// ## Find the Median
// - Find the median number in the following `nums` array,
//                           then console.log that number.
// -  _hint_ if you check the length of the array / 2,
//     you might get not get a whole number.
//     In which case, look into `Math.floor( // something )`
//
// ```
// const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];
//
// Expected output:
// => 15
// ```















// => "Commit 11 - Find the Median answered"
