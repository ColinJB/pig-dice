// Business Logic
function Player(name) {
  this.bank = 0;
  this.currentScore = 0;
  this.currentRoll = 0;
  this.isTurn = false;
  this.playerName = name;
}

var player1 = new Player("Player 1");
var player2 = new Player("Player 2");
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
      $(".greed").show();
    } else {
      this.currentScore += this.currentRoll;
      this.checkBank();
      $(".greed").hide();
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
  $("#bank1").text(player1.bank);
  $("#bank2").text(player2.bank);
  $("#roll1").text(player1.currentRoll);
  $("#score1").text(player1.currentScore);
  $("#roll2").text(player2.currentRoll);
  $("#score2").text(player2.currentScore);
  console.log("Is Turn: " + this.isTurn);
  console.log("");
}

Player.prototype.checkBank = function() {
  if (this.bank + this.currentScore >= 100) {
    $("#won").show();
    $("#winner").text(this.playerName);
    $("#toggle").effect("pulsate",4000);
  }
}

// User Interface Logic
$(document).ready(function() {
  $("#bank1").text(player1.bank);
  $("#bank2").text(player2.bank);
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
    $("#roll1").text(player1.currentRoll);
    $("#roll2").text(player2.currentRoll);
    $("#score1").text(player1.currentScore);
    $("#score2").text(player2.currentScore);
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
