/*get component*/
let player = document.getElementById('video_player');
let play_pause_btn = document.getElementById('play_pause_btn');
let current_duration = document.getElementById('current_duration');
let total_duration = document.getElementById('total_duration');
let progress_bar = document.getElementById('progress_bar');
let skip_backward = document.getElementById('skip_backward');
let skip_forward = document.getElementById('skip_forward');

/*player_status is zero means video is paused & player_status is 1 means video id playing*/
player_status = 0;

function play_pause(){
	if (player_status == 0) {
		player.play();
		player_status = 1;
		timer = setInterval(update_player, 1000);
		play_pause_btn.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
	}else{
		player.pause();
		player_status = 0;
		play_pause_btn.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
	}
}
play_pause_btn.addEventListener('click', play_pause);


/*function update every second*/
function update_player(){
	current_duration.innerHTML = "0" + ":" + Math.floor(player.currentTime);
	const percent = (player.currentTime / player.duration) * 100;
	progress_bar.style.width = `${percent}%`;
	if (player.ended) {
		player_status = 0;
		play_pause_btn.innerHTML = '<i class="fa fa-repeat" aria-hidden="true"></i>';
	}
}


/*skip_forward*/
function skip(){
	player.currentTime += parseFloat(this.dataset.skip);
	update_player();
}
/*set function*/
skip_forward.addEventListener('click', skip);


/*skip_backward*/
function skip2(){
	player.currentTime += parseFloat(this.dataset.skip);
	update_player();
}
/*set function*/
skip_backward.addEventListener('click', skip2);


window.onload = function(){
	total_duration.innerHTML ="0" + ":" +Math.floor(player.duration);
}

/*complete*/