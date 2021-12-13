// Containers de variaveis
console.log('Ola, mundo! Estou funcionado!!!')
const pixelBoard = document.getElementById('pixel-board');
var mainColor = document.getElementsByClassName('black');
var color1 = document.getElementsByClassName('cor1');
var color2 = document.getElementsByClassName('cor2');
var color3 = document.getElementsByClassName('cor3');
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
    let classSelect = document.querySelector('.selected');
    classSelect.classList.remove('selected');
    event.target.className = 'selected'
}

// Aplicação de funções
addPixels()
mainColor.addEventListener('click', corSelected);
color1.addEventListener('click',corSelected);
color2.addEventListener('click',corSelected);
color3.addEventListener('click',corSelected);