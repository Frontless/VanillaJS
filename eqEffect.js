const canvas = document.querySelector(".canvas");
const bgAudio = document.querySelector(".bgAudio");
const soundOnOff = document.getElementById("soundOnOff");
const CanvasContext = canvas.getContext("2d");
canvas.width = document.getElementsByClassName("canvas")[0].offsetWidth;
canvas.height = document.getElementsByClassName("canvas")[0].offsetHeight;
const AnalyserFFTSize = 128; // 32, 128 , 512 , 1024 최대 2048
const IntervalStep = 10;

// AudioContext 컨텍스트 생성
const audioContext = new AudioContext();
let audioDestination;
let audioSourceNode ;
let gainNode;
let analyser;
let bufferLength;
let dataArray;

function GetAudioAnalysisDataAtTime(){
    analyser.getByteFrequencyData(dataArray); // 시간기반의 데이터를 Unit8Array배열로 전달
}
function DrawAudioFrequency(){
    CanvasContext.clearRect(0, 0, canvas.width, canvas.height);
    dataArray.forEach(function(element, index, array){
        FrequencyEffect(index, array);    
    });
}
function FrequencyEffect(index, array){
    CanvasContext.fillStyle = "#ffffff"; 
    CanvasContext.fillRect(
        (canvas.width/bufferLength)*index,
        canvas.height,canvas.width/bufferLength,
        -(array[index]/canvas.height)*canvas.height/6
        );     
    CanvasContext.shadowBlur = 40;
    CanvasContext.shadowColor = "#ffffff";
}
function SetAudioContextInfo(){
    audioDestination = audioContext.destination;
    audioSourceNode = audioContext.createMediaElementSource(bgAudio);
    gainNode = audioContext.createGain();
    analyser = audioContext.createAnalyser();
    analyser.minDecibels = -128;
    analyser.maxDecibels = -10;
    analyser.smoothingTimeConstant = 0.8;
    audioSourceNode.connect(gainNode).connect(analyser).connect(audioDestination);

    analyser.fftSize = AnalyserFFTSize;
    bufferLength = analyser.frequencyBinCount;
    dataArray = new Uint8Array(bufferLength);
}
soundOnOff.addEventListener('click', function() {
    console.log(bgAudio.paused);
    if(bgAudio.paused){
        bgAudio.muted = false;
        bgAudio.currentTime = 0;
        bgAudio.play();
        soundOnOff.innerText = "||";

        audioContext.resume().then(() => {
            if(audioSourceNode === undefined)
                SetAudioContextInfo();
    
            setInterval(GetAudioAnalysisDataAtTime, 10);
            setInterval(DrawAudioFrequency, 10);
        });
    }
    else{
        bgAudio.currentTime = 0;
        bgAudio.pause();
        soundOnOff.innerText = "▶";

    }

});
// bgAudio.addEventListener("pause",function(){    
//     bgAudio.currentTime = 0;
//     bgAudio.play();
//     console.log("replay");
// })
function init(){
    bgAudio.pause();
}
init();
