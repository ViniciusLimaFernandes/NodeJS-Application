const { deepEqual, ok } = require("assert");
const database = require("./database.js");

const DEFAULT_ITEM_CADASTRAR = {
  nome: "Flash",
  poder: "Speed",
  id: 1
};

const DEAFULT_ITEM_ATUALIZAR = {
  nome: "Lanterna verde",
  poder: "Energia do anel",
  id: 2
};

describe("Suite de manipulacao de herois", () => {
  before(async () => {
    await database.cadastrar(DEFAULT_ITEM_CADASTRAR);
    await database.cadastrar(DEAFULT_ITEM_ATUALIZAR);
  });

  it("deve pesquisar um heroi usando arquivos", async () => {
    const expected = DEFAULT_ITEM_CADASTRAR;
    const [resultado] = await database.listar(expected.id);

    deepEqual(resultado, expected);
  });

  it("deve cadastrar um heroi, usando arquivos", async () => {
    const expected = DEFAULT_ITEM_CADASTRAR;
    const resultado = await database.cadastrar(expected);
    const [actual] = await database.listar(expected.id);

    deepEqual(actual, expected);
  });

  it("deve remover um heroi usando arquivos", async () => {
    const expected = true;
    const resultado = await database.remover(DEFAULT_ITEM_CADASTRAR.id);

    deepEqual(resultado, expected);
  });

  it("deve atualizar um heroi pelo id", async () => {
    const expected = {
      ...DEAFULT_ITEM_ATUALIZAR,
      nome: "Batman",
      poder: "Dinheiro"
    };

    const novoDado = {
      nome: "Batman",
      poder: "Dinheiro",
      id: 2
    };

    await database.atualizar(DEAFULT_ITEM_ATUALIZAR.id, expected);

    const [resultado] = await database.listar(DEAFULT_ITEM_ATUALIZAR.id);

    deepEqual(resultado, novoDado);
  });

  after(async () => {
    await database.remover(DEFAULT_ITEM_CADASTRAR.id);
    await database.remover(DEAFULT_ITEM_ATUALIZAR.id);
  });
});
