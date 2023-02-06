// Milestrone 2

// 1. Creare una variabile dell'indice della slide attiva (0)
let indexSlideActive = 0;
// 2. Creare una variabile che si collega al DOM e prende tutte le slide
const slideElements = document.getElementsByClassName('slide-carousel');
console.log(slideElements);
let lastindex = slideElements.length - 1;
console.log(lastindex);
// 3. Creare due variabili che si collega al DOM e prende le frecce
const rightBtnElement = document.querySelector('.arrow-right');
const leftBtnElement = document.querySelector('.arrow-left');
console.log(rightBtnElement, leftBtnElement);

// 4. Creare una funzione per la quale quando si effettua un click nella freccia a destra si scorre fino all'ultima immagine
rightBtnElement.addEventListener('click', function (){
    // 1. Creare variabile per prendere l'indice della slide attiva non ancora incrementata
    let slideCurrent = slideElements[indexSlideActive]; //in questo modo prendiamo l'indice della slide corrente
    console.log(slideCurrent);
    // 2. Togliere la classe active
    slideCurrent.classList.remove('active');
    // 3. Aggiungere l'incremento dell'indice
    indexSlideActive += 1;
    // 4. Creare variabile per prendere l'indice della slide attiva che abbiamo appena incrementato quindi sarà la successiva
    let slideNext = slideElements[indexSlideActive];
    console.log(slideNext);
    // 5. Aggiungere la classe active
    slideNext.classList.add('active');
    //6. Creare un punto di stop
    if(slideNext === lastindex){
        
    }
 
});