/*
Crie um array com 5 items (tipos variados).
*/
var arrTipos = [
  'Lista de compras',
  666,
  [ 'cenoura', 'batata', 'pepino', 'tomate', 'alface', ],
  { formaPagamento: 'Crédito', limiteItens: 5, qtSacolas: 3 },
  true
]

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
function addItem( addValue ) {

  arrTipos.push( addValue );
  console.log( arrTipos );

}


/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
console.log( addItem( [ 1, 2, 3, 4 ] ) );

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
console.log( 'O segundo elementodo do novo array é ' + arrTipos[5][1] );

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
console.log( 'O primeiro array tem ' + arrTipos.length + ' itens. Mas tinha ' + (arrTipos.length - 1) + ' antes da função "addItem" ser executada.' );

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
console.log( 'O segundo array tem ' + arrTipos[5].length + ' itens. Mas já havia outro array com ' +  arrTipos[2].length + ' itens.' );

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
console.log( 'Números pares entre 10 e 20:' );

var num10_20 = 10;
var returnEven = function() {
  while(num10_20 <= 20) {
    (num10_20) % 2 === 0 ? console.log( num10_20 ) : '';
    num10_20++;
  }
}
console.log( returnEven() );

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
console.log( 'Números ímpares entre 10 e 20:' );

var num10_20_2 = 10;
var returnOdd = function() {
  while(num10_20_2 <= 20) {
    (num10_20_2) % 2 !== 0 ? console.log( num10_20_2 ) : '';
    num10_20_2++;
  }
}
console.log( returnOdd() );

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
console.log( 'Números pares entre 100 e 120:' );


var returnEven2 = function() {

  for ( var num = 100; num <= 120; num++ ) {
    (num) % 2 === 0 ? console.log( num ) : '';
  }
}
console.log( returnEven2() );

console.log( 'Números ímpares entre 111 e 125:' );

var returnOdd2 = function() {

  for ( var num = 111; num <= 125; num++ ) {
    (num) % 2 !== 0 ? console.log( num ) : '';
  }
}
console.log( returnOdd2() );
