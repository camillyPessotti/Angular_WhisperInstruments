database(`CREATE TABLE IF NOT EXISTS TESTE (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    NOME varchar(30),
    NUMERO int
    )`)
    .then(result => {
        console.log('TABELA CRIADA COM SUCESSO');
    })
    .catch(erro => {
        console.log('ERRO AO CRIAR A TABELA');
        console.log(erro)
    });

database(`CREATE TABLE IF NOT EXISTS USERS (
        ID INTEGER PRIMARY KEY AUTOINCREMENT,
        NOME varchar(30),
        NICKNAME varchar(30)
        )`)
    .then(result => {
        console.log('TABELA CRIADA COM SUCESSO');
    })
    .catch(erro => {
        console.log('ERRO AO CRIAR A TABELA');
    });