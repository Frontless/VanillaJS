const clockContainer = document.querySelector(".js-clock"), clockTitle = clockContainer.querySelector("h1");
function getTime(){
    const date = new Date();
    const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}`:date.getMinutes();
    const hours = date.getHours() < 10 ? `0${date.getHours()}`:date.getHours();
    const seconds = date.getSeconds() < 10 ? `0${date.getSeconds()}`:date.getSeconds();
    const milliseconds = date.getMilliseconds() < 100 ? `00${date.getMilliseconds()}`:date.getMilliseconds()
    clockTitle.innerText = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}
function init(){
    getTime();
    setInterval(getTime, 1);
}
init();