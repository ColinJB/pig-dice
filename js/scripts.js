// Business Logic
function Player() {
  this.bank = 0;
  this.currentScore = 0;
  this.currentRoll = 0;
  this.isTurn = false;
}

Player.prototype.roll = function() {
    console.log("Bank: " + this.bank);
    console.log("Current Score: " + this.currentScore);
    console.log("Is Turn: " + this.isTurn);
    console.log("");

    this.currentRoll = Math.floor(Math.random() * 6) + 1;

    console.log("Roll: " + this.currentRoll);
    console.log("");
    if(this.currentRoll === 1) {
      this.currentScore = 0;
      this.addToTotal(this.currentScore);
      this.endTurn();
    } else {
      this.currentScore += this.currentRoll;
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
  console.log("Is Turn: " + this.isTurn);
  console.log("");
}

Player.prototype.endTurn = function() {
  this.isTurn = false;
  console.log("Is Turn: " + this.isTurn);
  console.log("");
}

// User Interface Logic
$(document).ready(function() {

var player1 = new Player();
var player2 = new Player();

player1.startTurn();

  $("#roll").click(function() {
    player1.roll();
  });

  $("#hide").click(function() {
    player1.hold();
  });

});
