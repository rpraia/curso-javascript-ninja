

/*

.charAt( index ) - retorna o caracter dentro de uma string - ex. 'name.charAt(0)'
.concat() - concatena com outras strings sem alterar a principal
.indexOf( string, start ) - retorna o index do ou dos caracteres e -1 quando inexistente
.lastIndexOf( string, start ) - o mesmo que indexOf só que de tras para frente
.replace( string, newString )
.slice( start, end )
.split( separador, limite ) - quebra a palavra na letra desejada e gera uma string - se usado com o join() possibilita a substituição de letra iguais de uma vez só - ex. 'obj.split('letra').join('letra')'
.substring( start, end ) - faz o mesmo que o slice mas quando o star é maior que o end ele retorna para o início a partir do end e retorna o que falta até o start
.toLowerCase() -
.toUpperCase() - 




*/



( function() {
	
	/*
	1. Envolva todo o conteúdo desse desafio em uma IIFE.
	2. Adicione a diretiva 'use strict';
	3. Crie um arquivo index.html e adicione esse script à ele.
	*/
	'use strict';
	/*
	Declare uma variável chamada `name` que receba seu primeiro nome.
	Mostre no console todas as letras do seu nome separadas, com a frase:
	- "[LETRA] é a [POSIÇÃO]ª letra do meu nome."
	Ex: no caso do nome ser "Fernando", deve mostrar as frases:
	- "F é a 1ª letra do meu nome."
	- "e é a 2ª letra do meu nome."
	E assim por diante, até a última.
	*/
	console.log( 'As letras do seu nome:' );
	var name = 'Rafael';
	for( var i = 0; i < name.length; i++ ) {
		var nameLetter = name.charAt( i );
		var nameIndex = name.indexOf( nameLetter, i ) + 1;
		console.log( nameLetter + ' é a ' + nameIndex + 'ª letra do meu nome.' );
	}


	/*
	for( var i = 0, len = name.length; i < len; i++ ) {		
		console.log( name[ i ] + ' é a ' + ( i + 1 ) + 'ª letra do meu nome.' );
	}
	*/


	/*
	- Declare uma variável chamada `fullName`, que receba seu nome completo,
	escrito no formato de slug (caixa baixa e palavras separadas por um traço).
	Ex: o nome "Fernando Daciuk" ficaria "fernando-daciuk"
	- Faça a primeira letra de cada nome ficar em caixa alta, e troque o traço
	por um espaço.
	- Detalhe: o código que você escrever abaixo deve funcionar para qualquer
	nome, então fique à vontade para usar as artimanhas que já viu até agora no
	curso para fazer isso funcionar corretamente :)
	- Mostre no console o nome no formato slug, e o resultado final. Use um
	console.log para cada formato.
	*/
	console.log( '\nNome convertido à partir de um slug:' );
	var fullName = 'rafael-ogorka-praia';
	console.log( fullName );

	/*
	solução extensa e não serve para nomes longos

	function fullNameStr( fullNameHere ) {
		var newFullName = [];
		var finalFullName;
		for( var i = 0; i < fullNameHere.length; i++ ) {
			if( i === 0 || i === fullNameHere.indexOf( '-' ) + 1 ) {
				newFullName.push( fullNameHere.charAt( i ).toUpperCase() );	
			}			
			else{ 
				newFullName.push( fullNameHere.charAt( i ) ); 
			}
			
		}
		finalFullName = newFullName.join( '' );
		return finalFullName.split( '-' ).join( ' ' );
	}
	*/

	var newFullName = fullName.split( '-' ).map( function( name ) {
		return name.charAt(0).toUpperCase() + name.slice(1);
	} ).join( ' ' );
	console.log( newFullName );

	/*
	- Crie um array com 5 nomes. Reduza esses nomes a uma única string, separando
	cada nome por vírgula. Entre o penúltimo e o último nome, o separador deve
	ser um "e". No final, concatene com a frase: " são meus amigos.".
	O resultado final deve ficar mais ou menos assim:
	- "João, Maria, Roberto, Pedro e Marcos são meus amigos."
	- Detalhe: o código abaixo deve funcionar com um array de qualquer tamanho.
	5 nomes foi somente uma sugestão ;)
	*/
	console.log( '\nMeus amigos:' );
	
	// solução apresentada na resolução do exercício
	var friends = [ 'Paulo', 'Marcos', 'Maria', 'Felipe', 'Pedro', ]
	var phrase = friends.reduce( function( acumulado, atual, index ) {
		var separator = friends.length -1 === index ? ' e ' : ', ';
		return acumulado + separator + atual;
	} ).concat( ' são meus amigos.' );
	console.log( phrase );

	/*
	Usando o replace(), faça a string "Roberto" virar "Roberta".
	Mostre o resultado no console.
	*/
	console.log( '\nEra "Roberto", agora é:' );
	// solução apresentada na resolução do exercício
	console.log( 'Roberto'.replace( 'to', 'ta' ) );

	/*
	Mostre no console a parte "nando" da string "Fernando". Use o método que
	faz a busca do final para o início da string.
	*/
	console.log( '\nParte de uma string:' );
	// solução apresentada na resolução do exercício
	console.log( 'Fernando'.substring( 8, 3 ) );

	/*
	Declare uma variável chamada `myName`, que receba o seu primeiro nome,
	escrito de forma natural.
	Mostre no console esse nome, mas com as letras intercalando entre maiúsculas
	e minúsculas.
	- Detalhe: o código abaixo deve funcionar da mesma forma para qualquer nome,
	de qualquer tamanho, escrito de qualquer forma.
	Ex.: Nomes que deveriam funcionar: "Fernando", "RoBertO", "gabriEla", etc.
	*/
	console.log( '\nNome com letras intercaladas entre caixa alta e baixa:' );
	var myName = 'Rafael';
	function newName( varHere ) {
		var arrNewName = []
		for( var i = 0; i < varHere.length; i++ ) {
			var nameChar = varHere.charAt( i );
			i % 2 === 0 ? arrNewName.push( nameChar.toUpperCase() ) : arrNewName.push( nameChar.toLowerCase() );
		}
		return arrNewName.join( '' );
	}
	console.log( newName( myName ) );

	// solução apresentada na resolução do exercício
	var myNewName = [];
	for( var i = 0, len = myName.length; i < len; i++ ) {
		myNewName.push( i % 2 === 0 ? myName[ i ].toUpperCase() : myName[ i ].toLowerCase() )
	}
	console.log( myNewName.join( '' ) );
	

} )();
