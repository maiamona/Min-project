var diaAno = document.getElementById('data');
var diaAno2 = document.getElementById('data2');

const monthNames = ["janeiro", "fevereiro", "março", "abril", "maio", "junho",
"Julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
];



function getDiaSemanaTexto(diaSemana2) {
    let diaSemanaTexto;

    switch (diaSemana2) {
        case 0:
            diaSemanaTexto = 'domingo';   
            break;
        case 1:
            diaSemanaTexto = 'segunda-feira';   
            break;
        case 2:
            diaSemanaTexto = 'terça-feira';   
            break;
        case 3:
            diaSemanaTexto = 'quarta-feira';   
            break;
        case 4:
            diaSemanaTexto = 'quinta-feira';   
            break;
        case 5:
            diaSemanaTexto = 'sexta-feira';   
            break;
        case 6:
            diaSemanaTexto = 'sabado';   
            break;
    
        default:
            diaSemanaTexto = 'Erro de pogramação'; 
            break;
    }
    return diaSemanaTexto;
}

function zeroAEsquerda(num) {
    return num >=10 ? num : `0${num}`
}


const d = new Date();
var mes = d.getMonth();
let diaSemana = d.getDay();
const dia = zeroAEsquerda(d.getDate());
const ano = zeroAEsquerda(d.getFullYear());
const hora = zeroAEsquerda(d.getHours());
const min = zeroAEsquerda(d.getMinutes());
let diaSemanaTexto = getDiaSemanaTexto(diaSemana);



// console.log( diaSemanaTexto, dia, ano, hora, min); 

// console.log("O mês atual é " + monthNames[mes]);


// ou podemos utilizar o codigo (ver na documentação)
const opcoes = {
    
    year: 'numeric', 
    month: 'long', 
    day: '2-digit' ,
    weekday: 'long'
};

diaAno2.innerHTML = `${d.toLocaleDateString('pt-BR', opcoes)} ${d.toLocaleTimeString('en-US', { hour12: false })}`;

diaAno.innerHTML = `${diaSemanaTexto}, ${dia} de ${monthNames[mes]} de ${ano} ${hora}:${min}`;