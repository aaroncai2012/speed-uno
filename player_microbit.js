input.onButtonPressed(Button.A, function () {
    // Buttons A & B cycle through the cards each player is holding
    if (gameEnd) return
    // cycle left
    if (currCard == 0) {
        currCard = hand.length - 1
    } else {
        currCard -= 1
    }
})
input.onButtonPressed(Button.B, function () {
    if (gameEnd) return
    // cycle right
    if (currCard == hand.length - 1) {
        currCard = 0
    } else {
        currCard += 1
    }
})
input.onButtonPressed(Button.AB, function () {
    if (gameEnd) return
    // send attempt to master microbit
    radio.sendValue(playerNumber.toString(), hand[currCard])
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "catch" && canBeCaught) {
        // player is caught
        points -= 2
        canBeCaught = false
    }
    else if (receivedString == "win") {
        // stop game
        music.playTone(Note.B, music.beat())
        gameEnd = true
    }
    else if (receivedString == "restart") {
        // restart game
        gameEnd = false
        canBeCaught = false
        points = 0
        currCard = 0
        music.playTone(Note.C, music.beat())
    }
    // for the purpose of setting playerNumber
    else if (receivedString == "playerNumber") {
        radio.sendValue("playerNumber", playerNumber)
    }
})
input.onGesture(Gesture.Shake, function () {
    if (gameEnd) return
    // try to catch another player or protect self from catch
    radio.sendString("catch")
    canBeCaught = false
})
radio.onReceivedValue(function (name, value) {
    if (name == "correct" && value == playerNumber) {
        points += 1
        if (points == winPoints - 1) {
            canBeCaught = true
            music.playTone(Note.E, music.beat())
        } else if (points >= winPoints) {
            // win game
            canBeCaught = false
            gameEnd = true
            radio.sendString("win")
            music.playTone(Note.F, music.beat())
        } else {
            music.playTone(Note.C, music.beat())
        }
    }
    if (name == "incorrect" && value == playerNumber) {
        music.playTone(Note.D, music.beat())
    }
    // for the purpose of setting playerNumber
    if (name == "playerNumber" && value > highestOtherPlayerNumber){
        highestOtherPlayerNumber = value
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    // show how many points this player has
    basic.clearScreen()
    for (let i = 0; i <= points - 1; i++) {
        led.plot(i % 5, i / 5)
    }
})
let canBeCaught = false
let currCard = 0
let hand: number[] = []
let winPoints = 10
let points = 0
let playerNumber = 0
let gameEnd = false
let highestOtherPlayerNumber = 0
radio.setGroup(5)
hand = [1, 2, 3, 4, 5, 6, 7]

// set player number
radio.sendString("playerNumber")
control.waitMicros(100)
playerNumber = highestOtherPlayerNumber + 1

basic.forever(function () {
  // ends the game with a smiley face shown on winner's screen
  // shows a sad face if player did not win
    if (gameEnd) {
        if (points >= winPoints) {
            basic.showIcon(IconNames.Happy)
        } else {
            basic.showIcon(IconNames.Sad)
        }
    } else {
        basic.showString("" + (hand[currCard]))
    }
})
