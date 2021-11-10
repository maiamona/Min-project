const form = document.querySelector('#form');
let res2 = document.querySelector("#resultado");

form.addEventListener('submit', function (mona) {//podemos criar uma função aparte ou criar dentro uma função anonima
	mona.preventDefault();
	
	const inputn1 = mona.target.querySelector('#n1');
	const inputn2 = mona.target.querySelector('#n2');
	
	const n1 = Number(inputn1.value);
	const n2 = Number(inputn2.value);
	
   
    function maiorValor(valor1, valor2) {
        let maior;
        let menor; 
        if(valor1>valor2){
            maior = valor1;
            menor = valor2; 
            return `<p>o maior valor é ${maior} e o menor valor é ${menor}</p>`
        }
        if(valor1<valor2){
            maior = valor2;
            menor = valor1;   
            return `<p>o maior valor é ${maior} e o menor valor é ${menor}</p>`
        } 
    }
    
    
    res2.innerHTML = maiorValor(n1, n2); 
    
    function max(x, y) {
        return x > y ? x : y;
    }
    
    const max2 = (x, y) =>{
     return x > y ? x :y;
    };
    
    const max3 = (x, y) => x > y ? x :y;
    
    
    console.log(max(n1, n2));
    console.log(max2(n1, n2));
    console.log(max3(n1, n2));
});


