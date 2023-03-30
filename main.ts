pins.setPull(DigitalPin.P14, PinPullMode.PullNone)
pins.setPull(DigitalPin.P8, PinPullMode.PullNone)


const centerP: DigitalPin = DigitalPin.P14

const leftP: DigitalPin = DigitalPin.P8

pins.digitalReadPin(DigitalPin.P14)

let center: number = 0

let left: number = 0


let block1 = false

basic.forever(function () {

    center = pins.digitalReadPin(centerP)
    left = pins.digitalReadPin(leftP)
    
    input.onButtonPressed(Button.A, function() {
        basic.showString("Start")
        let cas = randint(1, 10000)
        basic.pause(cas)
        music.playTone(Note.C, music.beat(BeatFraction.Whole))
        block1 = true
        console.log(cas)
    })
    

	
    basic.pause(10)
})
