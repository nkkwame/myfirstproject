input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 5; index++) {
        music.play(music.stringPlayable("A C5 G D B F A E ", 120), music.PlaybackMode.UntilDone)
    }
})
basic.forever(function () {
	
})
