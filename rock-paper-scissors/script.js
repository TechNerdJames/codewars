// Rock Paper Scissors
// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples:

// rps('scissors','paper') // Player 1 won!
// rps('scissors','rock') // Player 2 won!
// rps('paper','paper') // Draw!

const rps = (p1, p2) => {
	switch (p1 + p2) {
		case 'rockscissors':
			return 'Player 1 won!';
		case 'rockpaper':
			return 'Player 2 won!';
		case 'rockrock':
			return 'Draw!';
		case 'paperrock':
			return 'Player 1 won!';
		case 'paperpaper':
			return 'Draw!';
		case 'paperscissors':
			return 'Player 2 won!';
		case 'scissorsrock':
			return 'Player 2 won!';
		case 'scissorspaper':
			return 'Player 1 won!';
		case 'scissorsscissors':
			return 'Draw!';
	}
};
rps('scissors', 'rock');
