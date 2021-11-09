const elementos = [// array de objetos
    {tag: 'p', texto: 'Frase 1', cor: 'p'},
    {tag: 'div', texto: 'Frase 2', cor: 'div'},
    {tag: 'footer', texto: 'Frase 3', cor: 'footer'},
    {tag: 'section', texto: 'Frase 4', cor: 'section'}
];

// console.log(elementos[1].texto);



var container = document.querySelector(".container");

// var div = document.createElement("div");
// var footer = document.createElement("footer");
// var section = document.createElement("section");

// p.textContent = elementos[0].texto

// container.appendChild(criarElemento(elementos[0].tag, elementos[0].cor, elementos[0].texto));

for (let i = 0; i < elementos.length; i++) {
    container.appendChild(criarElemento(elementos[i].tag, elementos[i].cor, elementos[i].texto));
    
}

function criarElemento(elemento, classe, texto) {
    var p = document.createElement(elemento);
    p.classList.add(classe);
    p.textContent = texto;
    return p;
}
