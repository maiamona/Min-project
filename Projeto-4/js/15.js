/*
document.addEventListener('click', function (e) {//evento para clicar um qualquer parte da nossa pagina web
    var inputLista = document.querySelector('#lista');
// var botao = document.querySelector('.botao-adicionar');
var ul = document.querySelector('.lista');
var input = inputLista.value;
var li;
    //    console.log(e.target); 
    const el = e.target;//nosso elemento
    if (el.classList.contains('botao-adicionar')) {
        var apagar= document.createElement('button');
        li = document.createElement('li');
        ul.appendChild(li);
        li.textContent = input + ' ';
        li.classList.add('lista-item');
        li.appendChild(apagar);
        apagar.textContent = 'Apagar';
        apagar.classList.add('apagar');
        return; 
    }
   
});

*/


var inputLista = document.querySelector('#lista');
 var botao = document.querySelector('.botao-adicionar');
var ul = document.querySelector('.lista');


function criaLi() {
    var li = document.createElement('li');
    return li;
}

inputLista.addEventListener('keypress', function (e) {//quando uma tecla for pressionado, também existe os eventos 'keyup'-quando a tecla for pressionado e largado, o evento 'keydown' quando a tecla for pressionado e não foi largado
    // console.log(e);
    if (e.keyCode === 13) {
        // console.log('Enter presionado');
        
        if(!inputLista.value) return;
        // console.log(input);
        criaTarefa(inputLista.value);
    }
});

function limpaInput() {
    
    inputLista.value = '';
    inputLista.focus();
}


function criaTarefa(textoInput) {
    // console.log(textoInput);
    const li = criaLi();
    var apagar= document.createElement('button');
        
        ul.appendChild(li);
        limpaInput();
        li.textContent = textoInput + ' ';
        li.classList.add('lista-item');
        li.appendChild(apagar);
        apagar.textContent = 'Apagar';
        // apagar.classList.add('apagar');
        apagar.setAttribute('class', 'apagar');
        apagar.setAttribute('title', 'Apagar esta tarefa');
        salvarTarefas();
}

botao.addEventListener('click', function () {
    
    if(!inputLista.value) return;
    // console.log(input);
    criaTarefa(inputLista.value);
});

document.addEventListener('click', function (e) {
    const el = e.target;
    // console.log(el);
    if (el.classList.contains('apagar')) {
        // console.log(el.parentElement); 
        el.parentElement.remove();//remove o seu elemento pai
        salvarTarefas();
    }
});

function salvarTarefas(){
const liTarefas = ul.querySelectorAll('li');
// console.log(liTarefas);
const listaDeTarefas = [];
for (const tarefa of liTarefas) {
    // console.log(tarefa.textContent);
    let tarefaTexto = tarefa.textContent;
    tarefaTexto = tarefaTexto.replace('Apagar', '').trim();//substituindo a palavra 'Apagar' por um campo vazio, 'trim()' - elimina os espaços em branco
    // console.log(tarefaTexto);
    listaDeTarefas.push(tarefaTexto);
    
}
const tarefasJSON = JSON.stringify(listaDeTarefas);//transformando o 'JSON' em string (do nosso ARRAY), string do meu Array convertido em JSON, depois podemos voltar e converter ela em um Array novamente
// console.log(listaDeTarefas);
// console.log(tarefasJSON);
localStorage.setItem('tarefas', tarefasJSON);// 'localStorage' - local no navegador que podemos salvar os dados
}

function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas');
   const listaDeTarefas =JSON.parse(tarefas);//converter a 'JSON - string' em Array, converte de volta para um objeto javascript
    // console.log(tarefas);
    // console.log(listaDeTarefas);
    for (const tarefa of listaDeTarefas) {
        criaTarefa(tarefa);
    }
}

adicionaTarefasSalvas();