
const numbers = [4, 8, 12, 11, 16, 17, 10];


// Program to find the maximum number in an array
function findMaximum(arr) {
    let max = arr[0];

    for (let num of arr) {
        if (num > max) {
            max = num;
        }
    }

    return max;
}


// Program to calculate the sum of all elements in an array
const calculateSum = function (arr) {
    let sum = 0;

    for (let num of arr) {
        sum = sum + num;
    }

    return sum;
};


// Program to count the number of odd numbers in an array
const countOddNumbers = (arr) => {
    let count = 0;

    for (let num of arr) {
        if (num % 2 !== 0) {
            count++;
        }
    }

    return count;
};


const maximum = findMaximum(numbers);
const sum = calculateSum(numbers);
const oddCount = countOddNumbers(numbers);


// output
console.log("Array:", numbers);
console.log("Maximum number in an array:", maximum);
console.log("Sum of all elements in an array:", sum);
console.log("Count of odd numbers in an array:", oddCount);