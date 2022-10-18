/* 
1. Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. 
Do some googling to figure this out if you forget how conditionals work.
*/

maxOfTwoNumbers = (num1, num2) => {
  // ADD YOUR CODE HERE
if(num1 > num2){
  return `num1 ${num1} is bigger than num2 ${num2}`
} else if( num2 > num1){
  return `num2 ${num2} is bigger than num1 ${num1}`
}else if( num1 === num2){
  return `both num1 ${num1} and num2 ${num2} are equal`
}
};
console.log(maxOfTwoNumbers(10 , 11));


/*
2. Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
*/
maxOfThree = (x,y,z) => {
   // ADD YOUR CODE HERE
  return Math.max(x,y,z)
 };
 console.log(maxOfThree(2,3,4));

/*
3. Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
*/
isCharacterAVowel = (char) => {
  // ADD YOUR CODE HERE
  if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){
    return 'true, it is vowel';
  }else {
    return 'false, the letter is not vowel';
  }
  };
console.log(isCharacterAVowel('a'));
console.log(isCharacterAVowel('v'));

/*
4. Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers.
 For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
*/
// sumArray([1,2,3,4]);
// multiplyArray([1,2,3,4]);

const sumArray = (number) => {
  // ADD YOUR CODE HERE
  var result = 0;
	for (var i = 0; i < number.length; i++) {
		result += number[i];
	}
	return result;
}
console.log(sumArray([1,2,3,4]));


const multiplyArray = (number) => {
  var result = 1;
	for (var i = 0; i < number.length; i++) {
		result = (result * number[i]);
	}
	return result;
}
  console.log(multiplyArray([1,2,3,4]));


/*
5.Write a function that returns the number of arguments passed to the function when called.
*/
const argLength = (...args) => args.length;
console.log(argLength("toom",))

/*
6. Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
*/

reverseString = (string) => {
  // ADD YOUR CODE HERE
 let text = '';
    
    for (let i = string.length - 1; i >= 0; i--) {
    	text += string[i];
    	continue
    }
    return text.toLowerCase();
};
console.log(reverseString("jag testar"));


/*
7. Write a function findLongestWord that takes an array of words and returns the length of the longest one.
*/
findLongestWord = (arr) => {
  let longestWord = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longestWord) {
      longestWord = arr[i].length;
    }
  }
  return longestWord;
}

/*
8. Write a function filterLongWords that takes an array of words and a number i and returns the array of words that are longer than i characters long.
*/
filterLongWords = (arr, num) =>
{// ADD YOUR CODE HERE
    newArr = [];
    for (var i = 0; i < arr.length; i++) {
      if(arr[i].length > num){
        newArr.push(arr[i]);
      }
    }
    return newArr;
  
};
console.log(filterLongWords(['i love u']))
