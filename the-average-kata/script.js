// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

// Note:
// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

function betterThanAverage(classPoints, yourPoints) {
	classPoints.push(yourPoints);
	const sum = classPoints.reduce((a, b) => {
		return a + b;
	});
	const average = sum / classPoints.length;
	console.log(sum);
	console.log(average);

	if (yourPoints > average) {
		console.log(true);
	} else {
		console.log(false);
	}
}
betterThanAverage([90, 40, 100, 25, 55, 78, 80], 52);
