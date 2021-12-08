radio.setGroup(5)
let num = Math.floor((Math.random() * 7) + 1)

basic.forever(function () {
    basic.showString("" + num)
})

radio.onReceivedValue(function (name: string, value: number) {
  // checks that the displayed number is the same as number entered by player
    if (value == num) {
        radio.sendValue("correct", parseInt(name))
        // random new number
        num = Math.floor((Math.random() * 7) + 1)
    }
    else {
        radio.sendValue("incorrect", parseInt(name))
    }
})

input.onButtonPressed(Button.AB, function() {
  // restarts game after a player has won
    radio.sendString("restart")
    num = Math.floor((Math.random() * 7) + 1)
})
