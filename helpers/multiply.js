const fs = require("fs");
const colors = require("colors");

const createFile = async (base = 5, listar = false, max = 15) => {
  try {
    let outPrint = "";
    for (let i = 1; i <= max; i++) {
      outPrint += `${base} x ${i} = ${base * i}\n`;
    }

    if (listar) {
      console.log("==========================".yellow);
      console.log("Tabla de multiplicar del : ".green, colors.blue(base));
      console.log("==========================".yellow);
      console.log(outPrint);
    }

    fs.writeFileSync(`outprints/tabla-${base}.txt`, outPrint);

    return `tabla-${base}.txt`;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createFile,
};
