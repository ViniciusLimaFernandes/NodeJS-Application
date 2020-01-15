function obterUsuario(callback) {
  setTimeout(() => {
    return callback(null, {
      id: 1,
      nome: "Aladin",
      dataNascimento: new Date()
    });
  }, 1000);
}

function obterTelefone(idUsuario, callback) {
  setTimeout(() => {
    return callback(null, {
      telefone: "11946842684",
      ddd: 11
    });
  }, 2000);
}

function obterEndereco(idUsuario, callback) {
  setTimeout(() => {
    return callback(null, {
      rua: "Avenida pinheiros",
      numero: 1358
    });
  }, 2000);
}

function resolverUsuario(erro, usuario) {
  console.log("usuario", usuario);
}

obterUsuario(function resolverUsuario(error, usuario) {
  if (error) {
    console.error("User error", error);
    return;
  }
  obterTelefone(usuario.id, function resolverTelefone(error1, telefone) {
    if (error1) {
      console.error("Tel error", error1);
      return;
    }
    obterEndereco(usuario.id, function resolverEndereco(error2, endereco) {
      if (error2) {
        console.error("End error", error2);
        return;
      }

      console.log(`
        Nome: ${usuario.nome},
        Endereco: ${endereco.rua}, ${endereco.numero}
        Telefone: ${telefone.telefone}
      `);
    });
  });
});
