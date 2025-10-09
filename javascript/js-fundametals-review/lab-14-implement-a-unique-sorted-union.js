/*
Implement a Unique Sorted Union

Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

    1. You should have a function named `uniteUnique`.
    2. The `uniteUnique` function should accept two or more arrays as arguments.
    3. The function should return a new array that contains unique values from the argument arrays, in the order they are first found in the arguments. For example, an input like [1, 2, 4], [2, 3, 5] would have an output of [1, 2, 4, 3, 5].
*/
function uniteUnique(...arr) {
	const unique = new Set();

	for (let i = 0; i < arr.length; i++) {
		const nums = arr[i];

		for (let j = 0; j < nums.length; j++) {
			const num = nums[j];

			if (!unique.has(num)) unique.add(num);
		}
	}

	return [...unique.keys()];
}
