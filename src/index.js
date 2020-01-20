function obterUsuario() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve({
        id: 1,
        nome: "Aladin",
        dataNascimento: new Date()
      });
    }, 1000);
  });
}

function obterTelefone(idUsuario) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve({
        telefone: "11946842684",
        ddd: 11
      });
    }, 2000);
  });
}

function obterEndereco(idUsuario) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve({
        rua: "Avenida pinheiros",
        numero: 1358
      });
    }, 2000);
  });
}

main();
async function main() {
  try {
    console.time("medida-promise");
    const usuario = await obterUsuario();

    const resultado = await Promise.all([
      obterTelefone(usuario.id),
      obterEndereco(usuario.id)
    ]);

    const telefone = resultado[0];
    const endereco = resultado[1];

    console.log(`
        Nome: ${usuario.nome},
        Telefone: ${telefone.telefone},
        Endereco: ${endereco.rua}, ${endereco.numero}
        `);

    console.timeEnd("medida-promise");
  } catch (error) {
    console.log("Erro: ", error);
  }
}
