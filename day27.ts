
// Day 27

// ### Question 1: Count the Number of Divisors
// *Description:*
// Write a TypeScript function that takes a positive integer as input and returns the number of its divisors (factors). A divisor is a number that divides the input number without leaving a remainder.

// *Example:*
// typescript
// Input: 12
// Output: 6  // (1, 2, 3, 4, 6, 12)

// Input: 7
// Output: 2  // (1, 7)


// *Hint:* Use a loop to check each number from 1 to the given number to see if it divides the number evenly.

// ---

function countDivisors(num: number):number{
    let count = 0;
    for(let i=0; i<=num; i++){
        if(num % i === 0){
         count++
        }
    }
    return count;
}

console.log(countDivisors(12)); // Output: 6 (1,2,3,4,6,7);
console.log(countDivisors(7));  // Output: 2 (1,7);

// ### Question 2: Check if a Number is a Perfect Square
// *Description:*
// Write a TypeScript function that takes a positive integer as input and returns true if the number is a perfect square, otherwise return false. A perfect square is a number that is the square of an integer.

// *Example:*
// typescript
// Input: 16
// Output: true  // (4 * 4 = 16)

// Input: 20
// Output: false

// *Hint:* Use the square root function Math.sqrt() and check if the result is an integer.

// if we solve manually without builtin method: 
function isPerfectSquare(num: number):boolean{
     if(num < 1) return false;
     let i = 1;

     while( i * i <= num){
     if(i * i === num){
        return true;
     }
     i++
     }
     return false;
}

console.log(isPerfectSquare(16)); // Output: true
console.log(isPerfectSquare(20)); // Output: false


// *Hint:* Use the square root function Math.sqrt() and check if the result is an integer.
// if we solve this question according to hint :

function IsPerfectSquare(num: number): boolean {
    const sqrt = Math.sqrt(num);  // Number ka square root lo
    return Number.isInteger(sqrt);  // Check karo ke yeh integer hai ya nahi
}

// Example usage:
console.log(IsPerfectSquare(16)); // Output: true
console.log(IsPerfectSquare(20)); // Output: false










