/**
 * 705.484.450-52 070.987.720-03
 * 
 * 7x 0x 5x 4x 8x 4x 4x 5x 0x
 * 10 9  8  7  6  5  4  3  2
 * 70 0  40 28 48 20 16 15 0 = 237 (somamos todos os valores = 237)
 * 
 * 7x 0x 5x 4x 8x 4x 4x 5x 0x 5x
 * 11 10 9  8  7  6  5  4  3  2
 * 77 0  45 32 56 24 20 20 0  10 = 284 (somamos todos os valores = 284)
 * 
 * 705.484.450
 * 
 * 11 - (237 % 11) = 5 (=primeiro digito)
 * 11 - (284 % 11) = 2 (=primeiro digito)
 * se o numero digito for maior que 9, consideramos 0
 */

// array.from() => converte em um array

class ValidaCPF{
    constructor(cpfEnviado){
        Object.defineProperty(this, 'cpfLimpo', {
            enumerable: true,
            // value: cpfEnviado.replace(/\D+/g, ''),
                    get: function () {
                return cpfEnviado.replace(/\D+/g, '');
            }
                });
    }

    // éSequencia(){ podemos utilizar acentuação em funções 'é'

    // }

    valida(){
        // if(!this.cpfLimpo) return false;
        // if(typeof this.cpfLimpo !== 'string') return false; 
        if(typeof this.cpfLimpo === 'undefined') return false; 
        if(this.cpfLimpo.length !== 11) return false;
        if(this.isSequencia()) return false;//se ele for uma sequencia de numeros repetitivos retorna 'false'
        
     const cpfParcial = this.cpfLimpo.slice(0, -2);// cpf sem os digitos
       const digito1 = this.criaDigito(cpfParcial);
       const digito2 = this.criaDigito(cpfParcial + digito1);
     //    console.log(digito1);
     //    console.log(digito2);
     const novoCpf = cpfParcial + digito1 + digito2;// concatenamos as 'strings' retornadas na função abaixo
     // console.log(novoCpf);
     //    return true;
     return novoCpf === this.cpfLimpo;
    }

    criaDigito(cpfParcial){
        const cpfArray = Array.from(cpfParcial);
        // console.log(cpfArray);
        let regressivo = cpfArray.length + 1;
        // console.log(regressivo);
        const total = cpfArray.reduce((ac, val) => {
            // console.log(regressivo, typeof val, regressivo * val);
           ac += (regressivo * Number(val));
            regressivo--;//decrementamos
    
    return ac;//devemos retornar sempre o acumulador
        }, 0);//acumulador comesa do '0'
        // console.log(total);
        const digito = 11 - (total % 11);
        // console.log(digito);
        return digito > 9 ? '0' : String(digito);//retorna apenas 'Strings'
    }

    isSequencia(){
        // return this.cpfLimpo.charAt(0).repeat(this.cpfLimpo.length);
        // return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;

        const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
        //   console.log(sequencia);  
        //   console.log(sequencia === this.cpfLimpo);  
        return sequencia === this.cpfLimpo;  
    }
}

// const cpf = new ValidaCPF('070.987.720-03');// ou '070.987.720-03' ou '705.484.450-52'
// cpf.valida();
// console.log(cpf);
// console.log(cpf.cpfLimpo);
// console.log(cpf.valida());

// if (cpf.valida()) {
//     console.log('CPF valido');
// } else {
//     console.log('CPF invalido'); 
// }

// if (!cpf.valida()) {
//   this.criaErro(campo, 'CPF invalido'); 
//   return false; 
// }
// return true;