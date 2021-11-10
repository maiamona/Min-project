/*
<select name="cars" id="cars">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select>
*/ 
var num=document.form1.numero;
var res=document.form2.res;
var res2=document.getElementById('res2')
let valores=[];
let array=[1, 2, 3, 4];

function isNumero(n){
if (Number(n) >= 1 && Number(n) <= 100){
    return true;
}else {
    return false;
}
}

function inLista(n, l){
if(l.indexOf(Number(n)) != -1){
    return true;
}else {
    return false; 
}
}

function Adicionar(){
if(isNumero(num.value) && !inLista(num.value, valores)){
    valores.push(Number(num.value))
    let item=document.createElement('option')
    item.text=`valor ${num.value} adicionado.`
    res.appendChild(item)
    res2.innerHTML=''
}else{
    alert(`valor invalido ou ja adicionado na lista.`)
}
num.value=''
num.focus()
}

function Finalizar(){
    if(valores.length==0){
        alert(`Adicione valores antes de finalizar`)
    } else{
let tot=valores.length
let maior=valores[0]
let menor=valores[0]
let soma=0
let media=0
for (let pos in valores){
    soma+=valores[pos]
    if(valores[pos]>maior)
    maior=valores[pos]
    if(valores[pos]<menor)
    menor=valores[pos]
}
media=soma/tot
res2.innerHTML=''
res2.innerHTML+=`<p>ao todo temos ${tot} numeros cadastrados</p>`
res2.innerHTML+=`<p>o maior valor informado foi ${maior}</p>`
res2.innerHTML+=`<p>o menor valor informado foi ${menor}</p>`
res2.innerHTML+=`<p>a soma de todos os valores é ${soma}</p>`
res2.innerHTML+=`<p>a media dos valores digitados é ${media}</p>`
    }
}