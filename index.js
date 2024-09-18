// Q:1  Write a function named calculateDifference that takes two arguments and returns the difference between the first and second argument.

function calculateDifference(a, b) {

    return a - b;
}

console.log(calculateDifference(10, 5));
console.log(calculateDifference(3, 7));  





// Q:2 Write a function named isOdd that takes one argument and returns true if the number is odd, and false if it is not.

function isOdd(num) {
    return num % 2 !== 0;
}

console.log(isOdd(3)); 
console.log(isOdd(4)); 





// Q:3 Write a function named findMin that takes an array of numbers and returns the smallest number in the array.

function findMin(numbers) {
    return Math.min(...numbers);
}

console.log(findMin([3, 1, 4, 1, 5, 9])); 
console.log(findMin([-10, 0, 10, -20, 30])); 





// Q:4  Write a function named filterEvenNumbers that takes an array of numbers and returns a new array containing only the even numbers.

function filterEvenNumbers(numbers) {
    return numbers.filter(num => num % 2 === 0);
}

console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6])); 
console.log(filterEvenNumbers([10, 15, 20, 25, 30])); 






// Q:5 Write a function named sortArrayDescending that takes an array of numbers and returns a new array sorted in descending order.

function sortArrayDescending(numbers) {
    return numbers.slice().sort((a, b) => b - a);
}

console.log(sortArrayDescending([3, 1, 4, 1, 5, 9])); 
console.log(sortArrayDescending([-10, 0, 10, -20, 30])); 






// Q:6 Write a function named lowercaseFirstLetter that takes a string and returns the same string with the first letter lowercased.

function lowercaseFirstLetter(str) {
    if (str.length === 0) {
        return str;
    }
    return str.charAt(0).toLowerCase() + str.slice(1);
}

console.log(lowercaseFirstLetter("Hello World")); 
console.log(lowercaseFirstLetter("JavaScript")); 






// Q:7 Write a function named countVowels that takes a string and returns the number of vowels (a, e, i, o, u, A, E, I, O, U) in the string. It should filter vowels from the string.

function countVowels(str) {
    const vowels = /[aeiouAEIOU]/g;
    const matches = str.match(vowels);
    return matches ? matches.length : 0;
}

console.log(countVowels("Hello World")); 
console.log(countVowels("JavaScript"));  





//Q;8 Write a function named findAverage that takes an array of numbers and returns the average of all elements.

function findAverage(numbers) {
    if (numbers.length === 0) {
        return 0;
    }
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
}

console.log(findAverage([1, 2, 3, 4, 5])); 
console.log(findAverage([10, 20, 30, 40, 50]));

