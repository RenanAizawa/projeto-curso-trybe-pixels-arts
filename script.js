// Containers de variaveis
console.log('Ola, mundo! Estou funcionado!!!')
const pixelBoard = document.getElementById('pixel-board');
const blackB = document.getElementsByClassName('black');
const redB = document.getElementsByClassName('red');
const blueB = document.getElementsByClassName('blue');
const greenB = document.getElementsByClassName('green');

// Funções Aplicadas
addPixels()
function addPixels () {
    for (let i = 0; i < 5; i++) {
        for (let i = 0; i < 5; i++) {
            let divPixel = document.createElement('div');
            let attClass = document.createAttribute('class');
            attClass.value = 'pixel';
            divPixel.setAttributeNode(attClass);
            pixelBoard.appendChild(divPixel)
        }    
    }
}
