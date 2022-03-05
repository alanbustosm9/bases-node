const { createFile } = require("./helpers/multiply");
const argv = require("./config/yargs");

console.clear();

createFile(argv.b, argv.l)
  .then((multiply) => console.log(multiply, "Correcto"))
  .catch((err) => console.log(err));
