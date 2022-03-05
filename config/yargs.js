const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "La base de la tabla de multiplicar",
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    default: false,
    describe: "La lista de la tabla de la multiplicar",
  })
  .option("m", {
    alias: "max",
    type: "number",
    default: 10,
    describe: "El maximo de la tabla de la multiplicar",
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "La base debe ser un numero";
    }
    return true;
  }).argv;

module.exports = argv;
