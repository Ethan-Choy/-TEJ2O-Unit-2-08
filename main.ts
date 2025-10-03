/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Ethan Choy
 * Created on: Sep 2025
 * This program turns on and off RGM LEDs
*/

basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function() {
    // turn on red
       pins.digitalWritePin(DigitalPin.P13, 1)

    // turn on blue
        basic.pause(1000)
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.digitalWritePin(DigitalPin.P15, 1)

    // turn on green
        basic.pause(1000)
        pins.digitalWritePin(DigitalPin.P15, 0)
        pins.digitalWritePin(DigitalPin.P14, 1)

    // turn on purple
        basic.pause(1000)
        pins.digitalWritePin(DigitalPin.P14, 0)
        pins.digitalWritePin(DigitalPin.P13, 1)
        pins.digitalWritePin(DigitalPin.P15, 1)

    // turn on cyan
        basic.pause(1000)
        pins.digitalWritePin(DigitalPin.P15, 0)
        pins.digitalWritePin(DigitalPin.P13, 1)
        pins.digitalWritePin(DigitalPin.P14, 1)

    // turn on yellow
        basic.pause(1000)
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.digitalWritePin(DigitalPin.P15, 1)
        pins.digitalWritePin(DigitalPin.P14, 1)

    // turn on white
       basic.pause(1000)
       pins.digitalWritePin(DigitalPin.P14, 1)
       pins.digitalWritePin(DigitalPin.P13, 1)
       pins.digitalWritePin(DigitalPin.P15, 1)

    // turn off RGM LED
       basic.pause(1000)
       pins.digitalWritePin(DigitalPin.P14, 0)
       pins.digitalWritePin(DigitalPin.P13, 0)
       pins.digitalWritePin(DigitalPin.P15, 0)

})
