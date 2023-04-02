pins.setPull(DigitalPin.P14, PinPullMode.PullNone)
pins.setPull(DigitalPin.P8, PinPullMode.PullNone)
const player1P: DigitalPin = DigitalPin.P14
const player2P: DigitalPin = DigitalPin.P8
pins.digitalReadPin(DigitalPin.P14)


let end1 = false
let end2 = false
let elapsed1 = 0
let elapsed2 = 0
let start1 = 0
let start2 = 0
let time = false
let player1: number = 0
let player2: number = 0
let falsestart = false


input.onButtonPressed(Button.B, function () {
    time = false
    start1 = 0
    start2 = 0
    elapsed1 = 0
    elapsed2 = 0
    end1 = false
    end2 = false
})

basic.forever(function () {

    player1 = pins.digitalReadPin(player1P)
    player2 = pins.digitalReadPin(player2P)
    console.log(player1)
    console.log(player2)

    
    input.onButtonPressed(Button.A, function() {
        falsestart = true
        time = true
        basic.showString("Start")
        let cas = randint(1, 10000)
        basic.pause(cas)
        music.playTone(Note.C, music.beat(BeatFraction.Whole))
        start1 = input.runningTimeMicros()
        start2 = input.runningTimeMicros()
        
    })

    if (player1 == 0) {
        if (time == true) {
            elapsed1 = input.runningTimeMicros() - start1
            end1 = true
        }
    }
    if (player2 == 0) {
        if (time == true) {
            elapsed2 = input.runningTimeMicros() - start2
            end2 = true
        }
    }
    if (end1 && end2 && time) {
        if (elapsed1 < elapsed2) {
            basic.showString("P1 win")
            basic.clearScreen()
            end1 = false
            end2 = false
            time = false
        }
        if (elapsed1 > elapsed2) {
            basic.showString("P2 win")
            basic.clearScreen()
            end1 = false
            end2 = false
            time = false
        }
        if (elapsed1 == elapsed2) {
            basic.showString("draw")
            basic.clearScreen()
            end1 = false
            end2 = false
            time = false
        }
    }

    if (falsestart && time) {
        if (player1 == 0 || player2 == 0 ) {
            basic.showString("Game over")
            time = false
            start1 = 0
            start2 = 0
            elapsed1 = 0
            elapsed2 = 0
            end1 = false
            end2 = false
        }

    }
    basic.pause(10)
})
