const body = document.querySelector("body");

const IMG_NUMBER = 5;

function paintImage(imgNumber){
    try{
        const image = new Image();
        image.src = `./VanillaJS/img/${imgNumber+1}.jpg`;
        image.classList.add('bgImage');
        body.appendChild(image);
    }
    catch(error){
        console.log(error, image.src);
    }


    
}
function genRandom(){
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}
function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber);
}
init();