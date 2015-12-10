var playing = false;
function play () {
	var audio = document.getElementById('audio');
	if (playing) {
		playing = false;
		audio.pause();
		audio.currentTime = 0;
	} else {
		playing = true;
		audio.play();
	}
}