angular
	.module("TicTacToe")
	.controller("GameController", GameController);

	GameController.$inject = ['$scope', '$firebaseObject'];

function GameController($scope, $firebaseObject) {

	var ref = new Firebase("https://wakarana1-tic-tac-toe.firebaseio.com");
	$firebaseObject(ref).$bindTo($scope, "game").then(function(){
		if ($scope.game.players.player1.name === ""){
			$scope.game.players.player1.name = "X";
			thisPlayer = -1;
		}else if ($scope.game.players.player2.name === "") {
			$scope.game.players.player2.name = "Y";
			thisPlayer = 1;
		}else {
			alert("SPECTATOR");
		}
	});

	var thisPlayer;


	//code runs when player clicks on a cell
	$scope.playerMove = function (cellIndex) {

		//restricts move on game over
		if ($scope.game.gameOver === "true") {
			$scope.game.currentPlayer = 0;
		}
		if (thisPlayer == $scope.game.currentPlayer) {
			//prevents player from replacing other player's move
			if ($scope.game.board[cellIndex] !== 0) {
				return;
			}

			$scope.game.board[cellIndex] = $scope.game.currentPlayer;
			
			getWinner();

			//switch player's turn
			if ($scope.game.currentPlayer === -1) {
				$scope.game.currentPlayer = 1;
			}else{
				$scope.game.currentPlayer = -1;
			}
		}else {
			return ;
		}
	};

// checks who wins and assigns points to x/y
	function checkWinner(sum) {
	   if ( sum === -3) {
			$scope.game.players.player1.wins++;
			$scope.game.gameOver = "true";
			alert('X Wins!');
			return -1;
	   }else if (sum === 3) {
			$scope.game.players.player2.wins++;
			$scope.game.gameOver = "true";
			alert('Zero Wins!');
			return 1;			
	   }else {
	   		return 0;
	   }
	}

	// resets the game
	$scope.resetGame = function(){
		$scope.game.board = [0,0,0,0,0,0,0,0,0];
		$scope.game.gameOver = "false";
		$scope.game.currentPlayer = -1;
	};

	//leave game
	$scope.leaveGame = function(){
			$scope.game.players.player1.name = "";
			$scope.game.players.player2.name = "";
	};



 // function to figure out the winner
	function getWinner() {

		var sum = 0;
		var winner = 0;

		for(var row = 0; row < 3; row++){
	    	sum = $scope.game.board[row * 3] + $scope.game.board[row * 3 + 1] + $scope.game.board[row * 3 + 2];
	    	winner = checkWinner(sum);
	    	// if ( winner ) {
	    	// 	return winner; 
	    	// }
	   }

		for(var col = 0; col < 3; col++){
			sum = $scope.game.board[col] + $scope.game.board[col + 3] + $scope.game.board[col + 6];
			winner = checkWinner(sum);
			// if ( winner ) {
			// 	return winner;
			// }
	   }

		sum = $scope.game.board[0] + $scope.game.board[4] + $scope.game.board[8];
		winner = checkWinner(sum);
		// 	if ( winner ) {
		// 		return winner; 
		// }

		sum = $scope.game.board[6] + $scope.game.board[4] + $scope.game.board[2];
		winner = checkWinner(sum);
		// if ( winner ) {
		// 	return winner; 
		// }

		return 0;
	}
}