const videoContainer = document.querySelector('.video__container');
const playIcon = document.querySelector('.fa-play');
const volumeBtn = document.getElementById("volume");
const volumeSlider = document.querySelector('.volumeController');
const media = document.querySelector('video');

console.log(volumeBtn);

// Play and Pause function
function handleVideoPlay(){
    playIcon.classList.toggle(`fa-play`);
    playIcon.classList.toggle(`fa-pause`);
    if(media.paused){
        media.play();
    }
    else{
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
        volumeBtn.classList.remove(`fa-volume-up`);
        volumeBtn.classList.add(`fa-volume-mute`);
    }
    else{
        volumeBtn.classList.remove(`fa-volume-mute`);
        volumeBtn.classList.add(`fa-volume-up`);
    }
    media.volume = sliderValue; 
}

function init() {
    playIcon.addEventListener('click',handleVideoPlay);
    volumeBtn.addEventListener('click',showSlider);
    volumeSlider.addEventListener('input',handleVolume);
}

init();