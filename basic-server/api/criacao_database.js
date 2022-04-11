database(`CREATE TABLE IF NOT EXISTS ENDERECO (
    CODIGO INT PRIMARY KEY UNIQUE,
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
    CODIGO INT PRIMARY KEY UNIQUE,
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
    CODIGO INT PRIMARY KEY UNIQUE,
    CLASSE VARCHAR(45) NOT NULL
)`)
    .then(result => {
        console.log('Tabela CLASSE criada com SUCESSO');
    }).catch(erro => {
        console.log('ERRO ao criar a tabela CLASSE');
    });


database(`CREATE TABLE IF NOT EXISTS PRODUTO (
    CODIGO INT PRIMARY KEY,
    URL VARCHAR(200),
    INSTRUMENTO VARCHAR(45) NOT NULL,
    MARCA VARCHAR(45) NOT NULL,
    VALOR DOUBLE NOT NULL,
    COR VARCHAR(45),
    CLASSE_CODIGO INT NOT NULL,
    FOREIGN KEY (CLASSE_CODIGO) REFERENCES CLASSE(CODIGO) ON DELETE CASCADE ON UPDATE CASCADE)`)
    .then(result => {
        console.log('Tabela PRODUTO criada com SUCESSO');
    }).catch(erro => {
        console.log('ERRO ao criar a tabela PRODUTO');
    });

// database(`INSERT INTO ENDERECO VALUES 
// (1, 'Olga Erdmann', 'Barra do Rio Cerro', 'Jaraguá do Sul', 'Santa Catarina'),
// (2, 'Afonso Beijamin Barbie', 'Tifa Martins', 'Jaraguá do Sul', 'Santa Catarina'),
// (3, 'Albano Piccoli', 'São Luís', 'Jaraguá do Sul', 'Santa Catarina'),
// (4, 'Rua das Orquídeas', 'Jaraguá 99', 'Jaraguá do Sul', 'Santa Catarina'),
// (5, 'José Narloch', 'Tifa Martins', 'Jaraguá do Sul', 'Santa Catarina')`)
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
// (1, 'camillypessotti@gmail.com', 'camillyPessotti', '11111', '11111111111'),
// (2, 'joaomeireles@gmail.com', 'joaoMeireles', '22222', '22222222222'),
// (3, 'diegoplaninscheck@gmail.com', 'diegoPlaninscheck', '33333', '33333333333'),
// (4, 'brunamafra@gmail.com', 'brunaMafra', '44444', '44444444444'),
// (5, 'leonardorafaelli@gmail.com', 'leonardoRafaelli', '55555', '55555555555')`)
//     .then(result => {
//         console.log('Dados inseridos com SUCESSO na tabela CLIENTE');
//     }).catch(erro => {
//         console.log('ERRO ao inserir dados na tabela CLIENTE');
//     });


// database(`INSERT INTO CLASSE VALUES
// (1, 'Instrumento de corda'),
// (2, 'Instrumento de sopro'),
// (3, 'Instrumento de percussão'),
// (4, 'Instrumentos elétricos')`)
//     .then(result => {
//         console.log('Dados inseridos com SUCESSO na tabela CLASSE');
//     }).catch(erro => {
//         console.log('ERRO ao inserir dados na tabela CLASSE');
//     });


// database(`INSERT INTO PRODUTO VALUES
// (1, 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/114/233/products/405612-0-39248da461f4ebe93915855849874064-1024-1024.jpg', 'Violão', 'Takamine', 3058.92, 'Mahogany', 1),
// (2, 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/114/233/products/untitled-1121-fff41a307076873ebb15917111458748-1024-1024.jpg', 'Violão', 'Strinberg', 1175.45, 'Tobacco Satin', 1),
// (13, 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/114/233/products/418142-0-b47fbf023df1e100ce15855872988803-1024-1024.jpg', 'Cajon', 'Elo', 428.18, 'Preto', 3),
// (11, 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/114/233/products/131-0d6c52d91522c0218816370975897420-1024-1024.jpg', 'Bateria', 'Michael', 3976.62, 'Sparkle Marine', 3),
// (3, 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/114/233/products/pro_28414_e1-31db15d4d38861a12515919709576520-1024-1024.jpg', 'Guitarra', 'Strinberg', 1258.48, 'Vinho', 4),
// (5, 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/114/233/products/418811-0-8480a6348399064f4715855873312836-1024-1024.jpg', 'Contrabaixo', 'Phoenix', 2010.12, 'Natural', 1),
// (6, 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/114/233/products/b5081ba43be8fd5f56d173c17a67aab51-1bdb5e13a8ab6b450816347337664735-1024-1024.jpg', 'Contrabaixo', 'Yamaha', 1686.84, 'Preto', 1),
// (12, 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/114/233/products/untitled-1101-0c452c17f313db22a116421021296165-1024-1024.jpg', 'Bateria', 'Nagano Onix', 2943.91, 'Deep Silver', 3),
// (4, 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/114/233/products/untitled-141-8594047e76ae683f1816237647631814-1024-1024.jpg', 'Guitarra', 'Tagima', 1782.66, 'Surf Green', 4),
// (7, 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/114/233/products/420736-0-aa3746422ea470bbc715855874235829-1024-1024.jpg', 'Ukulele', 'Phoenix', 297.08, 'Frozen', 1),
// (19, 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/114/233/products/untitled-161-3e7416873ea33f944016382132520813-1024-1024.jpg', 'Trompete', 'Benson', 1164.52, 'Ouro', 2),
// (14, 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/114/233/products/417830-0-86df38a95dc51acfbd15855872715663-1024-1024.jpg', 'Cajon', 'Olé', 262.12, 'Dark Blue', 3),
// (8, 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/114/233/products/sem-titulo-131-aab8bc8b7ec4eabc3e16490904296261-1024-1024.jpg', 'Ukulele', 'Stagg', 253.38, 'Ocean', 1),
// (9, 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/114/233/products/untitled-1511-f2731a4adfcddcc1ed16196308853423-1024-1024.jpg', 'Piano', 'Casio', 8958.42, 'Branco', 1),
// (18, 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/114/233/products/396778-0-b060d407c4f7bf5b7c15855843437368-1024-1024.jpg', 'Gaita', 'Hering', 197.44, 'Blac Blues', 2),
// (10, 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/114/233/products/untitled-1231-bb217a40aa5b0ec11416040612332370-640-0.jpg', 'Teclado', 'Yamaha', 2080.04, 'Preto', 4),
// (15, 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/114/233/products/383270-0-2c10df45f4304b211e15855842637993-1024-1024.jpg', 'Saxofone', 'Eagle', 6808.38, 'Ouro/Preto', 2),
// (16, 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/114/233/products/377766-0-b8f9eb53597ae12ee315855842578131-1024-1024.jpg', 'Saxofone', 'Eagle', 5567.30, 'Ouro Fosco', 2),
// (17, 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/114/233/products/409182-0-ee31db87cf124dc1e515855850149725-1024-1024.jpg', 'Clarinete', 'Hoyden', 1021.18, 'Preto', 2),
// (20,'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/114/233/products/396953-0-43804ec12abcbac4e115855843502233-1024-1024.jpg', 'Tuba', 'Hoyden', 11361.92, 'Ouro', 2)`)
//     .then(result => {
//         console.log('Dados inseridos com SUCESSO na tabela PRODUTO');
//     }).catch(erro => {
//         console.log('ERRO ao inserir dados na tabela PRODUTO');
//     });