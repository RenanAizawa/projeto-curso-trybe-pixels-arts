// Containers de variaveis
console.log('Ola, mundo! Estou funcionado!!!')
const pixelBoard = document.getElementById('pixel-board');
var mainColor = document.querySelector('.black');
var color1 = document.querySelector('.cor1');
var color2 = document.querySelector('.cor2');
var color3 = document.querySelector('.cor3');
var contColor = document.querySelectorAll('.color');
// Função de criação das div e class
function addPixels (){
    for (let i = 0; i < 5; i++) {
        let creatL = document.createElement('div');
        let attCl = document.createAttribute('class');
        attCl.value = "linha " + (i + 1);
        creatL.setAttributeNode(attCl);
        pixelBoard.appendChild(creatL)
        for (let i = 0; i < 5; i++){
            let divPixel = document.createElement('div');
            let attClass = document.createAttribute('class');
            attClass.value = 'pixel';
            divPixel.setAttributeNode(attClass);
            pixelBoard.appendChild(divPixel)
        }    
    }
}
// Seletetor de cor
function corSelected (event) {
    for (var i = 0; i < contColor.length; i++){
        var colorSelc = document.querySelectorAll('.color')[i];
        colorSelc.classList.remove('selected');
    }
    var alvo = event.target;
    console.log(alvo)
    alvo.classList.add('selected') // agradecimentos ao dvpatrick
}
// Random Color
function randomColor (){
    for (var i = 0; i < 4; i++) {
        console.log("paleta " + (i + 1))
        for (var n = 0; n < 3; n++){
            if ( i == 0){
                coloracao = 000;
                
                console.log(coloracao)
            } else {
                var coloracao = Math.floor((Math.random() * 255) + 1);
                console.log(coloracao);
            }
        }
    }
}
// Aplicação de funções
addPixels()
randomColor()
mainColor.addEventListener('click', corSelected);
color1.addEventListener('click',corSelected);
color2.addEventListener('click',corSelected);
color3.addEventListener('click',corSelected);