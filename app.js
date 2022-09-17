let playIcon = document.querySelector("#play i");
let video = document.getElementById("video");
let totalDuration = document.getElementById("totalDuration");
let videoTime = document.getElementById("videoTime");
let play = document.getElementById("play");
let playback = document.getElementById("playback");
let files = document.getElementById("files");
let prev = document.getElementById("prev");
let forw = document.getElementById("next");


function upload()
{
    var input = document.getElementById("file_left");
    var freader = new FileReader();
    freader.readAsDataURL(input.files[0]);
    var inp = document.getElementById("file_right");
    var frea = new FileReader();
    frea.readAsDataURL(inp.files[0]);
    
    freader.onload=function()
    {
        document.getElementById("video").src=freader.result;
        document.getElementById("tr").src = frea.result;
    }
}



prev.addEventListener("click",function(){

    // backward();
    time = -15;
    video.currentTime = video.currentTime + time;
});

forw.addEventListener("click", function () {

    // forward();
    time = 15;
    video.currentTime = video.currentTime + time;
});

play.addEventListener("click", function () {

    // console.log(play.title);
    if (play.title !== "Play") {
        video.pause();
        play.title = "Play";
        play.className = "fas fa-play";

    }
    else {
        video.play();
        play.title = "Pause";
        play.className = "fas fa-pause";


    }
});

playback.addEventListener("input", function () {

    video.currentTime = playback.value;
    playback.max = Math.floor(video.duration);
});

video.addEventListener("timeupdate", function () {

    videoTime.innerHTML = Math.floor(video.currentTime);
    playback.value = video.currentTime;
    playback.max = Math.floor(video.duration);
});

window.onload = function () {
    video.currentTime = playback.value;
    totalDuration.innerHTML = Math.floor(video.duration);
}






