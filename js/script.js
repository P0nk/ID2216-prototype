var tag = document.createElement('script');
tag.id = 'iframe-demo';
tag.src = 'https://www.youtube.com/iframe_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
var firstPlay = true;
var audio1 = new Audio('Noise_1.mp3');
var audio2 = new Audio('Noise_2.mp3');

function onYouTubeIframeAPIReady() {
	player = new YT.Player('existing-iframe-example', {
		events: {
			'onReady': onPlayerReady,
			'onStateChange': onPlayerStateChange
		}
	});
}

function onPlayerReady(event) {
	document.getElementById('existing-iframe-example').style.borderColor = '#FF6D00';
}

function changeBorderColor(playerStatus) {
	var color;
	if (playerStatus == -1) {
		color = "#37474F"; // unstarted = gray
	} else if (playerStatus == 0) {
		color = "#FFFF00"; // ended = yellow
	} else if (playerStatus == 1) {
		//color = "#33691E"; // playing = green

	} else if (playerStatus == 2) {
		color = "#DD2C00"; // paused = red
	} else if (playerStatus == 3) {
		color = "#AA00FF"; // buffering = purple
	} else if (playerStatus == 5) {
		color = "#FF6DOO"; // video cued = orange
	}
	if (color) {
		document.getElementById('existing-iframe-example').style.borderColor = color;
	}
}

function onPlayerStateChange(event) {
	if (firstPlay && event.data == YT.PlayerState.PLAYING) {
		firstPlay = false;
		startPlaying();
	}
	changeBorderColor(event.data);
}

// Make list of searched videos visible
function showSearchItems(){
	document.getElementById("searchedItemsList").style.display = "block";
}

// Make rewind button visible
function showButton(buttonId){
	$('#'+buttonId).parent().show().parent().show();
}

// Set the text of a button
function setButtonText(buttonId, text){
	$("#"+buttonId).siblings().html(text);
}

// Set onclick of button to set video to play specific time
function setButtonOnClick(buttonId, startTime) {
	$("#"+buttonId).click(function() {
		player.seekTo(startTime, true);
	});
}

// Pretending there's noise during intervals 00:10-00:20
// and 01:00-01:20. Rewind buttons appear automatically at these
// preset times.
function startPlaying(){
	setTimeout(function(){
		setButtonText("rewindBtn1", "00:20-");
		showButton("rewindBtn1");
		setButtonOnClick("rewindBtn1", 20);
		audio1.play();
	}, 20000);
	setTimeout(function(){
		setButtonText("rewindBtn1", "00:20-00:33");
	}, 33000);
	setTimeout(function(){
		setButtonText("rewindBtn2", "01:00-");
		showButton("rewindBtn2");
		setButtonOnClick("rewindBtn2", 60);
		audio2.play();
	}, 60000);
	setTimeout(function(){
		setButtonText("rewindBtn2", "01:00-01:10");
	}, 70000);
}
