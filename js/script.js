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
	var firstNoiseStart;
	var firstNoiseEnd;
	var secondNoiseStart;
	var secondNoiseEnd;
	setTimeout(function(){
		audio1.play();
		firstNoiseStart = Math.round(player.getCurrentTime());
		setButtonOnClick("rewindBtn1", firstNoiseStart);
		setButtonText("rewindBtn1", "00:"+ firstNoiseStart + "-");
		showButton("rewindBtn1");

	}, 20000);
	setTimeout(function(){
		firstNoiseEnd = Math.round(player.getCurrentTime());
		setButtonText("rewindBtn1", "00:"+ firstNoiseStart + "-" + "00:" + firstNoiseEnd);
	}, 32000);
	setTimeout(function(){
		audio2.play();
		secondNoiseStart = Math.round(player.getCurrentTime());
		snsSeconds = (secondNoiseStart % 60 < 10) ? "0" + secondNoiseStart % 60 : secondNoiseStart % 60;
		setButtonOnClick("rewindBtn2", secondNoiseStart);
		setButtonText("rewindBtn2", "0"+ Math.floor(secondNoiseStart/60) + ":" + snsSeconds + "-");
		showButton("rewindBtn2");

	}, 60000);
	setTimeout(function(){
		snsSeconds = (secondNoiseStart % 60 < 10) ? "0" + secondNoiseStart % 60 : secondNoiseStart % 60;
		secondNoiseEnd = Math.round(player.getCurrentTime());
		sneSeconds = (secondNoiseEnd % 60 < 10) ? "0" + secondNoiseEnd % 60 : secondNoiseEnd % 60;
		buttonText = "0"+ Math.floor(secondNoiseStart/60) + ":" + snsSeconds + "-" + "0"+ Math.floor(secondNoiseEnd/60) + ":" + sneSeconds;
		setButtonText("rewindBtn2", buttonText);
	}, 71000);
}
