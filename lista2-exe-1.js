chefe()

function chefe(){
    // vetor de escopo local
    let vendedores = []
    let vendas = []
    let opcao
    do {
        opcao = Number(prompt(`Escolha \n [1]. Cadastrar Vendedor \n [2]. Cadastrar Venda \n [3]. [4]. [5]. [6]. Sair`))
        switch(opcao) {
            case 1: cadastraVendedor(vendedores) // essa passagem é por referência e torna o vetor de escopo global
                    break
            case 2: cadastraVendas(vendas, vendedores)
                    break
            case 3: consultaVendasFuncionarioMes(vendas)
                    break
            case 4: consultaVendasFuncionario(vendas)
                    break
            case 5: consultaVendedorMes(vendas)
                    break
            case 6: consultaMes(vendas)
                    break
            case 7: console.log(`Tchau`)
            default: console.log(`Tente novamente ...`)
        }
    }
    while (opcao != 7)
} 

function consultaMes(vdas){
    let meses = [0,0,0,0,0,0,0,0,0,0,0,0]
    // vamos preenchendo o vetor com as somas
    for(let i=0;i<vdas.length;i++){
        let posicao = vdas[i].mes - 1 // descobro a posição para colocar
        meses[posicao] = meses[posicao] + vdas[i].valor // acumula o valor
    }
    // encontraremos o maior valor vendido
    let maiorValor = meses[0] // assumo que é janeiro
    for(let i=0;i<meses.length;i++){
        if (meses[i] > maiorValor){
            maiorValor = meses[i]
        }
    }
    // encontramos a posição do maior valor vendido
    let posicao = meses.indexOf(maiorValor)
    console.log(`O mês que mais vendeu ${posicao+1}`)
}

function consultaVendedorMes(vdas){
    let mes = Number(prompt("Informe o mês"))
    let maiorVenda = 0
    let vendedorMaisVendeu = 0
    for(let i=0;i<vdas.length;i++){
        if (vdas[i].mes == mes){
            if (vdas[i].valor > maiorVenda){
                maiorVenda = vdas[i].valor
                vendedorMaisVendeu = vdas[i].vendedor
            }
        }
    }
    console.log(`Vendedor com mais vendas ${vendedorMaisVendeu} e valor ${maiorVenda}`)
}

function consultaVendasFuncionario(vdas){
    let vendedor = Number(prompt(`Informe o código do vendedor`))
    // percorre o vetor de vendas
    let soma = 0
    for(let i = 0; i< vdas.length;i++){
        if (vdas[i].vendedor == vendedor) {// encontrei a venda do vendedor 
            soma = soma + vdas[i].valor
        }
    }
    console.log(`A soma das vendas é ${soma} `)
}

function consultaVendasFuncionarioMes(vdas){
    let vendedor = Number(prompt(`Informe o código do vendedor`))
    let mes = Number(prompt(`Informe o mês da venda`))
    // percorre o vetor de vendas
    for(let i = 0; i< vdas.length;i++){
        // recupera somente o mês da data -> getMonth()
        if ((vdas[i].vendedor == vendedor) && (vdas[i].mes.getMonth() == mes)) {// encontrei a venda do vendedor naquele mes
            console.log(`Valor da venda ${vdas[i].valor}`)
            return // sai da função
        }
    }
    console.log(` Não existe venda para este funcionário neste mês `)
}

function cadastraVendedor(vended){ // vended representa o vetor vendedores
    let objeto = new Object()
    objeto.codigo = Number(prompt(`Informe código do vendedor`))
    objeto.nome = prompt(`Informe nome do vendedor`)
    // verifica se o código já existe
    for(let i = 0; i < vended.length;i++){
        if (vended[i].codigo == objeto.codigo){
            console.log(`Cadastro cancelado pois já existe um vendedor com este código`)
            return  // sai da função pois não iremos cadastrar
        }
    }
    // insere no vended, mas na verdade insere no vetor vendedores
    vended.push(objeto)
}

function cadastraVendas(vdas, vdes) { // vdas representa o vetor vendas e vdes representa o vetor vendedores
 
    let objeto = new Object()
    objeto.codigo = Number(prompt(`Informe código da venda`))
    objeto.vendedor = Number(prompt(`Informe código do vendedor`))
    let data = prompt(`Informe data da venda`).split("/")
    objeto.mes = new Date(data[2], data[1]-1, data[0])
    objeto.valor = Number(prompt(`Informe valor da venda`))
    // verifica se o vendedor existe
    // percorre o vetor de vendedores (vdes)
    for(let i=0;i<vdes.length;i++){
        if (objeto.vendedor == vdes[i].codigo) {// achamos o vendedor
            // verifica se existe venda para este vendedor no mesmo mês - não podemos registrar venda
            // percorre o vetor de vendas
            for(let j=0; j < vdas.length;j++){
                if ((objeto.mes.getMonth() == vdas[i].mes.getMonth()) && (objeto.vendedor == vdas[i].vendedor)){
                    console.log(`Não podemos registrar a venda`)
                    return  // sai da função
                }
            }
            // já percorreu e não achou, então vamos inserir
            // insere a venda em vdas, que na verdade é vendas
            vdas.push(objeto)
            console.log(`Venda registrada`)
            return  // sai da função
        }
    }
    console.log(`Vendedor não existe`)
}