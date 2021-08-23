var video = document.querySelector('#video');
var play = document.querySelector('#play');
var pause = document.querySelector('#pause');
var backward = document.querySelector('#backward');
var forward = document.querySelector('#forward');

play.addEventListener('click', handlePlay);
pause.addEventListener('click', handlePause);

function handlePlay() {
  video.play();
  play.hidden = true;
  pause.hidden = false;
}

function handlePause() {
  video.pause();
  play.hidden = false;
  pause.hidden = true;
}

backward.addEventListener('click', handleBackward);

function handleBackward() {
  video.currentTime = video.currentTime - 10;
}

forward.addEventListener('click', handleForward);

function handleForward() {
  video.currentTime = video.currentTime + 10;
}

var progress = document.querySelector('#progress');

video.addEventListener('loadedmetadata', handleLoaded);
video.addEventListener('timeupdate', handleTimeUpdate);

function handleLoaded() {
  progress.max = video.duration;
}

function handleTimeUpdate() {
  progress.value = video.currentTime;
}

progress.addEventListener('input', handleInput);

function handleInput() {
  video.currentTime = progress.value;
}

// Agregada funcionalidad para capturar la tecla presionada y dar play, pause, avanzar y retroceder
window.onload = function () {
  document.onkeypress = handlePlayerWithKeys;
};

function handlePlayerWithKeys(e) {
  var char = String.fromCharCode(e.which);
  if (char === 'p' || char === 'P') {
    handlePlay();
  }
}
