var currentPlayer = 1;
function playerMove() {

if gameOver {
	// do nothing
	}
} else {
	
	this.data = [0, 0, 0, 0, 0, 0, 0, 0, 0];

	this.getSym = function(cell) {
		switch ( this.data[cell]) {
			case -1:
				return "X";
			case 0:
				return "";
			case 1:
				return "O";
		}
	}

	this.getWinner = function() {
		this.winner = "";
	}

	for (var i = 0; i < 3; i*3, i*3+1) {
		console.log('winner');
	}

	if (board[tile name] = 0) {
		change board[tile name] to currentPlayer;
		change board[tile name] color to currentPlayer color;
		run winner() {
			check to see if currentPlayer won {
				gameOver = true;
			} else {
				if currentPlayer = 1 {
					currentPlayer = -1;
				}else {
					currentPlayer = 1;
				}
			};

		}
	}else {
		// do nothing
	}
}
}
}

};