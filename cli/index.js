const commander = require("commander");
const database = require("./database");
const Heroi = require("./heroi");
const utils = require("./utils");

async function main() {
  commander
    .version("v1")
    .option("-n, --nome [value]", "Nome do heroi")
    .option("-p, --poder [value]", "Poder do heroi")
    .option("-i, --id [value]", "Id do heroi")
    .option("-c, --cadastrar", "Cadastrar um heroi")
    .option("-l, --listar", "Lista os herois")
    .option("-r, --remover [value]", "Remove um heroi pelo id")
    .parse(process.argv);

  const heroi = new Heroi(commander);

  try {
    if (commander.cadastrar) {
      const atual = await database.listar();

      if (await utils.verificaExistenciaHeroi(heroi)) {
        console.error("Heroi ja cadastrado!");
        return;
      }

      if (await utils.verificaExistenciaID(heroi.id)) {
        console.log("ID JA CADASTRADO!");
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

    if (commander.remover) {
      const resultado = await database.remover(heroi.id);
    }
  } catch (error) {
    console.error("Erro:", error);
  }
}
main();
