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

const usuarioPromise = obterUsuario();

usuarioPromise
  .then(usuario => {
    return obterTelefone(usuario.id).then(telefone => {
      return {
        usuario: {
          nome: usuario.nome,
          id: usuario.id
        },
        telefone: telefone
      };
    });
  })
  .then(result => {
    return obterEndereco(result.usuario.id).then(endereco => {
      return {
        usuario: result.usuario,
        telefone: result.telefone,
        endereco: endereco
      };
    });
  })
  .then(result => {
    console.log(`
        Nome: ${result.usuario.nome}
        Telefone: ${result.telefone.telefone}
        Endereco: ${result.endereco.rua}, ${result.endereco.numero}
    `);
  })
  .catch(error => {
    console.error("Error while processing the user...", error);
  });
