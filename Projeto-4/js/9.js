var paragrafos = document.querySelector('.paragrafos');
var nodeList = paragrafos.querySelectorAll('p');
const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;

// console.log(nodeList.length);

// for (const iterator of object) {
    
// }

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }

// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }

// array.forEach(element => {
    
// });

 for (const p of nodeList) {
    // console.log(p);
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = '#fff';
 }

//  console.log(backgroundColorBody); - cor do fundo do 'body'