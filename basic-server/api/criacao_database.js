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
    DESCRICAO VARCHAR(1000),
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

database(`INSERT INTO ENDERECO VALUES 
(1, 'Olga Erdmann', 'Barra do Rio Cerro', 'Jaraguá do Sul', 'Santa Catarina'),
(2, 'Afonso Beijamin Barbie', 'Tifa Martins', 'Jaraguá do Sul', 'Santa Catarina'),
(3, 'Albano Piccoli', 'São Luís', 'Jaraguá do Sul', 'Santa Catarina'),
(4, 'Rua das Orquídeas', 'Jaraguá 99', 'Jaraguá do Sul', 'Santa Catarina'),
(5, 'José Narloch', 'Tifa Martins', 'Jaraguá do Sul', 'Santa Catarina')`)
    .then(result => {
        console.log('Dados inseridos com SUCESSO na tabela ENDERECO');
    }).catch(erro => {
        console.log('ERRO ao inserir dados na tabela ENDERECO');
    });


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
// (1, 'https://d3alv7ekdacjys.cloudfront.net/Custom/Content/Products/11/53/1153331_violao-folk-takamine-gd15ce-eletrico-cordas-de-aco-com-afinador-ms_s2_637667990542068446.jpg', 'Violão', 'Giannini', 3500.00, 'Preto', 1),
// (2, 'https://d3alv7ekdacjys.cloudfront.net/Custom/Content/Products/11/60/1160221_violao-folk-strinberg-sd300c-eletrico-cordas-de-aco-ms_s4_637719687222604404.jpg', 'Violão', 'Rozini', 700.00, 'Marrom', 1),
// (3, 'https://d3alv7ekdacjys.cloudfront.net/Custom/Content/Products/11/69/1169762_guitarra-les-paul-gibson-special-tribute-dc-ms_s2_637818276119365976.jpg', 'Guitarra', 'Tagima', 1500.00, 'Vermelho', 4),
// (4, 'https://d3alv7ekdacjys.cloudfront.net/Custom/Content/Products/11/71/1171013_guitarra-super-strato-ibanez-paul-gilbert-signature-micro-pgmm31-ms_s2_637834574976903659.jpg', 'Guitarra', 'Waldman', 5000.00, 'Branco', 4),
// (5, 'https://d3alv7ekdacjys.cloudfront.net/Custom/Content/Products/11/52/1152542_piano-digital-yamaha-arius-ydp-s54-88-teclas-sensitivas-graded-hammer-standard-com-banco-bc-108-preto-bivolt-ms_s3_637660090716949650.jpg', 'Piano', 'Yamaha', 20000.00, 'Preto', 1),
// (6, 'https://d3alv7ekdacjys.cloudfront.net/Custom/Content/Products/11/23/1123617_piano-digital-casio-ap-470we-88-teclas-sensitivas-com-pedal-triplo-banqueta-e-fonte-bivolt-branco-ms_s2_637479434885046831.jpg', 'Piano', 'Casio', 100000.00, 'Branco', 1),
// (7, 'https://d3alv7ekdacjys.cloudfront.net/Custom/Content/Products/10/89/1089985_bateria-infantil-premium-dx45j-bumbo-16-com-banco-e-prato-ms_s3_637390689735624496.jpg', 'Bateria', 'Premium', 4000.00, 'Preto', 3),
// (8, 'https://d3alv7ekdacjys.cloudfront.net/Custom/Content/Products/11/69/1169898_bateria-acustica-gretsch-catalina-maple-cm1e825-bumbo-22-com-ferragens-e-pedal-de-bumbo-ms_s9_637832108487717973.jpg', 'Bateria', 'Gretsch', 2000.00, 'Amarelo', 3),
// (9, 'https://www.le-roseau-oboe.com/cms/wp-content/uploads/2017/11/hautbois-f-loree-royal-125.jpg', 'Oboé', 'Lorée', 2900.00, 'Preto', 2),
// (10, 'https://a-static.mlcdn.com.br/618x463/flauta-transversal-prateada-do-case-fl03s-eagle-o-f-e-r-t/lojacosntelacao/7799744868/394052378e487443659d5135243cf809.jpg', 'Flauta', 'Eagle', 8000.00, 'Prata', 2)`)
//     .then(result => {
//         console.log('Dados inseridos com SUCESSO na tabela PRODUTO');
//     }).catch(erro => {
//         console.log('ERRO ao inserir dados na tabela PRODUTO');
//     });