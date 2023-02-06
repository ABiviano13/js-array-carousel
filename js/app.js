// Milestrone 2

// 1. Creare una variabile dell'indice della slide attiva (0)
let indiceSlideAttiva = 0;
// 2. Creare una variabile che si collega al DOM e prende tutte le slide
const slideElements = document.getElementsByClassName('slide-carousel');
console.log(slideElements);
// 3. Creare due variabili che si collega al DOM e prende le frecce
const rightBtnElement = document.querySelector('.arrow-right');
const leftBtnElement = document.querySelector('.arrow-left');
console.log(rightBtnElement, leftBtnElement);
// 4. Creare una funzione per la quale quando si effettua un click nella freccia a destra si scorre fino all'ultima immagine
rightBtnElement.addEventListener('click', function (){
    // 1. Togliere la classe active
    // 2. Aggiungere l'incremento dell'indice
    // 3. Aggiungere la classe active
});