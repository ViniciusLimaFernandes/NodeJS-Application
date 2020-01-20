const service = require("./service");

async function main() {
  try {
    const results = await service.obterPessoas("a");
    // const names = [];

    // results.results.forEach(e => {
    //   names.push(e.name);
    // });

    const names = results.results.map(e => {
      return e.name;
    });

    console.log("names", names);
  } catch (error) {
    console.error("Erro:", error);
  }
}

main();
