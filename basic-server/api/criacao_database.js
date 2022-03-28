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
    URL VARCHAR(200) NOT NULL,
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
// (null, 'https://d1nl8byu0zovrm.cloudfront.net/Custom/Content/Products/16/15/1615_violao-giannini-gdc-1-eq-sbk-performance-folk-eletrico-preto-fosco-pr-6706-gdc-1-eq-sbk_z3_637747240024381492.jpg', 'Violão', 'Giannini', 3500.00, 'Preto', 1),
// (null, 'https://http2.mlstatic.com/D_NQ_NP_614674-MLB44546361386_012021-O.webp', 'Violão', 'Rozini', 700.00, 'Marrom', 1),
// (null, 'https://http2.mlstatic.com/D_NQ_NP_690609-MLA46362910952_062021-O.webp', 'Guitarra', 'Tagima', 1500.00, 'Vermelho', 4),
// (null, 'https://http2.mlstatic.com/D_NQ_NP_910420-MLB49342872981_032022-O.webphttps://http2.mlstatic.com/D_NQ_NP_910420-MLB49342872981_032022-O.webp', 'Guitarra', 'Waldman', 5000.00, 'Branco', 4),
// (null, 'https://http2.mlstatic.com/D_NQ_NP_726536-MLB48121256841_112021-O.webp', 'Piano', 'Yamaha', 20000.00, 'Preto', 1),
// (null, 'https://www.teclacenter.com.br/images/ab__webp/thumbnails/550/450/detailed/309/casio-px-870-privia-piano-digital-branco-414340_jpg.webp', 'Piano', 'Casio', 100000.00, 'Branco', 1),
// (null, 'https://http2.mlstatic.com/D_NQ_NP_751806-MLB31867949881_082019-O.webp', 'Bateria', 'Pearl', 4000.00, 'Verde', 3),
// (null, 'https://http2.mlstatic.com/D_NQ_NP_359605-MLB25064100732_092016-O.webp', 'Bateria', 'Gretsch', 2000.00, 'Amarelo', 3),
// (null, 'https://www.le-roseau-oboe.com/cms/wp-content/uploads/2017/11/hautbois-f-loree-royal-125.jpg', 'Oboé', 'Lorée', 2900.00, 'Preto', 2),
// (null, 'https://a-static.mlcdn.com.br/618x463/flauta-transversal-prateada-do-case-fl03s-eagle-o-f-e-r-t/lojacosntelacao/7799744868/394052378e487443659d5135243cf809.jpg', 'Flauta', 'Eagle', 8000.00, 'Prata', 2)`)
//     .then(result => {
//         console.log('Dados inseridos com SUCESSO na tabela PRODUTO');
//     }).catch(erro => {
//         console.log('ERRO ao inserir dados na tabela PRODUTO');
//     });