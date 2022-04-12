inserirRota('/ver_clientes', function(dados, resposta) {
    database('SELECT * FROM CLIENTE')
        .then(result => {
            console.log(result);
            resposta(result)
        }).catch(erro => {
            console.log('ERRO ao buscar CLIENTE')
            resposta({ erro })
        })
})


inserirRota('/ver_produtos', function(dados, resposta) {
    database('SELECT * FROM PRODUTO')
        .then(result => {
            resposta(result)
        }).catch(erro => {
            console.log('ERRO ao buscar PRODUTO')
            resposta({ erro })
        })
})


inserirRota('/adicionar_carrinho', function(dados, resposta) {
    database(`INSERT INTO CARRINHO VALUES (null, "${dados.CLIENTE_CODIGO}", "${dados.PRODUTO_CODIGO}")`)
        .then(result => {
            resposta(result)
        }).catch(erro => {
            console.log('ERRO ao buscar CARRINHO')
            resposta({ erro })
        })
})

// fetch('/api/buscar_usuario', {
//     method: 'POST',
//     body: JSON.stringify({
//         nome: 'sim',
//         nickname: 'sim'
//     }),
//     headers: {
//         'Content-Type': 'application/json'
//     }
// }).then(function (result){
//     return result.json();
// }).then(function (dados){ 
//     console.log(dados);
// }).catch(function (erro){
//     console.log(erro)
// });