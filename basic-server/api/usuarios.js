inserirRota('/ver_clientes', function(dados, resposta) {
    database('')
        .then(result => {
            resposta(result)
        }).catch(erro => {
            console.log('DEU BOSTA')
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