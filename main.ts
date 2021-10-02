basic.forever(function () {
    if (input.buttonIsPressed(Button.A) && (input.buttonIsPressed(Button.B) && input.temperature() > 25)) {
        basic.showIcon(IconNames.Happy)
    }
})
