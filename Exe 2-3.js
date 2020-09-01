chefe()

function chefe(){
    var vetor = []
    do {

        var opcao = Number(prompt(`Digite \n [1]. Entrada \n [2]. Média de idade \n [3]. Maior idade \n [4]. Qtde \n [5]. Percentual \n [6]. Sair`))
        switch(opcao){
            case 1: entrada(vetor)
             break
            case 2: calculcarMedia(vetor)
             break
            case 3: calculcarMaiorIdade(vetor)
             break
            case 4: calculcarQuantidade(vetor)
             break
            case 5: calculcarPercentual(vetor)
             break
            case 6: console.log (`Rala daqui mermão`)
             break
            default: console.log(`Errou, tenta de novo`)
        }
    
    }
    while (opcao != 6)
}

function entrada(vet){
    console.log(`Entrou na função entrada`)
    let objeto = new Object()
    objeto.sexo = prompt(` Informe Maculino (M), Faminino(F)`).toUpperCase()
    objeto.altura = Number (prompt(`Informe a altura`))
    objeto.idade = Number (prompt(`Informe a idade`))
    objeto.olhos = prompt(`Informe a cor dos olhos, Azul(A), Castanho(C), Verde(V)`).toUpperCase()

}

function calculcarMedia(vet){
    console.log(`Entrou na função calculcarMedia`)
    let soma = 0
    let qtde = 0
    for(let i=0;i<vet.length;i++){
        if ((vet[i].olhos == "C") && (vet[i].altura > 1.60)){
        soma = soma + vet[i].
        qtde++
    }
    console.log(`A média da idade é ${soma/vet.length}`)

 }
}

function calculcarMaiorIdade(vet){
    console.log(`Entrou na função calculcarMaiorIdade`)
    let maioridade = vet[0].idade
    for(let i=0;i<vet.length;i++){
        if (vet[i].idade > maioridade){
            maioridade = vet[i].idade
        }

}
console.log(`A maioridade é de ${maioridade}`)
}

function calculcarQuantidade(vet){
    console.log(`Entrou na função calculcarQuantidade`)
    let qtde = 0 
    for(let i=0;i<vet.length;i++){
        if (((vet[i].sexo == "F") && (vet[i].idade >=20) && (vet[i].idade <=45)) 
        || 
        ((vet[i].olhos == "A") && (vet[i].altura < 1.70))){
          qtde++  
        }
    }
    console.log(`A qtde é de ${qtde}`)
}

function calculcarPercentual(vet){
    console.log(`Entrou na função calculcarPercentual`)
    let conta = 0 
    for(let i=0;i<vet.length;i++){
        if(vet[i].sexo == "M"){
            conta++
        }
    }
}
