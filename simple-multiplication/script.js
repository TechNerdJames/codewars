// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

function simpleMultiplication(number) {
	number % 2 === 0 ? console.log(number * 8) : console.log(number * 9);
}

simpleMultiplication(24);
