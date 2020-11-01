let reading = 0
basic.forever(function () {
    reading = input.lightLevel()
    if (reading < 1) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . # # # .
            . . # . .
            `)
    } else {
        basic.clearScreen()
    }
    serial.writeLine(" ")
    serial.writeNumber(reading)
})
