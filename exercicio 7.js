
Chefe ()

function Chefe() {

    var vetor = [] // declara o vetor
    exe7() // passando o vetor como parâmetro - escopo globar
    console.log(vetor)
    calcmedia(vetor)
}

function exe7(vet){ // vet representa vetor, o que fizer com vet vai alterar em vetor

    var numero = Number(prompt("infome um numero"))
    do{

        // colocar o numero em vet
        vet.push(numero)
        numero = Number(prompt("infome outro numero, informe numero negativo para encerrar"))

    }
    while (numero >= 0)

}

function calcmedia(vet){

    var soma = 0
    for(var i=0; i< vet.length; i++){
        soma = soma + vet[i]
    }
    console.log (`A média é ${soma/vet.length}`)
}

   