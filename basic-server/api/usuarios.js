inserirRota('/buscar_usuario', function(dados, resposta) {
    console.log(dados);

    resposta({ ok: "Requisição efetuada com sucesso!" });
});

inserirRota('/criar_usuario', function(dados, resposta) {
    console.log(dados);

    if (!dados.nome) {
        return resposta({ erro: 'É necessário preencher o nome' })
    };

    if (!dados.nickname) {
        return resposta({ erro: 'É necessário preencher o nickname' })
    };

    database(`INSERT INTO USERS
    (
        NOME, NICKNAME
        ) 
        VALUES 
        (
            "${dados.nome}", 
            "${dados.nickname}"
            )`)
        .then(result => {
            console.log('Usuario inserido com sucesso!');
            resposta({ menssage: 'Usuario inserido com sucesso' });
        })
        .catch(erro => {
            console.log('Erro ao inserir o usuario!');
            resposta({ erro: 'Erro ao inserir o usuario!' });
        });
});