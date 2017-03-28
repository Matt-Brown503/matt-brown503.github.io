$(document).ready(function(){
	//start
	var content = '';
	var url = 'https://wind-bow.glitch.me/twitch-api/streams/featured?limit=10&offset=0';
	$.getJSON(url, function(data){
		for (var i = 0; i < 10; i++) {
			var streamer = data.featured[i].stream.channel.name;
			var game = data.featured[i].stream.channel.game;
			var logo = data.featured[i].stream.channel.logo;
			var streamurl = data.featured[i].stream.channel.url;
			var viewers = data.featured[i].stream.viewers;
			var status = data.featured[i].title;
			var rating;
			
			//if streamer is live but no game is streaming
			if (data.featured[i].stream.channel.game == null) {
				game = 'No game currently streaming';
			};


			getrating();
			function getrating(){
				if (data.featured[i].stream.channel.mature) {
					rating = '<span class="rating mature">mature</span>';
				} else {
					rating = '<span class="rating all-ages">all-ages</span>';
				}
			};

			content += '<div id="streamer"><a href='+streamurl+' class="streamer"><div class="info1"><img class="avatar" src='+logo+'><p>Viewers: <span class="content"><br>'+viewers+'</span></p></div><div class="info2"><h2>'+streamer+'</h2><p><span class="content title">'+status+'</span></p><p>Now Playing: <span class="content">'+game+'</span></p><p>Content: '+rating+'</p></div></a></div>';
		}
		$('#stream-window').html(content);
		
	})
//FCC Only

$.getJSON('https://wind-bow.gomix.me/twitch-api/streams/freecodecamp?callback=?', function(fccdata) {

	if (fccdata.stream == null) {
		$('#fccstatus').html('Offline');
		$('#fcc').addClass(' offline');
	} else {
		$('#fccstatus').html('Online');
	}

  console.log(fccdata);
});
	//end
})