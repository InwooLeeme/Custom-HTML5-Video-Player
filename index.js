const videoContainer = document.querySelector('.video__container');
const playIcon = document.getElementById('playBtn');
const volumeBtn = document.getElementById("volumeBtn");
const volumeSlider = document.querySelector('.volumeController');
const media = document.querySelector('video');
const screenBtn = document.getElementById('screenBtn');
const videoController = document.querySelector('.video__controller');
const videoPlayer = document.querySelector('.videoPlayer');

// Play and Pause function
function handleVideoPlay(){
    if(media.paused){
        playIcon.innerHTML = '<i class="fas fa-pause"></i>';
        media.play();
    }
    else{
        playIcon.innerHTML = '<i class="fas fa-play"></i>';
        media.pause();
    }
}

// Show Volume Slider
function showSlider(){
    volumeSlider.classList.toggle('showSlider');
}

// Volume Control function
function handleVolume(){
    let sliderValue = parseFloat(volumeSlider.value);
    if(sliderValue === 0){
        volumeBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
    }
    else {
        volumeBtn.innerHTML = '<i class="fas fa-volume-up"></i>'
    }
    media.volume = sliderValue; 
}

// Get video full time
function getFullTime(){
    const timeInfoBar = document.querySelector('.fullTime');
    const duration = media.duration;
    const minute = Math.floor(duration / 60);
    const second = Math.floor(duration % 60);
    setInterval(getCurrentTime,1000);
    timeInfoBar.innerHTML = `${minute < 10 ? `0${minute}` : `${minute}`} : ${second < 10 ? `0${second}`:`${second}`}`;
}

// Get Video Full Time
function getCurrentTime(){
    const currentTimeInfo = document.querySelector('.currentTime');
    let currentTime = Math.floor(media.currentTime);
    const minute = Math.floor(currentTime / 60);
    const second = Math.floor(currentTime % 60);
    currentTimeInfo.innerHTML = `${minute < 10 ? `0${minute}` : `${minute}`} : ${second < 10 ? `0${second}`:`${second}`}`;
}

function exitFullScreen(){
    document.exitFullscreen();
    screenBtn.innerHTML = '<i class="fas fa-expand"></i>';
    screenBtn.removeEventListener('click',exitFullScreen);
    screenBtn.addEventListener('click',goFullScreen);
}

// Control FullScreen
function goFullScreen(){
    videoContainer.requestFullscreen();
    videoController.classList.add('expand');
    screenBtn.innerHTML = '<i class="fas fa-compress"></i>';
   // media.classList.add(`fullScreen`);
    screenBtn.removeEventListener('click',goFullScreen);
    screenBtn.addEventListener('click',exitFullScreen);
}

function init() {
    playIcon.addEventListener('click',handleVideoPlay);
    volumeBtn.addEventListener('click',showSlider);
    volumeSlider.addEventListener('input',handleVolume);
    media.addEventListener('loadedmetadata', getFullTime);
    screenBtn.addEventListener('click',goFullScreen);
}

if(videoContainer){
    init();
}