// Given a non-empty array of integers, return the result of multiplying the values together in order.

function grow(x) {
	console.log(x.reduce((a, b) => a * b));
}

grow([1, 2, 3, 4]);
