// Business Logic
function Player(name) {
  this.bank = 0;
  this.currentScore = 0;
  this.currentRoll = 0;
  this.isTurn = false;
  this.playerName = name;
}

var player1 = new Player("player1");
var player2 = new Player("player2");
var players = [player1, player2];

Player.prototype.roll = function() {
    console.log("Bank: " + this.bank);
    console.log("");
    this.startTurn();
    this.currentRoll = Math.floor(Math.random() * 6) + 1;

    console.log("Roll: " + this.currentRoll);
    console.log("");
    if(this.currentRoll === 1) {
      this.currentScore = 0;
      this.addToTotal(this.currentScore);
      this.endTurn();
    } else {
      this.currentScore += this.currentRoll;
      this.checkBank();
    }

    console.log("Current Score: " + this.currentScore);
    console.log("");
}

Player.prototype.addToTotal = function(roll) {
  this.bank += roll;
  console.log("Bank: " + this.bank);
}

Player.prototype.hold = function() {
  this.addToTotal(this.currentScore);
  this.currentScore = 0;

  console.log("Bank: " + this.bank)
  console.log("Current Score: " + this.currentScore);
  console.log("");
  this.endTurn();
}

Player.prototype.startTurn = function() {
  this.isTurn = true;
}

Player.prototype.endTurn = function() {
  this.currentScore = 0;
  if (player1.isTurn === true && player2.isTurn === false) {
    player1.isTurn = false;
    player2.isTurn = true;
  } else if (player2.isTurn === true && player1.isTurn === false) {
    player1.isTurn = true;
    player2.isTurn = false;
  }

  // if(player1.isTurn === true) {
  //   player1.isTurn = false;
  //   player2.isTurn = true;
  // } else if (player2.isTurn === true) {
  //   player2.isTurn = false;
  //   player1.isTurn = true;
  // }

  console.log("Is Turn: " + this.isTurn);
  console.log("");
}

Player.prototype.checkBank = function() {
  if (this.bank + this.currentScore >= 100) {
    alert("You won!!")
    //$("#gameWin").show();
  }
}


// User Interface Logic
$(document).ready(function() {


player1.startTurn();
// player2.endTurn();
// console.log(player1);
// console.log(player2);

  $("#roll").click(function() {
    if (player1.isTurn === true) {
      player1.roll();
    } else if (player2.isTurn === true) {
      player2.roll();
    }

    //player1.roll();
  });

  $("#hold").click(function() {
    if (player1.isTurn === true) {
      player1.hold();
    } else if (player2.isTurn == true) {
      player2.hold();
    }

    //player1.hold();
  });
  console.log(player1);
  console.log(player2);
});
