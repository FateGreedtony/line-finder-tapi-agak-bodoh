input.onButtonPressed(Button.A, function () {
    zoombit.move(MotorDirection.Forward, 85)
    basic.pause(2000)
    zoombit.brake()
})
basic.showLeds(`
    . . # . .
    . # . # .
    # . # . #
    . # . # .
    . . # . .
    `)
basic.forever(function () {
    if (zoombit.isLineDetectedOn(LinePosition.All)) {
        zoombit.move(MotorDirection.Forward, 128)
    } else {
        zoombit.brake()
    }
})
