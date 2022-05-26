// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:

// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!

function removeEveryOther(arr) {
	const everyOtherArray = arr.filter((el, index) => index % 2 === 0);
	console.log(everyOtherArray);
}

removeEveryOther(['a', 'b', 'c', 'd', 'e', 'f']);
// PREP
// P -  I will be given an array of elements and I need to write a function that removes every 2nd element from the array.

// R - This will be returned to the console

// E-  example test cases removeEveryOther(['hello', 'goodbye', 'hello again']) --> ['hello', 'hello again']

// P - to me it sounds like I will be using an array method to map over each element of the array. I also need to think of a way to remove an element in the array if it doesn't match a condition. I think the condition will be if the index of that element isn't an even number then get rid of it. Now I just need to figure out how to get the index of the element
