// The Story:
// Bob is working as a bus driver. However, he has become extremely popular amongst the city's residents. With so many passengers wanting to get aboard his bus, he sometimes has to face the problem of not enough space left on the bus! He wants you to write a simple program telling him if he will be able to fit all the passengers.

// Task Overview:
// You have to write a function that accepts three parameters:

// cap is the amount of people the bus can hold excluding the driver.
// on is the number of people on the bus excluding the driver.
// wait is the number of people waiting to get on to the bus excluding the driver.
// If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.

// Solution process
// PREP
// P: This function will take 3 parameters, cap, on, and wait.
// cap is the amount of ppl the bus can hold excluding the driver.
// on is the number  on the bus excluding the bus driver.
// wait is the number of ppl waiting to get on the bus excluding the bus driver.
// function should return 0 if there is enough space
// function should return the # of passengers he can't take if there isn't enough space

// R: the function should be returned, or consol logged.

// E: function enough(10, 5, 5) returns 0, he can fit all 5 passengers.
//  function enough(100, 60, 50) returns 10, he can't fit 10 of the 50 waiting

// P:  It sounds like there will be a conditional to see if the amount of ppl on the bus + the amount of ppl waiting will fit within the cap

function enough(cap, on, wait) {
	let sum = on + wait;
	let remainder;
	if (sum > cap) {
		remainder = sum - cap;
		console.log(remainder, `He can't fit ${remainder} of the ${wait} waiting`);
	} else {
		console.log(0, `He can fit all ${wait} passengers`);
	}
}

enough(100, 60, 50);
