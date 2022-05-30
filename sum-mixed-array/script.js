// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

function sumMix(x) {
	const numArray = x.map((num) => parseInt(num));
	console.log(numArray);
	console.log(numArray.reduce((a, b) => a + b));
}
sumMix([0, '1', 2, 3, '4', 5]);
