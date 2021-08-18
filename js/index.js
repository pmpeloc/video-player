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
