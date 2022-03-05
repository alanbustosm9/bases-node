const { createFile } = require("./helpers/multiply");

console.clear();

const base = 2;

createFile(base)
  .then((multiply) => console.log(multiply, "Correcto"))
  .catch((err) => console.log(err));
