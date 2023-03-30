pins.setPull(DigitalPin.P14, PinPullMode.PullNone)
pins.setPull(DigitalPin.P8, PinPullMode.PullNone)


const centerP: DigitalPin = DigitalPin.P14

const leftP: DigitalPin = DigitalPin.P8

pins.digitalReadPin(DigitalPin.P14)

let center: number = 0

let left: number = 0

basic.forever(function () {

    center = pins.digitalReadPin(centerP)
    left = pins.digitalReadPin(leftP)

    console.log(center)
    console.log(left)
    

	basic.pause(10)
})
