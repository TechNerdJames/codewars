// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

function reverseWords(str) {
	const splitWords = str.split(' ');

	const reverse = splitWords.map((word) => word.split('').reverse().join(''));

	const reversedWords = reverse.join(' ');

	console.log(reversedWords);
}
reverseWords('The quick brown fox jumps over the lazy dog.');
