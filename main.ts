input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
    basic.pause(1000)
    basic.clearScreen()
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Angry)
    basic.pause(1000)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    x += 1
    basic.showNumber(x)
    basic.clearScreen()
})
let x = 0
x = 0
for (let index = 0; index < 4; index++) {
    basic.showIcon(IconNames.Heart)
    basic.pause(100)
    basic.showIcon(IconNames.SmallHeart)
    basic.pause(100)
}
basic.forever(function () {
	
})
