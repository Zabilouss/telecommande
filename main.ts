makerbit.onIrButton(IrButton.Any, IrButtonAction.Released, function () {
    pins.analogWritePin(AnalogPin.P14, 0)
    pins.analogWritePin(AnalogPin.P16, 0)
    pins.analogWritePin(AnalogPin.P13, 0)
    pins.analogWritePin(AnalogPin.P15, 0)
})
makerbit.onIrButton(IrButton.Any, IrButtonAction.Pressed, function () {
    pins.analogWritePin(AnalogPin.P13, 0)
    pins.analogWritePin(AnalogPin.P15, 0)
    pins.analogWritePin(AnalogPin.P14, 1023)
    pins.analogWritePin(AnalogPin.P16, 1023)
})
led.enable(false)
for (let index = 0; index < 1000; index++) {
    basic.pause(200)
    makerbit.connectIrReceiver(DigitalPin.P7, IrProtocol.NEC)
}
