// const title = document.getElementById("title");
// const BASE_COLOR = "rgb(52, 73, 94)"
// const OTHER_COLOR = "#7f8c8d"

// function handleClick(){
//     const t_color = title.style.color;
//     if(t_color === BASE_COLOR)
//     {
//         title.style.color = OTHER_COLOR;
//     }
//     else
//     {
//         title.style.color = BASE_COLOR;
//     }

// }
// function init(){
//     title.style.color = BASE_COLOR;
//     title.addEventListener("click", handleClick)
// }
// init();

const title = document.getElementById("title");
const CLICKED_CLASS = "clicked";

function handleClick(){
    // const currentClass = title.className;
    
    // if(!title.classList.contains(CLICKED_CLASS)){
    //     title.classList.add(CLICKED_CLASS);
        
    // }
    // else{
    //     title.classList.remove(CLICKED_CLASS);
    // }
    title.classList.toggle(CLICKED_CLASS);
}

function init(){
    title.style.color = "#7f8c8d";
    title.addEventListener("click", handleClick);
}
init();