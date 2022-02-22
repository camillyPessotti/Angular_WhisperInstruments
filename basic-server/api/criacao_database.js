database(`CREATE TABLE IF NOT EXISTS ENDERECO (
    CODIGO INT AUTO_INCREMENT PRIMARY KEY,
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
        CPF CHAR(11) PRIMARY KEY,
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
    CODIGO INT AUTO_INCREMENT PRIMARY KEY,
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
    CODIGO INT AUTO_INCREMENT PRIMARY KEY,
    CLASSE VARCHAR(45) NOT NULL
)`)
    .then(result => {
        console.log('Tabela CLASSE criada com SUCESSO');
    }).catch(erro => {
        console.log('ERRO ao criar a tabela CLASSE');
    });


database(`CREATE TABLE IF NOT EXISTS PRODUTO (
    CODIGO INT AUTO_INCREMENT PRIMARY KEY,
    MARCA VARCHAR(45) NOT NULL,
    VALOR VARCHAR(45) NOT NULL,
    COR VARCHAR(45) NOT NULL,
    CLASSE_CODIGO INT NOT NULL,
    CLIENTE_CODIGO INT NOT NULL,
    FOREIGN KEY (CLASSE_CODIGO) REFERENCES CLASSE(CODIGO) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (CLIENTE_CODIGO) REFERENCES CLIENTE(CODIGO) ON DELETE CASCADE ON UPDATE CASCADE)`)
    .then(result => {
        console.log('Tabela PRODUTO criada com SUCESSO');
    }).catch(erro => {
        console.log('ERRO ao criar a tabela PRODUTO');
    });

database(`INSERT INTO ENDERECO VALUES 
(null, 'Olga Erdmann', 'Barra do Rio Cerro', 'Jaraguá do Sul', 'Santa Catarina'),
(null, 'Afonso Beijamin Barbie', 'Tifa Martins', 'Jaraguá do Sul', 'Santa Catarina'),
(null, 'Albano Piccoli', 'São Luís', 'Jaraguá do Sul', 'Santa Catarina'),
(null, 'Rua das Orquídeas', 'Jaraguá 99', 'Jaraguá do Sul', 'Santa Catarina'),
(null, 'José Narloch', 'Tifa Martins', 'Jaraguá do Sul', 'Santa Catarina')`)
    .then(result => {
        console.log('Dados inseridos com SUCESSO na tabela ENDERECO');
    }).catch(erro => {
        console.log('ERRO ao inserir dados na tabela ENDERECO');
    });


database(`INSERT INTO PESSOA VALUES 
('11111111111', 'Camilly Pessotti', 17, 1),
('22222222222', 'João Meireles', 17, 2),
('33333333333', 'Diego Planinscheck', 17, 3),
('44444444444', 'Bruna Mafra', 17, 4),
('55555555555', 'Leonardo Rafaelli', 17, 5)`)
    .then(result => {
        console.log('Dados inseridos com SUCESSO na tabela PESSOA');
    }).catch(erro => {
        console.log('ERRO ao inserir dados na tabela PESSOA');
    });


database(`INSERT INTO CLIENTE VALUES 
(null, 'camillypessotti@gmail.com', 'camillyPessotti', '12345', '11111111111'),
(null, 'joaomeireles@gmail.com', 'joaoMeireles', '12222', '22222222222'),
(null, 'diegoplaninscheck@gmail.com', 'diegoPlaninscheck', '13333', '33333333333'),
(null, 'brunamafra@gmail.com', 'brunaMafra', '14444', '44444444444'),
(null, 'leonardorafaelli@gmail.com', 'leonardoRafaelli', '15555', '55555555555')`)
    .then(result => {
        console.log('Dados inseridos com SUCESSO na tabela CLIENTE');
    }).catch(erro => {
        console.log('ERRO ao inserir dados na tabela CLIENTE');
    });


database(`INSERT INTO CLASSE VALUES
(null, 'Instrumento de corda'),
(null, 'Instrumento de sopro'),
(null, 'Instrumento de percussão'),
(null, 'Instrumentos elétricos')`)
    .then(result => {
        console.log('Dados inseridos com SUCESSO na tabela CLASSE');
    }).catch(erro => {
        console.log('ERRO ao inserir dados na tabela CLASSE');
    });