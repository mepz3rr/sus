basic.forever(function () {
    if (input.temperature() < 18 || input.temperature() > 25) {
        basic.showLeds(`
            . # # # .
            # . # . #
            # # # # #
            . # # # .
            . # # # .
            `)
        music.playMelody("C E C E C E C E ", 196)
        basic.clearScreen()
    } else {
        basic.showIcon(IconNames.Happy)
    }
})
