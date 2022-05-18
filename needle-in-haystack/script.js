// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

// findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
// should return "found the needle at position 5" (in COBOL "found the needle at position 6")

const haystack = [
	'needle',
	'hay',
	'random',
	'randomJunk',
	'moreJunk',
	'hayAgain',
	'junk',
];

function findNeedle(arr) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === 'needle') {
			console.log(`found the needle at position ${i}`);
		}
	}
}

findNeedle(haystack);
