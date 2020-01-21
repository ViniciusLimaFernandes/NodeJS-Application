const commander = require("commander");
const database = require("./database");
const Heroi = require("./heroi");
const utils = require("./utils");

async function main() {
  commander
    .version("v1")
    .option("-n, --nome [value]", "Nome do heroi")
    .option("-p, --poder [value]", "Poder do heroi")
    .option("-c, --cadastrar", "Cadastrar um heroi")
    .option("-l, --listar", "Lista os herois")
    .parse(process.argv);

  const heroi = new Heroi(commander);

  try {
    if (commander.cadastrar) {
      const atual = await database.listar();

      if (await utils.verificaExistencia(heroi)) {
        console.error("Heroi ja cadastrado!");
        return;
      }

      const resultado = await database.cadastrar(heroi);

      if (!resultado) {
        console.error("Heroi nao cadastrado");
        return;
      }
      console.log("Heroi cadastrado com sucesso!");
    }

    if (commander.listar) {
      const resultado = await database.listar();
      console.log(resultado);
    }
  } catch (error) {
    console.error("Erro:", error);
  }
}
main();
