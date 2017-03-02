# Pig Dice!!!

#### Pig Dice Game, Current Version: 03/02/2017

#### Author: John Carr and Colin Bloom

## Description
A web game of Pig Dice.

Each turn, a player repeatedly rolls a die until either a 1 is rolled or the player decides to "hold":

* If the player rolls a 1, they score nothing and it becomes the next player's turn.
* If the player rolls any other number, it is added to their turn total and the player's turn continues.
* If a player chooses to "hold", their turn total is added to their score, and it becomes the next player's turn.
* The first player to score 100 or more points wins.

## Setup/Installation Instructions

* Clone portfolio respository from:
  * <http://github.com/coderknot/pig-dice>
  * <http://github.com/colinjb/pig-dice>
* Navigate to pig-dice directory
* Open index.html in a browser
* Click Roll to start game
* Click Hold to save score

## Specifications

| Behavior | Example Input | Example Output |
|----------|---------------|----------------|
|The program should roll a die to return a value between 1 and 6 | Roll:0 | Roll: 2 |
|The program should keep the current score | Score: 0 Roll: 3 | Score: 3 |
|The program should allow player to re-roll and adjust current score | Score: 3 Roll: 4 | Score: 7 |
|The program should set the current score to 0 if the player rolls 1 | Score: 7 Roll: 1 | Score: 0 |
|The program should add the current score to the total score if the player holds | Score: 7 Player: holds | Total Score: 7 |
|The program should end turn on a roll of 1 or a hold and pass turn to other player | Turn: Player 1 | Turn: Player 2 |
|The program should indicate a win if a player scores 100 or more in a turn | Turn: Player 1 Score: 98 Roll: 3 | Win: Player 1 |

## Known Bugs
No known bugs.

## Support and contact details
Questions? Concerns? Suggestions?

Reach out to me via github:
<http://github.com/coderknot>
<http://github.com/colinjb>

## Technologies Used
* _HTML_
* _CSS_
* _Bootstrap_
* _JavaScript_
* _JQuery_

## License

MIT License

Copyright (c) 2017 John Carr and Colin Bloom

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
