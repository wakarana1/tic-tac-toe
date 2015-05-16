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

	// $scope.game.player1 = -1;
	// $scope.game.player2 = 1;
	var thisPlayer;


	//code runs when player clicks on a cell
	$scope.playerMove = function (cellIndex) {
			if (thisPlayer == $scope.game.currentPlayer) {

				// $scope.game.players.player1.wins = 0;       
				// $scope.game.players.player2.wins = 0;
				if ($scope.game.board[cellIndex] !== 0) {
					return;
				}
				$scope.game.board[cellIndex] = $scope.game.currentPlayer;
				console.log('clicky clicky');
				getWinner();

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
			return -1;
	   }else if (sum === 3) {
			$scope.game.players.player2.wins++;
			return 1;			
	   }else {
	   		return;
	   }
	}

	// resets the game
	$scope.resetGame = function(){
		$scope.game.board = [0,0,0,0,0,0,0,0];
		};


 // function to figure out the winner
	function getWinner() {

		var sum = 0;
		var winner = 0;

		for(var row = 0; row < 3; row++){
	    	sum = $scope.game.board[row * 3] + $scope.game.board[row * 3 + 1] + $scope.game.board[row * 3 + 2];
	    	winner = checkWinner(sum);
	    	if ( winner ) {
	    		console.log("Winner!");
	    		return winner; 
	    	}
	   }

		for(var col = 0; col < 3; col++){
			sum = $scope.game.board[col] + $scope.game.board[col + 3] + $scope.game.board[col + 6];
			winner = checkWinner(sum);
			if ( winner ) {
				return winner;
			}
	   }

		sum = $scope.game.board[0] + $scope.game.board[4] + $scope.game.board[8];
		winner = checkWinner(sum);
			if ( winner ) {
				return winner; }

		sum = $scope.game.board[6] + $scope.game.board[4] + $scope.game.board[2];
		winner = checkWinner(sum);
		if ( winner ) {
			return winner; 
		}

		return 0;
	}
}