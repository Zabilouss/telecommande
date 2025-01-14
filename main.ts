makerbit.onIrButton(IrButton.Number_3, IrButtonAction.Pressed, function () {
    pins.analogWritePin(AnalogPin.P13, 0)
    pins.analogWritePin(AnalogPin.P15, 0)
    pins.analogWritePin(AnalogPin.P14, 1023)
    pins.analogWritePin(AnalogPin.P16, 0)
})
makerbit.onIrButton(IrButton.Number_1, IrButtonAction.Pressed, function () {
    pins.analogWritePin(AnalogPin.P13, 0)
    pins.analogWritePin(AnalogPin.P15, 0)
    pins.analogWritePin(AnalogPin.P14, 1023)
    pins.analogWritePin(AnalogPin.P16, 0)
})
makerbit.onIrButton(IrButton.Number_5, IrButtonAction.Pressed, function () {
    pins.analogWritePin(AnalogPin.P13, 0)
    pins.analogWritePin(AnalogPin.P15, 0)
    pins.analogWritePin(AnalogPin.P13, 1023)
    pins.analogWritePin(AnalogPin.P15, 1023)
})
function Gauche () {
    pins.analogWritePin(AnalogPin.P13, 0)
    pins.analogWritePin(AnalogPin.P15, 0)
    pins.analogWritePin(AnalogPin.P14, 1023)
    pins.analogWritePin(AnalogPin.P16, 0)
}
makerbit.onIrButton(IrButton.Any, IrButtonAction.Released, function () {
    pins.analogWritePin(AnalogPin.P14, 0)
    pins.analogWritePin(AnalogPin.P16, 0)
    pins.analogWritePin(AnalogPin.P13, 0)
    pins.analogWritePin(AnalogPin.P15, 0)
})
function Reculer () {
    pins.analogWritePin(AnalogPin.P13, 0)
    pins.analogWritePin(AnalogPin.P15, 0)
    pins.analogWritePin(AnalogPin.P13, 1023)
    pins.analogWritePin(AnalogPin.P15, 1023)
}
makerbit.onIrButton(IrButton.Down, IrButtonAction.Pressed, function () {
    pins.analogWritePin(AnalogPin.P13, 0)
    pins.analogWritePin(AnalogPin.P15, 0)
    pins.analogWritePin(AnalogPin.P14, 1023)
    pins.analogWritePin(AnalogPin.P16, 1023)
})
function Avancer () {
    pins.analogWritePin(AnalogPin.P13, 0)
    pins.analogWritePin(AnalogPin.P15, 0)
    pins.analogWritePin(AnalogPin.P14, 1023)
    pins.analogWritePin(AnalogPin.P16, 1023)
}
function Droite () {
    pins.analogWritePin(AnalogPin.P13, 0)
    pins.analogWritePin(AnalogPin.P15, 0)
    pins.analogWritePin(AnalogPin.P14, 1023)
    pins.analogWritePin(AnalogPin.P16, 0)
}
led.enable(false)
basic.forever(function () {
    makerbit.connectIrReceiver(DigitalPin.P7, IrProtocol.NEC)
})
