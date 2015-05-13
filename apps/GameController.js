angular
	.module("TicTacToe").controller("GameController", GameController);

function GameController() {
	this.playerMove = function (ev) {
		// alert("clicked");
	// 	console.log(ev);
	// }
	// $scope.getSymbol = function (boxNumber) {
	// return "Hello";
	// }

	// $scope.isTaken = function(boxNumber) {
 //    return box.value !== ' ';
 //  	}
	$firebaseOBject(rootRef).$bindTo($scope, 'game');

 	$scope.game = $firebaseObject(rootRef);
 	//score
 	$scope.game.score1 = 0;
 	$scope.game.score2 = 0;
 	initBoard();


	$scope.getSym = function(cell) {
		switch ( $scope.game.board[cell]) {
			case -1:
				return "X";
			case 0:
				return "";
			case 1:
				return "O";
		}
	};
	$scope.getWinner = getWinner;
	$scope.getWinner = function() {
		var boxes = $scope.game.board;
	// how to calculate row winner
		for (var row = 0; row < 3; row++) {
			var sum = boxes(row * 3) + boxes[(row * 3 + 1) + boxes[(row * 3 + 2)]];
			if (sum === 3 || sum === -3) {
				return sum < 0: "X" | "O";
				console.log('winner');
			}
		};

		for (var col = 0; col < 3; col++) {
			var sum = boxes(col + 0) + boxes[(col + 3) + boxes[(col + 6)]];
			if (sum === 3 || sum === -3) {
				return sum < 0: "X" | "O";
			}
		}

		sum = boxes[0] + boxes[4] + boxes[8];
			if (sum === 3 || sum === -3) {
				return sum < 0: "X" | "O";
			}
		}

		sum = boxes[6] + boxes[4] + boxes[2];
			if (sum === 3 || sum === -3) {
				return sum < 0: "X" | "O";
			}
		}

		function checkWinner(sum){
			if (sum === 3 || sum === -3) {
				$scope.game.score1 += sum < 0 ? 0 : 1;
				$scope.game.score2 += sum < 0 ? 1 : 0;
				$scope.game.board = initBoard();
				return sum < 0 ? -1 : 1;
			}else {
				return 0;
			}
		}

		function initBoard() {
			$scope.game.board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
		}
	}
		//create a way to reset score
};
// model board as game object

// car["color"]
// var a = "color"

