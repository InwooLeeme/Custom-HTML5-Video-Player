const videoContainer = document.querySelector('.video__container');
const playIcon = document.querySelector('.fa-play');
const media = document.querySelector('video');

function handleVideoPlay(event){
    if(media.paused){
        playIcon.classList.toggle(`fa-play`);
        playIcon.classList.toggle(`fa-pause`);
        media.play();
    }
    else{
        playIcon.classList.toggle(`fa-play`);
        playIcon.classList.toggle(`fa-pause`);
        media.pause();
    }

}

function init() {
    playIcon.addEventListener('click',handleVideoPlay);
}

init();