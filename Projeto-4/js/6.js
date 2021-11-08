const form = document.querySelector('#form');

form.addEventListener('submit', function (mona) {//podemos criar uma função aparte ou criar dentro uma função anonima
	mona.preventDefault();
	// console.log('evento previnido');
	// setResultado('Olá mundo!');
	const inputPeso = mona.target.querySelector('#peso');
	const inputAltura = mona.target.querySelector('#altura');
	// const peso = form.peso;// utilizado  o 'form.'
	// console.log(inputPeso);
	// console.log(peso);
	const peso = Number(inputPeso.value);
	const altura = Number(inputAltura.value);
	// console.log(peso, altura);
	if (!peso) {//se o peso = false (qualquer valor negativo)
		setResultado('Peso invalido', false);
		return; //aqui o 'return' para toda a função
	}

	if (!altura) {
		setResultado('Altura invalida', false);
		return; 
	}

	const imc = getImc(peso, altura);
	const nivelImc = getNivelImc(imc);

	const msg = `Seu IMC é ${imc} - <strong>${nivelImc}</strong>`;

	// console.log(imc, nivelImc);
	setResultado(msg, true);


});

/**
 * Menos do que 18,5 - Abaixo do peso
 * Entre 18,5 e 24,9 - Peso normal
 * Entre 25 e 29,9 - Sobrepeso
 * Entre 30 e 34,9 - Obesidade grau 1
 * Entre 35 e 39,9 - Obesidade grau 2
 * Mais do que 40 - Obesidade grau 3
 */

function getNivelImc(imc) {
	// const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];
	const nivel = ['Você esta abaixo do peso', 'Peso Ideal', 'Sobrepeso', 'Obesidade Moderada', 'Obesidade Severa', 'Obesidade Morbida', 'Gordo'];
	
	
	if(imc < 20)
	{
		return nivel[0];
		// Você esta abaixo do peso
	} 
	 if(imc >20 && imc <= 25)
	{
		return nivel[1];
		// Peso Ideal
	}
	 if(imc >25 && imc <= 30)
	{
		return nivel[2];
		// Sobrepeso
	}
	 if(imc >30 && imc <= 35)
	{
		return nivel[3];
		// Obesidade Moderada
	}
	 if(imc >35 && imc <= 40)
	{
		return nivel[4];
		// Obesidade Severa
	}
	 if(imc >40 && imc <= 50)
	{
		return nivel[5];
		// Obesidade Morbida
	}
    if(imc > 50)
	{
		return nivel[6];
		// Gordo
	}

/*

if (imc >= 39.9) {//não presiso de 'if' AND 'else' porque o 'return vai para a funcção 'function'
	return nivel[5];
} 
 if ( imc >= 34.9) return nivel[4];

 if (imc >= 29.9) return nivel[3];

 if ( imc >= 24.9) return nivel[2];

if ( imc >= 18.5) return nivel[1];

 if(imc < 18.5) return nivel[0];     
*/
}

function getImc(peso, altura) {
	const imc = peso / (altura ** 2); //const imc = peso / (altura * altura)
	return imc.toFixed(2);
}

// function criaP(className) {
function criaP() {//a tarefa dessa função é criar um paragrafo apenas
const p = document.createElement('p');
	// p.classList.add(className);
	return p;
	
}

function setResultado(msg, isValid) {
	const resultado = document.querySelector('#resultado');
	// resultado.innerHTML = `<p>${msg}</p>`; 
	resultado.innerHTML = '';
	// const p = document.createElement('p');
	// p.classList.add('paragrafo-resultado');
	// p.innerHTML = 'Qualquer coisa';
	// resultado.appendChild(p);
	const p = criaP();
	if (isValid) {
		p.classList.add('paragrafo-resultado');
	}else{
		p.classList.add('bad');
	}

	p.innerHTML = msg;
	resultado.appendChild(p);
}