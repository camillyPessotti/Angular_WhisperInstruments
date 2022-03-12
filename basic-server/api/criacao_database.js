database(`CREATE TABLE IF NOT EXISTS ENDERECO (
    CODIGO INT AUTO_INCREMENT PRIMARY KEY UNIQUE,
    RUA VARCHAR(45) NOT NULL, 
    BAIRRO VARCHAR(45) NOT NULL,
    CIDADE VARCHAR(45) NOT NULL,
    ESTADO VARCHAR(45) NOT NULL
)`)
    .then(result => {
        console.log('Tabela ENDERECO criada com SUCESSO');
    }).catch(erro => {
        console.log('ERRO ao criar a tabela ENDERECO');
    });


database(`CREATE TABLE IF NOT EXISTS PESSOA (
        CPF CHAR(11) PRIMARY KEY UNIQUE,
        NOME VARCHAR(45) NOT NULL,
        IDADE INT,
        ENDERECO_CODIGO INT NOT NULL, 
        FOREIGN KEY (ENDERECO_CODIGO) REFERENCES ENDERECO(CODIGO) ON DELETE CASCADE ON UPDATE CASCADE)`)
    .then(result => {
        console.log('Tabela PESSOA criada com SUCESSO');
    }).catch(erro => {
        console.log('ERRO ao criar a tabela PESSOA');
    });


database(`CREATE TABLE IF NOT EXISTS CLIENTE (
    CODIGO INT AUTO_INCREMENT PRIMARY KEY UNIQUE,
    EMAIL VARCHAR(100),
    USERNAME VARCHAR(45) NOT NULL, 
    PASSWORD VARCHAR(15) NOT NULL,
    PESSOA_CPF CHAR(11) NOT NULL,
    FOREIGN KEY (PESSOA_CPF) REFERENCES PESSOA(CPF) ON DELETE CASCADE ON UPDATE CASCADE)`)
    .then(result => {
        console.log('Tabela CLIENTE criada com SUCESSO');
    }).catch(erro => {
        console.log('ERRO ao criar a tabela CLIENTE');
    });


database(`CREATE TABLE IF NOT EXISTS CLASSE (
    CODIGO INT AUTO_INCREMENT PRIMARY KEY UNIQUE,
    CLASSE VARCHAR(45) NOT NULL
)`)
    .then(result => {
        console.log('Tabela CLASSE criada com SUCESSO');
    }).catch(erro => {
        console.log('ERRO ao criar a tabela CLASSE');
    });


database(`CREATE TABLE IF NOT EXISTS PRODUTO (
    CODIGO INT AUTO_INCREMENT PRIMARY KEY,
    INSTRUMENTO VARCHAR(45) NOT NULL,
    MARCA VARCHAR(45) NOT NULL,
    VALOR DOUBLE NOT NULL,
    COR VARCHAR(45) NOT NULL,
    CLASSE_CODIGO INT NOT NULL,
    FOREIGN KEY (CLASSE_CODIGO) REFERENCES CLASSE(CODIGO) ON DELETE CASCADE ON UPDATE CASCADE)`)
    .then(result => {
        console.log('Tabela PRODUTO criada com SUCESSO');
    }).catch(erro => {
        console.log('ERRO ao criar a tabela PRODUTO');
    });

// database(`INSERT INTO ENDERECO VALUES 
// (null, 'Olga Erdmann', 'Barra do Rio Cerro', 'Jaraguá do Sul', 'Santa Catarina'),
// (null, 'Afonso Beijamin Barbie', 'Tifa Martins', 'Jaraguá do Sul', 'Santa Catarina'),
// (null, 'Albano Piccoli', 'São Luís', 'Jaraguá do Sul', 'Santa Catarina'),
// (null, 'Rua das Orquídeas', 'Jaraguá 99', 'Jaraguá do Sul', 'Santa Catarina'),
// (null, 'José Narloch', 'Tifa Martins', 'Jaraguá do Sul', 'Santa Catarina')`)
//     .then(result => {
//         console.log('Dados inseridos com SUCESSO na tabela ENDERECO');
//     }).catch(erro => {
//         console.log('ERRO ao inserir dados na tabela ENDERECO');
//     });


// database(`INSERT INTO PESSOA VALUES 
// ('11111111111', 'Camilly Pessotti', 17, 1),
// ('22222222222', 'João Meireles', 17, 2),
// ('33333333333', 'Diego Planinscheck', 17, 3),
// ('44444444444', 'Bruna Mafra', 17, 4),
// ('55555555555', 'Leonardo Rafaelli', 17, 5)`)
//     .then(result => {
//         console.log('Dados inseridos com SUCESSO na tabela PESSOA');
//     }).catch(erro => {
//         console.log('ERRO ao inserir dados na tabela PESSOA');
//     });


// database(`INSERT INTO CLIENTE VALUES 
// (null, 'camillypessotti@gmail.com', 'camillyPessotti', '11111', '11111111111'),
// (null, 'joaomeireles@gmail.com', 'joaoMeireles', '22222', '22222222222'),
// (null, 'diegoplaninscheck@gmail.com', 'diegoPlaninscheck', '33333', '33333333333'),
// (null, 'brunamafra@gmail.com', 'brunaMafra', '44444', '44444444444'),
// (null, 'leonardorafaelli@gmail.com', 'leonardoRafaelli', '55555', '55555555555')`)
//     .then(result => {
//         console.log('Dados inseridos com SUCESSO na tabela CLIENTE');
//     }).catch(erro => {

//         console.log('ERRO ao inserir dados na tabela CLIENTE');
//     });


// database(`INSERT INTO CLASSE VALUES
// (null, 'Instrumento de corda'),
// (null, 'Instrumento de sopro'),
// (null, 'Instrumento de percussão'),
// (null, 'Instrumentos elétricos')`)
//     .then(result => {
//         console.log('Dados inseridos com SUCESSO na tabela CLASSE');
//     }).catch(erro => {
//         console.log('ERRO ao inserir dados na tabela CLASSE');
//     });


// database(`INSERT INTO PRODUTO VALUES
// (null, 'Violão', 'Giannini', 3500.00, 'Preto', 1),
// (null, 'Violão', 'Rozini', 700.00, 'Marrom', 1),
// (null, 'Guitarra', 'Tagima', 1500.00, 'Vermelho', 4),
// (null, 'Guitarra', 'Waldman', 5000.00, 'Branco', 4),
// (null, 'Piano', 'Yamaha', 20000.00, 'Preto', 1),
// (null, 'Piano', 'Casio', 100000.00, 'Branco', 1),
// (null, 'Bateria', 'Pearl', 4000.00, 'Verde', 3),
// (null, 'Bateria', 'Gretsch', 2000.00, 'Amarelo', 3),
// (null, 'Oboé', 'Lorée', 2900.00, 'Preto', 2),
// (null, 'Flauta', 'Eagle', 8000.00, 'Prata', 2)`)
//     .then(result => {
//         console.log('Dados inseridos com SUCESSO na tabela PRODUTO');
//     }).catch(erro => {
//         console.log('ERRO ao inserir dados na tabela PRODUTO');
//     });