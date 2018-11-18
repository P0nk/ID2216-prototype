function showSearchItems(){
	document.getElementById("searchedItemsList").style.display = "block";
}


$(document).on("pageinit", function() {
	$('video').on("play", function() {
		setTimeout(function(){
			console.log("test");
			//TODO: change the progress bar color

			setTimeout(function(){
				console.log("test2");
				//TODO: Show a go back button
			}, 1000);
		}, 2000);
	});
});
