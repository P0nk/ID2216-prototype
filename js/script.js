
$(document).ready(startPlaying());
/*
// 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var player;

      }

      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
        event.target.playVideo();
      }

      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
      var done = false;
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
          setTimeout(stopVideo, 6000);
          done = true;
        }
      }
      function stopVideo() {
        player.stopVideo();
      }

function showSearchItems(){
	document.getElementById("searchedItemsList").style.display = "block";
}
*/

$(document).on("pageinit", function() {
	$('video').on("play", function() {
		setTimeout(function(){
			console.log("test");
			//TODO: change the progress bar color
			document.getElementById("rewindBtn1").innerHTML = "0:10-";
			document.getElementById("rewindBtn1").style.display = "block";
			setTimeout(function(){
				console.log("test2");
				//TODO: Show a go back button
			}, 10000);
		}, 2000);
	});
});

function showButton(buttonId){
		$('#'+buttonId).parent().show().parent().show();
}

function setButtonText(buttonId, text){
	$("#"+buttonId).siblings().html(text);
}

function startPlaying(){
	setTimeout(function(){
		//$("#rewindBtn1").siblings().html('0:10-');
		setButtonText("rewindBtn1", "00:10-");
		showButton("rewindBtn1");

		setTimeout(function(){
			setButtonText("rewindBtn1", "00:10-00:18");

			setTimeout(function(){
				setButtonText("rewindBtn2", "01:00-");
				showButton("rewindBtn2");

				setTimeout(function(){
					setButtonText("rewindBtn2", "01:00-01:20");

				}, 2000);
			}, 2000);
		}, 2000);
	}, 2000);
} // 4k, 8k, 42k, 20k

	//showButton("rewindBtn2");
	/*
	setTimeout(function(){

		// JQM introduced a <Span> which contains the text

		$("#rewindBtn1").prop("disabled", false);
		// 2 wrappers: explicit div and jqm div
		$("#rewindBtn1").parent().show().parent().show();

	}, 2000);
	*/
