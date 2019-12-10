window.onload = init;

function init(){
	var gameHold;
	var xhr = new XMLHttpRequest(); //AJAX data request sent to server(in this case server being local json file)
	var streamJSON = '../sc/streamcontrol.json'; //specifies path for streamcontrol output json
	var scObj; //variable to hold data extracted from parsed json
	var startup = true; //flag for if looping functions are on their first pass or not
	var animated = false;
	var cBust = 0; //variable to hold cache busting value
	var com1Wrap = $('#com1Title'); //variables to shortcut copypasting text resize functions
	var fullWrap = $('.wrappers');
	var com2Wrap = $('#com2Wrapper');
	
	
	function comm(){
		if(startup==true){
			gamehold=$('#game').text();
			$('#commVid').attr('src','commentary_2.webm');
			document.getElementById('commVid').play();
			startup = false; //flags that the scoreboard/getData functions have run their first pass
			animated = true;
			
		}
		
		
	}
	setTimeout(comm, 1000);
	
}