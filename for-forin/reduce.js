const { obterPessoas } = require("./service");

async function main() {
  try {
    const { results } = await obterPessoas(`a`);

    const pesos = results.map(item => parseInt(item.height));

    const total = pesos.reduce((a, p) => a + p);

    console.log(total);
  } catch (error) {
    console.error(error);
  }
}

main();
