
Chefe()

function chefe(){

    var numero = Number(prompt(`informe um numero`))

    exe9(numero)
}

function exe9(num){

    var soma = 0
    for(var divisor=num; divisor >=1; divisor--){ //divisor começa em 6 e vai até 1
        if (num % divisor == 0)
        soma = soma + divisor

    }

 //   var soma = 0
 //   for(var divisor=1; divisor <=num; divisor++){ //divisor começa em 6 e vai até 1
 //      if (num % divisor == 0)
 //      soma = soma + divisor

    console.log(`A soma dos divisores de ${num} é ${soma}`)

}