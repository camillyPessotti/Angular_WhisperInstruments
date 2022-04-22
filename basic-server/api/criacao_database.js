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
    FOREIGN KEY(PESSOA_CPF) REFERENCES PESSOA(CPF) ON DELETE CASCADE ON UPDATE CASCADE)`)
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
    NOME VARCHAR(45) NOT NULL,
    VALOR DOUBLE NOT NULL,
    COR VARCHAR(45),
    DESCRICAO VARCHAR(1000),
    CLASSE_CODIGO INT NOT NULL,
    FOREIGN KEY(CLASSE_CODIGO) REFERENCES CLASSE(CODIGO) ON DELETE CASCADE ON UPDATE CASCADE)`)
    .then(result => {
        console.log('Tabela PRODUTO criada com SUCESSO');
    }).catch(erro => {
        console.log('ERRO ao criar a tabela PRODUTO');
    });


database(`CREATE TABLE IF NOT EXISTS CARRINHO (
        CODIGO INTEGER PRIMARY KEY,
        CLIENTE_CODIGO INT,
        PRODUTO_CODIGO INT,
        FOREIGN KEY(CLIENTE_CODIGO) REFERENCES CLIENTE(CODIGO),
        FOREIGN KEY(PRODUTO_CODIGO) REFERENCES PRODUTO(CODIGO)
        )`)
    .then(result => {
        console.log('Tabela CARRINHO criada com SUCESSO');
    }).catch(erro => {
        console.log('ERRO ao criar a tabela CARRINHO');
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
// (1, 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/114/233/products/405612-0-39248da461f4ebe93915855849874064-1024-1024.jpg', 'Violão', 'Takamine', 'GD11MCE Folk', 3058.92, 'Mahogany', 'Com um dos formatos mais clássicos e materiais de qualidade, o Violão Folk Elétrico Takamine GD11MC Mahogany é adequado tanto para profissionais quanto para quem está aprendendo, e já quer um violão de qualidade incontestável. O Violão Folk Elétrico Takamine GD11MC é elétrico, tem 6 cordas de aço, corpo feito de Mahogany, escala de Rosewood e tarraxas cromadas. O som é potente e o timbre marcante. O violão já conta com afinador embutido, para você estar sempre no tom certo e arriscar afinações diferentes entre as músicas.', 1),
// (2, 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/114/233/products/untitled-1121-fff41a307076873ebb15917111458748-1024-1024.jpg', 'Violão', 'Strinberg', 'SD200C Folk', 1175.45, 'Tobacco Satin', 'O modelo SD200C é um ótimo exemplo do que essa nova série tem a oferecer: através de sua captação SE-50 e suas madeiras de qualidade, o violão tem um som limpo e agradável até para os ouvidos mais apurados. O modelo SD200C conta com seu corpo em Sapele e tampo em Spruce, oferecendo ao violonista um tom brilhante e com agudos limpos, sem prejudicar os graves naturais provenientes do tampo laminado e das suas cordas de calibre.011. Além disso, o modelo SD200C e toda a linha Black Series têm um apelo estético capaz de agradar a todos os gostos!', 1),
// (3, 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/114/233/products/418142-0-b47fbf023df1e100ce15855872988803-1024-1024.jpg', 'Cajon', 'Elo', 'EL500', 428.18, 'Preto', 'O Cajon Elo El500 colors - acústico é fabricado pela marca Cajon Percussion, que visa desenvolver produtos de qualidade dentro da linha de percussão. A Linha ELO foi desenvolvida para ser a conexão perfeita entre você e seu primeiro cajon! Com uma construção simplificada e sonoridade surpreendente o Cajon Elo El500 colors - acústico leva até você a alegria de tocar um instrumento bom, gastando muito pouco.', 3),
// (4, 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/114/233/products/131-0d6c52d91522c0218816370975897420-1024-1024.jpg', 'Bateria', 'Michael', 'Legacy DML422', 3976.62, 'Sparkle Marine', 'A Legacy DML422 oferece hardware de excelente qualidade e durabilidade! Possui pedal de bumbo, máquina de chimbal, estante de caixa, estante reta e estante girafa, itens robustos que proporcionam uma performance musical ainda mais intensa! O Tom Holder traz esfera injetada para ajustes versáteis dos tons possibilitando mais conforto e ergonomia e o pedal de bumbo com batedor de 4 lados e polia/corrente duplas que permitem uma dinâmica diferenciada com os pés. Vem também com ferragens extrarresistentes para maior estabilidade, incluindo uma estante reta bastante robusta.', 3),
// (5, 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/114/233/products/pro_28414_e1-31db15d4d38861a12515919709576520-1024-1024.jpg', 'Guitarra', 'Strinberg', 'LPS200 Les Paul', 1258.48, 'Vinho', 'A linha LPS200 da Strinberg foi pensada para os guitarristas que procuram por um bom instrumento no estilo Les Paul para estudo ou apresentações. O modelo possui 2 captadores do modelo Humbucker que dão um som mais definido para usar distorções mais pesadas, e quando usados no som limpo, ou com pouca distorção, tem um timbre encorpado e limpo. A guitarra Strinberg LPS200 é construída com corpo em Basswood, braço em Maple e escala em Rosewood, o braço é confortável, e de boa tocabilidade.', 4),
// (6, 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/114/233/products/418811-0-8480a6348399064f4715855873312836-1024-1024.jpg', 'Contrabaixo', 'Phoenix', 'Top V BS5G', 2010.12, 'Natural', 'O contrabaixo BS-5 TOP V é um instrumento que se destaca  pelo lindo corpo em madeira natural e um timbre versátil. Além de sua sonoridade equilibrada este contrabaixo possui  um sistema de equalização ativa para uma equalização ainda mais forte. Oferece corpo em Sapele, Tampo em Rosewood, braço em Maple e escala em Rosewood, combinação de madeiras que garante um belo timbre além do visual muito atraente.', 1),
// (7, 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/114/233/products/b5081ba43be8fd5f56d173c17a67aab51-1bdb5e13a8ab6b450816347337664735-1024-1024.jpg', 'Contrabaixo', 'Yamaha', 'TRBX174', 1686.84, 'Preto', 'Você precisa confiar no seu instrumento. Yamaha TRBX, timbre e conforto garantidos! A perfeita combinação entre design moderno, engenharia precisa e a construção milenar da Yamaha. A equipe de desenvolvimento de instrumentos da Yamaha criou o instrumento perfeito para músicos que não querem passar vergonha. Um instrumento com o timbre que você precisa para aperfeiçoar sua performance e a flexibilidade para criar e definir seu estilo próprio. Um instrumento que oferece conforto total, tocabilidade incrível e durabilidade para enfrentar a estrada, show após show, ensaio após ensaio. Timbre, confiança, conforto e design. Este é o TRBX. Este é o baixo que você merece!', 1),
// (8, 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/114/233/products/untitled-1101-0c452c17f313db22a116421021296165-1024-1024.jpg', 'Bateria', 'Nagano Onix', 'Smart 22', 2943.91, 'Deep Silver', 'A Onix Smart é composta por um Bumbo (22”x16”), uma Caixa (14”x5,5”), um Surdo (16”x16”) e dois Tons (10''x 08'' e 12'' x 09”). Seus cascos são confeccionados em Poplar, o material mais tradicional na fabricação de baterias, são escolhidos especialmente pela baixa densidade, equilíbrio sonoro e resposta aos ataques que garantem ao baterista.', 3),
// (9, 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/114/233/products/untitled-141-8594047e76ae683f1816237647631814-1024-1024.jpg', 'Guitarra', 'Tagima', 'T635 Classic', 1782.66, 'Surf Green', 'A guitarra Tagima T 635, tem corpo em alder, braço em maple com escala Technical wood e 22 trastes. A T-635 vem equipada com captadores Tagima single coils, controle de volume, tonalidade e chave seletora de 5 posições.', 4),
// (10, 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/114/233/products/420736-0-aa3746422ea470bbc715855874235829-1024-1024.jpg', 'Ukulele', 'Phoenix', 'Soprano 21', 297.08, 'Frozen', 'A Phoenix Esta Oferecendo Em Primeira Mão Os Incríveis Ukuleles Licenciados Disney! São 4 Modelos De Ukuleles Com Diferentes Artes Da Disney: Dois Modelos Dos Persaonagens De Frozen (Rosa Ou Azul) E Dois Modelos Coloridos Do Mickey. Estes Ukuleles Foram Criados Para Trazer A Essência Da Disney Para A Musica E Oferecer Instrumentos Diferenciados E Incríveis Para Crianças E Adoradores Da Disney, Conta Ainda Com Rigoroso Controle De Qualidade Na Fabricação.', 1),
// (11, 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/114/233/products/untitled-161-3e7416873ea33f944016382132520813-1024-1024.jpg', 'Trompete', 'Benson', 'BTP1L', 1164.52, 'Ouro', 'O Trompete em Bb BTP-1L Benson laqueado e encaixe das pompas em alpaca, campana de 125mm, pistos em aço inoxidável, dedeira na 1ª pompa, anel fixo na 3ª pompa, curva da 3ª pompa removível, possui sonoridade diferenciada, valorizando cada nota em qualquer estilo musical. Projeção sonora de excelente qualidade e definição surpreendente até mesmo para trompetistas mais exigentes, acompanhando case resistente e de ótima durabilidade de uso indispensável para proteger o instrumento, possui também 1 bocal de excelente qualidade.', 2),
// (12, 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/114/233/products/417830-0-86df38a95dc51acfbd15855872715663-1024-1024.jpg', 'Cajon', 'Olé', 'OL110', 262.12, 'Dark Blue', 'O Cájon profissional OL110 da Olé é o melhor custo beneficio do Brasil. Direto da Fábrica para seu lar. Versátil para todos os tipos de música, nossos Cájons garante ótima performance, seja para tocar em casa, shows, ensaios, igrejas e rodas de Samba ou de violão. Este Cajón possui formato inclinado em 15 graus, em MDF 9mm. Seu tampo flexível garante uma tocada com simetria.', 3),
// (13, 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/114/233/products/sem-titulo-131-aab8bc8b7ec4eabc3e16490904296261-1024-1024.jpg', 'Ukulele', 'Stagg', 'Soprano US', 253.38, 'Ocean', '- Tampo: Basswood\n- Fundo e Laterais: Basswood\n- Neck: Nato\n- Headstock: Nato\n- Ponte: Composite walnut\n- Tarraxas: Clássica com puxadores de plástico\n- Acompanha: Bag', 1),
// (14, 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/114/233/products/untitled-1511-f2731a4adfcddcc1ed16196308853423-1024-1024.jpg', 'Piano', 'Casio', 'Celviano AP470 WE', 8958.42, 'Branco', 'Os recursos do novíssimo Sistema de som multidimensional Morphing AiR*da CASIO refletem toda a atenção aos detalhes na expressão de timbres valiosos e ressonantes inerentes ao piano. A capacidade de memória instalada foi expandida para atingir maior duração das amostras e muito mais qualidade dos dados de waveform. As mudanças temporais de timbre que geram um som que se espera ouvir apenas de um piano, a começar pelo som inicial, seguindo por uma bela extensão até que o som levemente se esvaia, são naturalmente reproduzidas.\nAiR = Acoustic and Intelligent Resonator\nSeleção entre dois sons de piano de cauda lendários\nOs sons instalados de dois pianos de cauda mundialmente renomados são separadamente selecionáveis, dependendo do gênero da música que está sendo tocada e do ambiente de desempenho.', 1),
// (15, 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/114/233/products/396778-0-b060d407c4f7bf5b7c15855843437368-1024-1024.jpg', 'Gaita', 'Hering', ' 6020D', 197.44, 'Blac Blues', 'A Gaita Diatônica Hering Black Blues 6020 possui corpo em ABS injetável, e seus parafusos de fixação proporcionam maior vedação e leveza ao tocar o instrumento.. Esta gaita oferece capa de proteção metalizada na cor preta, e possui chapa de vozes de 1,07 mm de espessura com afinação justa, permitindo melhor projeção de solos musicais sem prejudicar a execução de acordes.. Acompanha estojo em plástico personalizado e manual de instruções.. As gaitas Hering oferecem ótima qualidade, construção, e também um custo beneficio excelente. A marca pensou tanto nos iniciantes no instrumento ou curiosos em aprender, quanto também para uso profissional.. A Hering fabrica diversos modelos de harmônicas diatônicas em todas as afinações do modo maior.', 2),
// (16, 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/114/233/products/untitled-1231-bb217a40aa5b0ec11416040612332370-640-0.jpg', 'Teclado', 'Yamaha', 'PSR E373', 2080.04, 'Preto', ' novo padrão dos teclados portáteis.\nEquipado com teclas sensitivas e um novíssimo gerador de timbres LSI que oferece uma sensacional variedade de Sons de alta qualidade, o PSR-E373 é o novo teclado portátil da Yamaha, perfeito para aprender e tocar.\nUma extensa biblioteca de sons de alta qualidade\nO PSR-E373 vem com o recém-desenvolvido gerador de timbres LSI, que traz impressionantes melhorias na qualidade do som, bem como efeitos de alta qualidade. Graças ao novo LSI, você tem uma biblioteca abrangente de 622 sons de instrumentos perfeitos para tocar em qualquer gênero, bem como os Sons Super Articulation Lite exclusivos, que reproduzem os trinados e o ruído dos instrumentos de corda, como violoncelo e bandolim— algo complicado de emular - com total realismo, para apresentações extremamente autênticas.', 4),
// (17, 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/114/233/products/383270-0-2c10df45f4304b211e15855842637993-1024-1024.jpg', 'Saxofone', 'Eagle', 'SA500BG', 6808.38, 'Ouro/Preto', 'O modelo SA 500 BG se destaca pela qualidade de sua construção e pelos materiais que o compõe. Ajustadas manualmente, as chaves ergonômicas oferecem maior conforto, respostas rápidas e afinação precisa. O acabamento laqueado lhe confere uma sonoridade mais encorpada, aumentando sua performance.', 2),
// (18, 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/114/233/products/377766-0-b8f9eb53597ae12ee315855842578131-1024-1024.jpg', 'Saxofone', 'Eagle', 'SA500VG', 5567.30, 'Ouro Fosco', 'O modelo SA 500 VG Vintage se destaca pela qualidade de sua construção e pelos materiais que o compõe. Ajustadas manualmente, as chaves ergonômicas oferecem maior conforto, respostas rápidas e afinação precisa. O acabamento laqueado lhe confere uma sonoridade mais encorpada, aumentando sua performance.', 2),
// (19, 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/114/233/products/409182-0-ee31db87cf124dc1e515855850149725-1024-1024.jpg', 'Clarinete', 'Hoyden', 'HCL25F', 1021.18, 'Preto', 'HCL-25F, afinação Bb (Sib), 17 chaves niquelada, corpo em ABS, acabamento do corpo fosco, acompanha grease, flanela microfibra, chave de fenda, boquilha e estojo luxo. Detalhe: Parafuso aço inoxidável e apoio do polegar direito regulável.\n\nESPECIFICAÇÃO TÉCNICA\n\n- Afinação: Bb (Sib) 17 chaves niquelada.\n- Corpo: ABS.\n- Acabamento do corpo: Fosco.\n- Acompanha: Grease,boquilha e estojo luxo.\n- Detalhe: Parafuso aço inoxidável e apoio do polegar direito regulável.', 2),
// (20,'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/114/233/products/396953-0-43804ec12abcbac4e115855843502233-1024-1024.jpg', 'Tuba', 'Hoyden', 'HTB25L', 11361.92, 'Ouro', 'Modelo: HTB-25L-4, tuba 4/4 4 pistos, afinação Bb (sib), acabamento laqueado, calibre 16,5mm campana 381mm, acompanha estojo luxo e bocal. Detalhe: Botões em metal, porta lira e dedeira na primeira pompa. Altura 890mm.', 2)`)
//     .then(result => {
//         console.log('Dados inseridos com SUCESSO na tabela PRODUTO');
//     }).catch(erro => {
//         console.log('ERRO ao inserir dados na tabela PRODUTO');
//     });