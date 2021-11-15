/**
 * escreva uma função que recebe um numero e 
 * retorne o seguinte:
 * Numero é divisivel por 3 = Fizz
 * Numero é divisivel por 5 = Buzz
 * Numero é divisivel por 3 e 5 = FizzBuzz
 * Numero não é divisivel por 3 e 5, retorna o proprio numero
 * checar se o numero é realmente um numero, retorna o proprio numero
 * use a função com numeros de 0 a 100
 */




 const form = document.querySelector('#form');
 const resultado = document.querySelector('#resultado');

 console.log('escreva uma função que recebe um numero e ');
 console.log('retorne o seguinte:');
 console.log('Numero é divisivel por 3 = Fizz');
 console.log('Numero é divisivel por 5 = Buzz');
 console.log('Numero é divisivel por 3 e 5 = FizzBuzz');
 console.log('Numero não é divisivel por 3 e 5, retorna o proprio numero');
 console.log('checar se o numero é realmente um numero, retorna o proprio numero');
 console.log('use a função com numeros de 0 a 100');
 
 form.addEventListener('submit', function (mona) {//podemos criar uma função aparte ou criar dentro uma função anonima
     mona.preventDefault();
     // console.log('evento previnido');
     // setResultado('Olá mundo!');
     const inputNumero = mona.target.querySelector('#numero');
 var numero = Number(inputNumero.value);
 
 function numeros(num) {
   // console.log(num);
   
     
     if (typeof num !== 'number' ) {
       return `O valor inserido não é um numero, seu retorno é ${num}`;
     }
     if (num < 0 || num > 100) {
      return `Inserir valores de 0 a 100`;
     }
     if ((num % 3 === 0) && (num % 5 === 0)) {
       return `Numero é divisivel por 3 e 5 = FizzBuzz`;  
     }
     // if ((num % 3 === 1) && (num % 5 === 1)) {
     //   return `Numero não é divisivel por 3 e 5, seu retorno é ${num}`;  
     // }
     if (num % 3 === 0) {
       return `Numero é divisivel por 3 = Fizz`; 
     }
     if (num % 5 === 0) {
       return `Numero é divisivel por 5 = Buzz`; 
     }
   
     return num;
 } 
 
 resultado.innerHTML = numeros(numero);

 });