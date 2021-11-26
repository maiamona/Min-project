class ValidaFormulario{
    constructor(){
this.formulario = document.querySelector('#form');

        this.eventos();
    }

    eventos(){
this.formulario.addEventListener('submit', e =>{//utilizamos a 'arrow functions' para não perdemos o 'this' porque a 'arrow functions' não permite alteração do 'this' 
this.handleSubmit(e);
});
    }

    handleSubmit(e){
        e.preventDefault();
        // console.log('Formulario não enviado');
const camposValidos = this.camposSaoValidos();
const senhasValidas = this.senhasSaoValidas();

if (camposValidos && senhasValidas) { // se os dois valores do 'if' forem verdadeiros
    alert('Formulário enviado');
    this.formulario.submit();
}
    }  
    
    senhasSaoValidas(){
     let valid = true;

     const senha = this.formulario.querySelector('.senha');
     const repetirSenha = this.formulario.querySelector('.repetir-senha');
     
     if (senha.value !== repetirSenha.value) {
         valid = false;
         this.criaErro(senha, 'Campos "senha" e "repetir senha" precisam ser iguais');
         this.criaErro(repetirSenha, 'Campos "senha" e "repetir senha" precisam ser iguais');
     }

     if (senha.value.length < 6 || senha.value.length > 12) {
        valid = false;
        this.criaErro(senha, 'Senha precisa estar entre 6 e 12 caracteres'); 
     }
     return valid;
    }

    camposSaoValidos(){
let valid = true;

for (let errorText of this.formulario.querySelectorAll('.error-text')) {
    errorText.remove();
}

for (let campo of this.formulario.querySelectorAll('.validar')) {
    let label = campo.previousElementSibling.innerHTML;// 'previousElementSibling' é o elemento irmao anterior dele
    // console.log(campo);
    if (!campo.value) {// se o campo estiver vazio
      this.criaErro(campo, `Campo "${label}" não pode estar em branco`);
      valid = false;  
    }

    if (campo.classList.contains('cpf')) {
        if (!this.validaCPF(campo)) valid = false; // utilizamos '!' porque não presisamos de 'else'   
    }

    if (campo.classList.contains('usuario')) {
        if (!this.validaUsuario(campo)) valid = false; // utilizamos '!' porque não presisamos de 'else'   
    }

}

return valid;
    }

    validaUsuario(campo){
const usuario = campo.value;
let valid = true;
if (usuario.length < 3 || usuario.length > 12) {
    this.criaErro(campo, 'Usuario precisa ter entre 3 e 12 caracteres');
    valid = false;
}

if (!usuario.match(/^[a-zA-Z0-9]+$/g)) {
    this.criaErro(campo, 'Nome de usuario precisa conter apenas letras e numeros');
    valid = false;
}
        return valid;
    }

    validaCPF(campo){
        const cpf = new ValidaCPF(campo.value);

if (!cpf.valida()) {
  this.criaErro(campo, 'CPF invalido'); 
  return false; 
}
return true;

    }

    criaErro(campo, msg){
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div);//depois do campo
    }
}



const valida = new ValidaFormulario();