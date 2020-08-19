const input = require("readline-sync");

console.log('####### Digite dois valores #######');
const valor1 = input.question ('>>>>>>>> Primeiro valor: ');
const valor2 = input.question ('>>>>>>>> Segundo valor : ');

if (valor1 > valor2 ){
    console.log( '####### Valor Maior:  ' + valor1)
} else if (valor2 > valor1) {
    console.log ('####### Valor Maior: '+ valor2)
}else {
    console.log ('******** Os valores informados são iguais!*********')
}


