input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
    basic.clearScreen()
})
for (let index = 0; index < 4; index++) {
    basic.showIcon(IconNames.Heart)
    basic.pause(100)
    basic.showIcon(IconNames.SmallHeart)
    basic.pause(100)
}
basic.forever(function () {
	
})
