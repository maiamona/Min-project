// arraw function não permite ateração do 'this'

function criaCalculadora() {
    return{
display: document.querySelector('.display'),
btnClear: document.querySelector('.btn-clear'),
inicia(){
    // alert('oi iniciei');
    this.cliqueBotoes();
    this.pressionaEnter();
    // this => calculadora
    // console.log(this);
},
pressionaEnter(){
this.display.addEventListener('keyup', e => {//'keyup' dispara o evento quando largamos a tecla (depois de pressionamos a tecla)
   if (e.keyCode === 13) {//keycode === 13 é o botão 'Enter' 
      this.realizaConta(); 
   }
});
},
realizaConta(){
let conta = this.display.value;
try {
    conta = eval(conta);
    if (!conta) {
        alert('conta invalida');
        return;
    }
    // this.display.value = conta; 
    this.display.value = String(conta); 
} catch (error) {
    alert('conta invalida');
    return;
}
},
clearDisplay(){
this.display.value = '';
},
apagaUm(){
    this.display.value = this.display.value.slice(0, -1);//'slice()' apaga um valor no array
},
cliqueBotoes(){
    // this => document
//    document.addEventListener('click', function (e) {
   document.addEventListener('click', e => {
       const el = e.target;
    //    console.log(this);
       if (el.classList.contains('btn-num')) {
       this.btnParaDisplay(el.innerText);//pegamos do elemento botão, o 'innerText' e o texto do botao  
       } 
       if (el.classList.contains('btn-clear')) {
           this.clearDisplay();
       }
       if (el.classList.contains('btn-del')) {
         this.apagaUm();  
       }
       if (el.classList.contains('btn-eq')) {
          this.realizaConta(); 
       }
   //}.bind(this));//os o 'this que esta fora do escopo da função'
   });
},
btnParaDisplay(valor){
this.display.value += valor;//concatenamos o que estiver no display dele
}
    };
}

const calculadora = criaCalculadora();
calculadora.inicia()