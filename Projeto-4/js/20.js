

// fetch('pessoas.json')// utilizando o 'Fetch API'
// .then(resposta => resposta.json())// pegamos a resposta e convertemos para 'json'
// .then(json => {
//     // console.log(json);
// carregaElementosNaPagina(json)
// });

axios('pessoas.json')// utilizando o 'Axios'
.then(resposta => {
    // resposta.data;
    carregaElementosNaPagina(resposta.data)
});

function criaElemento(dados) {
    let td = document.createElement('td');
    td.innerHTML = dados;
    return td; 
}

function carregaElementosNaPagina(json) {
    const table = document.querySelector('.table');
    const tBody = document.createElement('tbody');

    json.forEach(obj => {
        Object.entries(obj).forEach(([key, value]) => {
            console.log(`${key}: ${value}`);
        });
        console.log('-------------------');
    });

    for (let pessoa of json) {
        const tr = document.createElement('tr');

        tr.appendChild(criaElemento(pessoa.nome));

        tr.appendChild(criaElemento(pessoa.email));

        tr.appendChild(criaElemento(pessoa.salario));

        tr.appendChild(criaElemento(pessoa.estado));

        tr.appendChild(criaElemento(pessoa.empresa));

        tr.appendChild(criaElemento(pessoa.idade));

        tr.appendChild(criaElemento(pessoa.sexo));

        tr.appendChild(criaElemento(pessoa.cpf));

        tBody.appendChild(tr);
    }
    // const resultado = document.querySelector('.resultado');
   table.appendChild(tBody);
}