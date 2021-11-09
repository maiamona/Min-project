var diaAno = document.getElementById('data')

const monthNames = ["janeiro", "fevereiro", "março", "abril", "maio", "junho",
"Julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
];



function getDiaSemanaTexto(diaSemana2) {
    let diaSemanaTexto;

    switch (diaSemana2) {
        case 0:
            diaSemanaTexto = 'Domingo';   
            break;
        case 1:
            diaSemanaTexto = 'Segunda-feira';   
            break;
        case 2:
            diaSemanaTexto = 'Terça-feira';   
            break;
        case 3:
            diaSemanaTexto = 'Quarta-feira';   
            break;
        case 4:
            diaSemanaTexto = 'Quinta-feira';   
            break;
        case 5:
            diaSemanaTexto = 'Sexta-feira';   
            break;
        case 6:
            diaSemanaTexto = 'Sabado';   
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

diaAno.innerHTML = `${diaSemanaTexto}, ${dia} de ${monthNames[mes]} de ${ano} ${hora}:${min}`;