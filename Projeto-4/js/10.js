/*
do {
  i += 1;
  console.log(i);
} while (i < 5);
*/ 
function clicar(){
    var num=document.getElementById('inicio').value;
    var increment=document.getElementById('incremento').value;
    var max=document.getElementById('max').value;
    var res=document.getElementById('res');
    var soma='';
    if(num.length==0 || max.length==0 || increment.length==0){
        window.alert('erro, faltam dados')
    } else{
    var numero=Number(num);
    var mais=Number(increment);
    var maximo=Number(max);
     
    if(maximo<mais || maximo<numero){
        window.alert('erro, volte a inserir os valores');
    } else{
        for(var i=numero; i<=maximo;i+=mais){
    soma+=` ${i} \u{2714} `;
        }
        res.innerHTML= `${soma} \u{1F64c}`;
    }
    
    }
    }