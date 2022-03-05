const fs = require("fs");

const createFile = async (base = 5, listar = false) => {
  try {
    let outPrint = "";
    for (let i = 1; i <= 10; i++) {
      outPrint += `${base} x ${i} = ${base * i}\n`;
    }

    if (listar) {
      console.log("==========================");
      console.log(`Tabla de multiplicar del : ${base}`);
      console.log("==========================");
      console.log(outPrint);
    }

    fs.writeFileSync(`tabla-${base}.txt`, outPrint);

    return `tabla-${base}.txt`;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createFile,
};
