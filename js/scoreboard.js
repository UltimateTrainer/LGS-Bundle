window.onload = init;

function init(){
	function scoreboard(){
		$('#scoreboardVid').attr('src','Melty.webm');
		$('#scoreboardVid').attr('allow','autoplay');
		
		//document.getElementById('scoreboardVid').play();
	}
	setTimeout(scoreboard,300);
}