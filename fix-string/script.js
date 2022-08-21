// In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

// make as few changes as possible.
// if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
// For example:

// solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
// solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
// solve("coDE") = "code". Upper == lowercase. Change all to lowercase.

function solve(str) {
	const newStr = str.split('');
	const lowerCase = newStr.filter(
		(letter) => letter === letter.toLowerCase()
	).length;
	const upperCase = newStr.filter(
		(letter) => letter === letter.toUpperCase()
	).length;

	if (lowerCase > upperCase) {
		return str.toLowerCase();
	} else if (upperCase > lowerCase) {
		return str.toUpperCase();
	} else {
		return str.toLowerCase();
	}
}
console.log(solve('COde'));
