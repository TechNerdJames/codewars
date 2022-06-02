// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

function highAndLow(numbers) {
	const numArray = numbers.split(' ');
	const nums = numArray.map((num) => parseInt(num));
	const maxNum = Math.max(...nums);
	const minNum = Math.min(...nums);

	console.log(`${maxNum} ${minNum}`);
}

highAndLow('1 2 3 4 5');
