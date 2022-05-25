// Your function takes two arguments:

// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).

function twiceAsOld(dadYearsOld, sonYearsOld) {
	const twiceAge = sonYearsOld * 2;
	if (twiceAge > dadYearsOld) {
		console.log(
			`dad was twice as old as son ${twiceAge - dadYearsOld} years ago.`
		);
	} else if (twiceAge < dadYearsOld) {
		console.log(
			`it will take ${
				dadYearsOld - twiceAge
			} years for dad to be twice as old as son.`
		);
	} else {
		console.log(
			`${dadYearsOld - twiceAge} Dad is currently twice as old as son.`
		);
	}
}

twiceAsOld(22, 1);
