database(`CREATE TABLE IF NOT EXISTS PESSOA (
        CPF CHAR(11) PRIMARY KEY,
        NOME VARCHAR(45) NOT NULL,
        IDADE INT)`)
    .then(result => {
        console.log('TABELA PESSOA CRIADA COM SUCESSO');
    }).catch(erro => {
        console.log('ERRO AO CRIAR A TABELA PESSOA');
    });

database(`CREATE TABLE IF NOT EXISTS CLIENTE (
    CODIGO INT AUTO_INCREMENT PRIMARY KEY,
    EMAIL VARCHAR(100),
    USERNAME VARCHAR(45) NOT NULL, 
    PASSWORD VARCHAR(15) NOT NULL,
    PESSOA_CPF CHAR(11) NOT NULL,
    FOREIGN KEY (PESSOA_CPF) REFERENCES PESSOA(CPF))`)
    .then(result => {
        console.log('TABELA CLIENTE CRIADA COM SUCESSO');
    }).catch(erro => {
        console.log('ERRO AO CRIAR A TABELA CLIENTE');
    });