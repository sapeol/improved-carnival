const video = document.getElementById("video");
const play = document.getElementById("play");
const stopi = document.getElementById("stop");
const progress = document.getElementById("progress");
const time = document.getElementById("timestamp");

//functions
function toggleVideoStatus(){
    if(video.paused){
        video.play();
    }else{
        video.pause();
    }
}

//play pause icon
function updatePlay(){
    if(video.paused){
        play.innerHTML =`<i class="fa fa-pause"></i>`;
    } else{
        play.innerHTML =`<i class="fa fa-play"></i>`;
    }
}
//progress video
function updateprogress(){
    progress.value = (video.currentTime/ video.duration) * 100;

}
function stopvideo(){
    video.currentTime = 0;
    video.pause();
}
function setvideoprogress(){
    video.currentTime = progress.value*video.duration /100
}

//event listeners yo

video.addEventListener('click',toggleVideoStatus);
video.addEventListener('pause',updatePlay); 
video.addEventListener('play',updatePlay);
video.addEventListener('timeupdate',updateprogress);


play.addEventListener('click', toggleVideoStatus);
stopi.addEventListener('click',stopvideo );
progress.addEventListener('change', setvideoprogress)