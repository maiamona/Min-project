function CriaCalculadora() {
    this.display = document.querySelector('.display2');
    this.btnClear = document.querySelector('.btn-clear');
    this.inicia = function(){
        // alert('oi iniciei');
        this.cliqueBotoes();
        this.pressionaEnter();
        // this => calculadora
        // console.log(this);
    }
    this.pressionaEnter = function(){
        this.display.addEventListener('keyup', e => {//'keyup' dispara o evento quando largamos a tecla (depois de pressionamos a tecla)
           if (e.keyCode === 13) {//keycode === 13 é o botão 'Enter' 
              this.realizaConta(); 
           }
        });
        }
        this.realizaConta = function(){
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
            }
            this.clearDisplay = function(){
                this.display.value = '';
                }
                this.apagaUm = function(){
                    this.display.value = this.display.value.slice(0, -1);//'slice()' apaga um valor no array
                }
                this.cliqueBotoes = function(){
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
                       if (el.classList.contains('btn-eq2')) {
                          this.realizaConta(); 
                       }
                   //}.bind(this));//os o 'this que esta fora do escopo da função'
                   });
                }
                this.btnParaDisplay = function(valor){
                    this.display.value += valor;//concatenamos o que estiver no display dele
                    this.display.focus();
                }
}

const calculadora = new CriaCalculadora();
calculadora.inicia();
console.log('calculadora utilizando a função construtora');
