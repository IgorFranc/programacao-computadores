
Chefe ()

function Chefe() {

    var vetor = [] // declara o vetor
    exe7() // passando o vetor como parâmetro - escopo globar
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

   