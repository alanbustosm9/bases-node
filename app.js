const { createFile } = require("./helpers/multiply");
const argv = require("./config/yargs");
require("colors");
console.clear();

createFile(argv.b, argv.l, argv.m)
  .then((multiply) => console.log(multiply.america, "Correcto"))
  .catch((err) => console.log(err));
