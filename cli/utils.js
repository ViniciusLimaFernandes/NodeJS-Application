const database = require("./database");

async function verificaExistenciaHeroi(item) {
  const atual = await database.listar();
  console.log("Atual: ", atual);
  console.log("A ser cadastrado: ", item);
  const objectSize = Object.keys(atual).length;

  if (objectSize < 1) return false;

  if (
    atual.filter(
      e =>
        e.nome.toLowerCase() === item.nome.toLowerCase() &&
        e.poder.toLowerCase() === item.poder.toLowerCase()
    ).length > 0
  ) {
    return true;
  }

  return false;
}

async function verificaExistenciaID(id) {
  const atual = await database.listar();
  const objectSize = Object.keys(atual).length;

  if (objectSize < 1) return false;

  if (atual.filter(e => e.id === id).length > 0) {
    return true;
  }
  return false;
}

module.exports = {
  verificaExistenciaHeroi,
  verificaExistenciaID
};
