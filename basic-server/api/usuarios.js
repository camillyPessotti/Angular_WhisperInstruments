inserirRota('/buscar_clientes', function(dados, resposta) {
    database('SELECT * FROM CLIENTE')
        .then(result => {
            console.log(result);
            resposta(result)
        }).catch(erro => {
            console.log('ERRO ao buscar CLIENTE')
            resposta({ erro })
        })
})


inserirRota('/buscar_produtos', function(dados, resposta) {
    database('SELECT * FROM PRODUTO')
        .then(result => {
            resposta(result)
        }).catch(erro => {
            console.log('ERRO ao buscar PRODUTO')
            resposta({ erro })
        })
})

inserirRota('/buscar_carrinho', function(dados, resposta) {
    database('SELECT * FROM CARRINHO')
        .then(result => {
            resposta(result)
        }).catch(erro => {
            console.log('ERRO ao buscar CARRINHO')
            resposta({ erro })
        })
})


inserirRota('/adicionar_carrinho', function(dados, resposta) {
    database(`INSERT INTO CARRINHO (CODIGO, CLIENTE_CODIGO, PRODUTO_CODIGO) VALUES (${dados.CODIGO}, ${dados.CLIENTE_CODIGO}, ${dados.PRODUTO_CODIGO})`)
        .then(result => {
            resposta(result)
        }).catch(erro => {
            console.log('ERRO ao buscar CARRINHO')
            resposta({ erro })
        })
})

inserirRota('/excluir_produto', function(dados, resposta) {
    database(`DELETE FROM CARRINHO WHERE CODIGO = ${dados.CODIGO}`)
        .then(result => {
            resposta(result)
        }).catch(erro => {
            console.log('ERRO ao deletar da tabela CARRINHO')
            resposta({ erro })
        })
})