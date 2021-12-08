# Speed Uno
This is a project made by Aaron Cai, Rupsa Paul, and Elaine Wang.

[The Microbit project](https://makecode.microbit.org/#) is variation of UNO and Speed.

## What is the goal of the game?
Players try to be the fastest in their group and be the first to reach 10 points to win the game.

## How do you play the game?
### Connecting the micro:bits to play
You start the game by connecting __player micro:bits__ to the center __display micro:bit__.
_(See Infection game)_
### Playing the game
- The __display micro:bit__ will display a number between 1-5
- Players use the A and B buttons on a __player micro:bit__ to cycle through their __cards__
- When they find the corresponding number, players hit A+B to play their __card__.
- The __display micro:bit__ will switch to another number that players will try to match
- A player can shake their __player micro:bit__ when they are 1 point from __winning__ to be __"safe"__.
- If a player is 1 point from __winning__ and has not shaken their micro:bit, another __player micro:bit__ can be shaken to __"catch"__ that player.
### Scoring
- __+ 1 point__ To the first player to play the number on the __display micro:bit__.
- __- 1 point__ To any player who plays the __wrong__ number. _(Down to a minimum of 0 points)_
- __- 2 points__ To any player who is __"caught"__. _(See "Playing the game")_




### Index
- __Display micro:bit__:
This is the central micro:bit that will show the card that needs to be played
- __Player micro:bit__:
This is the player's micro:bit that shows the players cards
- __Safe__:
A player who has shaken their micro:bit and can no longer be caught
- __Catch/Caught__:
When a player shakes their micro:bit while another player is 1 point from winning is is not safe
- __Cards__:
Numbers shown on a player's micro:bit that can be played
- __Win__:
When a player reaches the number of points needed to win _(default 10)_
