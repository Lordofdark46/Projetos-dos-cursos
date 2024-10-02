const mongoose = require("mongoose");

async function main() {
  try {
    mongoose.set("strictQuery", true);

    await mongoose.connect(
      "mongodb+srv://matheus:IIIbZZVDpN0ZKA6I@cluster0.hxzqd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );

    console.log("Conectado!");
  } catch (error) {
    console.log(`Erro: ${error}`);
  }
}

module.exports = main;
