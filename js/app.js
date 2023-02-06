//Milestrone 3
const arrayImageSlide = [
    './img/image1.jpg',
    './img/image4.jpg',
    './img/image5.jpg',
    './img/image6.jpg',
    './img/image7.jpg',
    './img/image8.jpg',
    './img/image10.jpg'
]

let indexSlideActive = 0;

for(let i = 0; i < arrayImageSlide.length; i++) {

    // 1. Salvare in una variabile l'indice dell'array
    const indexSlide = arrayImageSlide[i];

    // 2. Creare elementi html di tipo img
    const imageElement = document.createElement('img');
    console.log(imageElement);
    // 3. Aggiungere src
    imageElement.src=[indexSlide];
    console.log(imageElement);
    // 4. Creare un if 
    if( i === indexSlideActive){
        imageElement.classList.add('slide-carousel', 'active');
    } else {
        imageElement.classList.add('slide-carousel');
    }
    // 5. Salvare la classe del contenitore dove vogliamo aggiungere gli elementi
    let carouselElement = document.querySelector('.carousel');
    // console.log(carouselElement);
    // 6. Aggiungere gli elementi
    carouselElement.append(imageElement);
}
// Milestrone 2

// 1. Creare una variabile dell'indice della slide attiva (0)

// 2. Creare una variabile che si collega al DOM e prende tutte le slide
// const slideElements = document.getElementsByClassName('slide-carousel');
// console.log(slideElements);

let slideNext = '';

// 3. Creare due variabili che si collega al DOM e prende le frecce
const rightBtnElement = document.querySelector('.arrow-right');
const leftBtnElement = document.querySelector('.arrow-left');
console.log(rightBtnElement, leftBtnElement);

// 4. Creare una funzione per la quale quando si effettua un click nella freccia a destra si scorre fino all'ultima immagine
rightBtnElement.addEventListener('click', function (){

    if(indexSlideActive < arrayImageSlide.length - 1){
    // 1. Creare variabile per prendere l'indice della slide attiva non ancora incrementata
    let slideCurrent = arrayImageSlide[indexSlideActive]; //in questo modo prendiamo l'indice della slide corrente
    console.log(slideCurrent);
    // 2. Togliere la classe active
    slideCurrent.classList.remove('active');
    // 3. Aggiungere l'incremento dell'indice
    indexSlideActive += 1;
    console.log(indexSlideActive);
    // 4. Creare variabile per prendere l'indice della slide attiva che abbiamo appena incrementato quindi sarà la successiva
    let slideNext = arrayImageSlide[indexSlideActive];
    console.log(slideNext);
    // 5. Aggiungere la classe active
    slideNext.classList.add('active');
    }

});


leftBtnElement.addEventListener('click', function (){

    if(indexSlideActive < arrayImageSlide.length - 1){
        arrayImageSlide.reverse()
    // 1. Creare variabile per prendere l'indice della slide attiva non ancora incrementata
    let slideCurrent = arrayImageSlide[indexSlideActive]; //in questo modo prendiamo l'indice della slide corrente
    console.log(slideCurrent);
    // 2. Togliere la classe active
    slideCurrent.classList.remove('active');
    // 3. Decremento dell'indice
    indexSlideActive += 1;
    // 4. Creare variabile per prendere l'indice della slide attiva che abbiamo appena incrementato quindi sarà la successiva
    let slideNext = arrayImageSlide[indexSlideActive];
    console.log(slideNext);
    // 5. Aggiungere la classe active
    slideNext.classList.add('active');
    }

});






