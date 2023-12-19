

const previousBtn = document.querySelector('#left')
const nextBtn = document.querySelector('#right')
const container = document.querySelector('.container-images');
const images = document.querySelectorAll('#images img')
let imageIndex = 0;


// Next Image every 2 seconds
let interval = setInterval(run, 2000);

function run(){
    imageIndex++;
    changeImage();
}

function changeImage(){
    if(imageIndex > images.length - 1){
        imageIndex = 0;
    } else if(imageIndex < 0) {
        imageIndex = images.length - 1;
    }

    container.style.transform = `translateX(${imageIndex * -500}px)`
}
