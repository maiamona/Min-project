function relogio() {
    
    function criaHoraDosSegundos(segundos) {
        let tempo = {
            hour12: false,
            // timeZone: 'GMT'
            timeZone: 'UTC'
        };
        const data = new Date(segundos * 1000);//multiplica por 1000 para termos milisegundos
        return data.toLocaleTimeString('pt-BR', tempo);
    }
    
    // console.log(criaHoraDosSegundos(10));
    
    const resultado = document.querySelector('.resultado-6');
    // let iniciar = document.querySelector('.iniciar');
    // let pausar = document.querySelector('.pausar');
    // let zerar = document.querySelector('.zerar');
    let segundos = 0;
    let timer;
    
    function iniciaRelogio() {
         timer = setInterval(function () {
            segundos++;
            resultado.innerHTML = criaHoraDosSegundos(segundos);
        }, 1000);
    }
    
    document.addEventListener('click', function (e) {//evento para clicar um qualquer parte da nossa pagina web
    //    console.log(e.target); 
    const el = e.target;//nosso elemento
    if (el.classList.contains('zerar')) {
        resultado.classList.remove('pausado');
        clearInterval(timer);
        segundos = 0;
        resultado.innerHTML = '00:00:00'; 
        return; 
    }
    if (el.classList.contains('iniciar')) {
        resultado.classList.remove('pausado');
        clearInterval(timer);
        iniciaRelogio(); 
        return; 
    }
    if (el.classList.contains('pausar')) {
        resultado.classList.add('pausado');
        clearInterval(timer);
        return; 
    }
    });
    
    // iniciar.addEventListener('click', function (mona) {
    //     resultado.classList.remove('pausado');
    //     clearInterval(timer);
    //     iniciaRelogio(); 
    // });
    
    // pausar.addEventListener('click', function (mona) {
    //     resultado.classList.add('pausado');
    //     clearInterval(timer);
    // });
    
    // zerar.addEventListener('click', function (mona) {
     
    //     clearInterval(timer);
    //     segundos = 0;
    //     resultado.innerHTML = '00:00:00'; 
    // });
    
    
    
    

}    


relogio();