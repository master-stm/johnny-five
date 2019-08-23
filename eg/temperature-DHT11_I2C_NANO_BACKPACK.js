const {Board, Thermometer} = require("../lib/johnny-five.js");
const board = new Board();

board.on("ready", () => {
  const thermometer = new Thermometer({
    controller: "DHT11_I2C_NANO_BACKPACK"
  });

  thermometer.on("change", () => {
    console.log(`Thermometer
  celsius           : ${thermometer.celsius}
  fahrenheit        : ${thermometer.fahrenheit}
  kelvin            : ${thermometer.kelvin}
--------------------------------------`);
  });
});

