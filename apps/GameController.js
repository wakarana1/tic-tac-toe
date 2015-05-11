angular
	.module("TicTacToe").controller("GameController", GameController);

function GameController($scope) {
	$scope.playerMove = function (ev) {
		// alert("clicked");
		console.log(ev);
	}
	$scope.getSymbol = function (boxNumber) {
	return "Hello";
	}
	$scope.isTaken = function(boxNumber) {
    return box.value !== ' ';
  	}
}

// model board as game object

// car["color"]
// var a = "color"