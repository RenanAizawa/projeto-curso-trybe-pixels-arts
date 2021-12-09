// Containers de variaveis
console.log('Ola, mundo! Estou funcionado!!!')
const pixelBoard = document.getElementById('pixel-board');

// Funções Aplicadas
function addPixels (){
    for (let i = 0; i < 5; i++) {
        for (let i = 0; i < 5; i++){
            let divPixel = document.createElement('div');
            let attClass = document.createAttribute('class');
            attClass.value = 'pixel';
            divPixel.setAttributeNode(attClass);
            pixelBoard.appendChild(divPixel)
        }    
    }
}
addPixels()
function CorSelected (event) {
    let classSelect = document.querySelector('.selected');
    
}