const database = require("./database");

async function verificaExistencia(item) {
  const atual = await database.listar();

  if (
    Object.keys(atual).length > 0 &&
    atual.filter(e =>
      e.nome === item.nome ? (e.poder === item.poder ? false : true) : true
    )
  ) {
    return true;
  }
  return false;
}

module.exports = {
  verificaExistencia
};
