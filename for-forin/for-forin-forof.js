const service = require("./service");

async function main() {
  try {
    const result = await service.obterPessoas("a");
    const names = [];

    // for (let i in result.results) {
    //   const pessoa = result.results[i];
    //   names.push(pessoa.name);
    // }

    for (pessoa of result.results) {
      names.push(pessoa.name);
    }

    console.log(`names`, names);
  } catch (error) {
    console.error("Erro:", error);
  }
}

main();
