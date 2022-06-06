// Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

function solution(nums) {
	nums === null ? console.log([]) : console.log(nums.sort((a, b) => a - b));
}

solution([1, 10, 105, 78, 4, 67]);
