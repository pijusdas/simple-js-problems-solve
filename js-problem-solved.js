// 1: Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 
const reveserStr = str => {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

console.log(reveserStr('Hello')) // output:  olleH


//2: Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 

const sumOfPositiveNum = numbers =>{
    let positiveNum = 0;
    for(let num of numbers){
        if(num > 0){
            positiveNum += num
        }
    }
    return positiveNum;
}

console.log(sumOfPositiveNum( [2, -5, 10, -3, 7] )) // output 19


//3: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.

function twoSum(array, target) {
    let i = 0;
    let j = array.length - 1;
    let seen = new Set();
    while (i < j) {
      if (array[i] + array[j] === target && !seen.has(array[i])) {
        seen.add(array[i]);
        return [i, j];
      } else if (array[i] + array[j] < target) {
        i++;
      } else {
        j--;
      }
    }
    return [];
  }
  
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const target = 10;
  
  const indices = twoSum(array, target);
  
  console.log(indices);
  

  // 4: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.


  const calculateTwoNum = (num1 ,operator, num2)=> {
    if(operator == '+'){

        return num1 + num2
    }
    else if(operator == '-'){

        return num1 - num2
    }
    else if(operator == '*'){

        return num1 * num2
    }
    else if(operator == '/'){

        if (num2 !== 0) {
            return num1 / num2;
          }
          else return 'Error: Cannot divide by zero'
    }
    else return 'Error: Invalid operator'
  }
  const num1 = 10;
const num2 = 5;
const operator = '*';
const result = calculateTwoNum(num1, operator, num2);
console.log(result); //out put 50


// 5: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.


function generateRandomPassword(length) {
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const specialChars = '!@#$%^&*()_-+=<>?/{}~';
  
    const allChars = uppercaseChars + lowercaseChars + numberChars + specialChars;
  
    let password = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allChars.length);
      password += allChars[randomIndex];
    }
  
    return password;
  }
  
  const passwordLength = 7;
  const randomPassword = generateRandomPassword(passwordLength);
  console.log(randomPassword);
  

// 6:   Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.

function romanToInt(romanNumeral) {
    const romanNumerals = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000
    };
  
    let result = 0;
    let prevValue = 0;
  
    for (let i = romanNumeral.length - 1; i >= 0; i--) {
      const currentRoman = romanNumeral[i];
      const currentValue = romanNumerals[currentRoman];
  
      if (currentValue < prevValue) {
        result -= currentValue;
      } else {
        result += currentValue;
      }
  
      prevValue = currentValue;
    }
  
    return result;
  }

  const romanNumeral1 = "IX";
const romanNumeral2 = "XXI";

console.log(romanToInt(romanNumeral1)); // Output: 9
console.log(romanToInt(romanNumeral2)); // Output: 21


// 7:  Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.

function findSecondSmallest(arr) {
    if (arr.length < 2) {
      return 'Array must have at least two elements';
    }
  
    let smallest = Infinity;
    let secondSmallest = Infinity;
  
    for (let num of arr) {
      if (num < smallest) {
        secondSmallest = smallest;
        smallest = num;
      } else if (num < secondSmallest && num !== smallest) {
        secondSmallest = num;
      }
    }
  
    if (secondSmallest === Infinity) {
      return 'There is no second smallest element in the array';
    }
  
    return secondSmallest;
  }
  const numbers = [9, 5, 1, 7, 3, 8, 2, 6];
  const secondSmallest = findSecondSmallest(numbers);
  console.log(secondSmallest); // Output: 2
    