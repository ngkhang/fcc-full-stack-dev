/*
Build a Voting System

In this lab, you will build a voting system that uses `Map` to create a poll and `Set` to prevent duplicate voting.

Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

    1. You should initialize a `poll` variable to a new `Map` object.
    2. You should have a function `addOption` that accepts a parameter `option`.
    3. In the `addOption` function:
        - If the `option` does not already exist in the poll, it should be added to the poll with an empty `Set` as its value to track voters. You should also return the message Option "<option>" added to the poll.
        - If the `option` already exists, it should return the message Option "<option>" already exists..
        - If you try to add an empty option, the function should return the message Option cannot be empty..
    4. You should have a function `vote` that accepts two parameters, `option` (the option to vote for) and `voterId` (a unique ID for the voter).
    5. In the `vote` function:
        - If the `option` does not exist in the poll, the function should return the message Option "<option>" does not exist..
        - If the `option` exists, the function should check if the `voterId` has already voted for this `option`.
        - If the voter has already voted, the function should return the message Voter <voterId> has already voted for "<option>".
        - If the voter has not voted, `voterId` should be added to the `Set` of `voters` for this option. The function should return the message Voter <voterId> voted for "<option>".
    6. You should have at least three options in your `poll`.
    7. Your `poll` should have at least three votes.
    8. You should have a function `displayResults` that returns the poll results in the following format:
        ```
        Poll Results:
        OptionA: N votes
        OptionB: N votes
        .
        .

        // sample output
        //
        // Poll Results:
        // Turkey: 2 votes
        // Morocco: 1 votes
        ```
*/

let poll = new Map();

const addOption = (option) => {
	if (!option) return "Option cannot be empty.";

	const isExistPoll = poll.has(option);

	if (isExistPoll) return `Option "${option}" already exists.`;

	poll.set(option, new Set());
	return `Option "${option}" added to the poll.`;
};

const vote = (option, voterId) => {
	if (!poll.has(option)) return `Option "${option}" does not exist.`;

	const voters = poll.get(option);

	if (voters.has(voterId))
		return `Voter ${voterId} has already voted for "${option}".`;

	voters.add(voterId);
	return `Voter ${voterId} voted for "${option}".`;
};

const displayResults = () => {
	let result = `Poll Results:`;

	for (const [option, voters] of poll.entries()) {
		result += `\n${option}: ${voters.size} votes`;
	}

	return result;
};

console.log(addOption("Turkey"));
console.log(addOption("Morocco"));
console.log(addOption("Japan"));
console.log(addOption("Vietnam"));

console.log(vote("Turkey", "voter1"));
console.log(vote("Turkey", "voter2"));
console.log(vote("Morocco", "voter1"));
console.log(vote("Japan", "voter3"));
console.log(vote("Vietnam", "voter4"));
console.log(vote("Vietnam", "voter5"));
