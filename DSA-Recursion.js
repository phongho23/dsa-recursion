// 1. Counting Sheep
// Write a recursive function that counts how many sheep jump over the fence. Your program should take a number as input. That number should be the number of sheep you have. The function should display the number along with the message "Another sheep jumps over the fence" until no more sheep are left.

// Input: 3
// Output:
// 3: Another sheep jumps over the fence
// 2: Another sheep jumps over the fence
// 1: Another sheep jumps over the fence
// All sheep jumped over the fence

const countingSheep = (numSheeps) => {
    if (numSheeps === 0) {
        console.log('All sheep jumped over the fence')
        return
    }

    console.log(numSheeps + ': Another sheep jumps over the fence')
    return countingSheep(numSheeps - 1)
}

countingSheep(3)

// 2. Power Calculator
// Write a function called powerCalculator() that takes two parameters, an integer as a base, and another integer as an exponent. 
//The function returns the value of the base raised to the power of the exponent. Use only exponents greater than or equal to 0 (positive numbers)

// powerCalculator(10,2) should return 100
// powerCalculator(10,-2) should return exponent should be >= 0

const powerCalculator = (num, power) => {

    if (power < 0) {
        return `exponent should be >= 0`
    }

    if (power === 0) {
        return 1;
    }

    return num * powerCalculator(num, power - 1)
};

console.log(powerCalculator(10,2));
console.log(powerCalculator(10, -2));


// 3. Reverse String
// Write a function that reverses a string. 
//Take a string as input, reverse the string, and return the new string.

const reverseString = (str) => {
    if (str === '') {
        return ''
    }

    const newChar = str[0]

    return reverseString(str.slice(1)) + newChar
}

console.log(reverseString('sparkling'))

// 4. nth Triangular Number
// Calculate the nth triangular number. 
// A triangular number counts the objects that can form an equilateral triangle. 
// The nth triangular number is the number of dots composing a triangle with n dots on a side, 
// and is equal to the sum of the n natural numbers from 1 to n. 
// This is the Triangular Number Sequence: 1, 3, 6, 10, 15, 21, 28, 36, 45.

//                           *
//             *           *    *
// *     |   *   *  |   *    *    *  |

//  1st       2nd           3rd             nth?  

const triangularNumber = number => {

    if (number === 0) {
        return 0;
    }

    return number + triangularNumber(number - 1);
};

console.log(triangularNumber(6));
console.log(triangularNumber(3))
//21

// 5. String Splitter
// Write a recursive function that splits a string based on a separator (similar to String.prototype.split). 
//Don't use JS array's split function to solve this problem.

// Input: 02/20/2020
// Output: ["02", "20", "2020"]



// 6. Fibonacci
// Write a recursive function that prints the Fibonacci sequence of a given number. 
// The Fibonacci sequence is a series of numbers in which each number is the sum of the 2 preceding numbers. 
// For example, the 7th Fibonacci number in a Fibonacci sequence is 13. The sequence looks as follows: 1, 1, 2, 3, 5, 8, 13.

//need 2 review this one 

const fibonacci = number => {
    if (number <= 1) {
        return 1
    }
    return fibonacci(number - 1) + fibonacci(number - 2)
};


console.log('fibonacci')
console.log(fibonacci(7));
console.log(fibonacci(2));
console.log(fibonacci(1));
console.log(fibonacci(0));
console.log(fibonacci(8));


// 7. Factorial
// Write a recursive function that finds the factorial of a given number. 
// The factorial of a number can be found by multiplying that number by each number between itself and 1. 
// For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.

// factorial 5 = 5 * factorial(4) ==== factorial(5) = 5*24 = 120 
// factorial 4 = 4 * factorial(3) ==== factorial(4) = 4*6 = 24
// factorial 3 = 3 * factorial(2) ==== factorial(3) = 3*2 = 6
// factorial 2 = 2 * factorial(1) ==== factorial(2) = 2*1 = 2
// factorial 1 = 1 * factorial(0) ==== factorial(1) = 1*1 = 1

const factorial = (num) => {
    if (num === 0) {
        return 1
    }
    else {
        return num * factorial(num - 1);
    }
}

console.log('factorial')
console.log(factorial(5));


// 10. Anagrams
// An anagram is any word or phrase that uses the letters of a given ("subject") word or phrase in another, rearranged order. 
// Write a function that creates an anagram list, listing all the rearrangements of a given word. 
// For example, if the user types "east", the program should list all 24 permutations, including "eats", "etas", "teas", and non-words like "tsae".

// Hint: For your algorithm, you might want to think about a prefix and use that to create the new words. 
// For example, given "east", use "e" as a prefix and place it in front of all 6 permutations of "ast" — "ast", "ats", "sat", "sta", "tas", and "tsa". 
// This will give you the words "east", "eats", "esat", "esta", "etas", and "etsa". 
// Continue this way until you find all the anagrams for "east". 
// Then you can use "a" as a prefix and permute the remaining words "est". 
// For "east", there should be 24 words.





// 11. Organization Chart
// Write a recursive function that prints the following organization chart. 
// Your output should be as shown below with proper indentation to show the hierarchy. 
// You may store the org chart in an object and send that as an input to your program.







// 12. Binary Representation
// Write a recursive function that prints out the binary representation of a given number. 
// For example, the program should take 3 as an input and print 11 as output, or 25 as an input and print 11001 as an output. 
// Note that the binary representation of 0 should be 0.





