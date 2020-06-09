/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var varArray = [ 'copo', betaFunction(), true, arvore.folhas, 666 ];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
var japan = [ 'neko', 'moti', 'hashi' ];
function arrFunc( x ) { return  x; }
console.log( arrFunc( japan ) );

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log( arrFunc( japan )[1] ); // moti

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/

function numFunc( x, y ) {
  return x[y];
}
console.log( numFumc( [ 6, 66, 666 ], 1 ) ); // 66

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var arrNum = [ 100, 200, 300, 400, 500 ];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log( numFumc( arrNum, 0 ) ); // 100
console.log( numFumc( arrNum, 1 ) ); // 200
console.log( numFumc( arrNum, 2 ) ); // 300
console.log( numFumc( arrNum, 3 ) ); // 400
console.log( numFumc( arrNum, 4 ) ); // 500

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book( name ) {
  var stock = {
    'Admiravel mundo novo': { 
      quantidadePaginas: 345, 
      autor: 'Autor 1', 
      editora: 'Padrão' 
    },
    'A Revolução dos bichos': { 
      quantidadePaginas: 260, 
      autor: 'Autor 2', 
      editora: 'pubLivros' 
    },
    'A Ilha': { 
      quantidadePaginas: 430, 
      autor: 'Autor 3', 
      editora: 'E-livros' 
    }
  };
  
  return !name ? stock : stock[ name ];  
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log( book() );

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var bookName = 'Admiravel mundo novo tem';
console.log( 'O livro ' + bookName + ' ' + book( 'Admiravel mundo novo' ).quantidadePaginas + ' páginas!' )

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log( 'O autor do livro ' + bookName + ' é ' + book( 'Admiravel mundo novo' ).autor )

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log( 'O livro ' + bookName + ' foi publicado pela editora ' + book( 'Admiravel mundo novo' ).editora )
