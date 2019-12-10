window.onload = init;

function init(){
	var gamehold;
	var startup = true; //flag for if looping functions are on their first pass or not
	var animated = false; //flag for if scoreboard animation has run or not
	var cBust = 0; //variable to hold cache busting value
	function scoreboard(){
		gamehold=$('#game').text();
		//$('#scoreboardVid').attr('src','scoreboard_2.webm');
		//$('#scoreboardVid').attr('allow','autoplay');
		if(gamehold == 'BBTAG' || gamehold == 'SFVAE' || gamehold == 'TEKKEN7'){
				$('#scoreboardVid').attr('src','webm/scoreboard_1.webm');
				$('#scoreboardVid').css('height','160');
				/*
				TweenMax.set('#leftWrapper',{css:{y: '+0px'}}); //same functions as above but this time also return wrappers to original positioning
				TweenMax.set('#rightWrapper',{css:{y: '+0px'}});
				TweenMax.set('#leftWrapper',{css:{x: '0px'}}); //same functions as above but this time also return wrappers to original positioning
				TweenMax.set('#rightWrapper',{css:{x: '0px'}});
				TweenMax.set('#rdWrapper',{css:{y: '0px'}});
				TweenMax.set('#p2Score',{css:{x: '0px'}});
				*/
				
			}
			else if(gamehold == 'BBCF' || gamehold == 'DBFZ' || gamehold == 'GGXRD' || game == 'KOFXIV' || game == 'MVCI' || game == 'UMVC3'){
				$('#scoreboardVid').attr('src','webm/scoreboard_2.webm'); //changes webm to 2nd one if appropriate game is picked
				TweenMax.set('#leftWrapper',{css:{y: adjust2}}); //sets scoreboard text wrappers to match placement of 2nd webm
				TweenMax.set('#rightWrapper',{css:{y: adjust2}});
			}
			else if(gamehold == 'USF4'){
				$('#scoreboardVid').attr('src','webm/scoreboard_3.webm');
				TweenMax.set('#leftWrapper',{css:{y: adjust3}});
				TweenMax.set('#rightWrapper',{css:{y: adjust3}});
			}
			else if(gamehold == 'UNIST' || gamehold == 'MELTY'){
				$('#scoreboardVid').attr('height','100');
				$('#scoreboardVid').attr('src','webm/Melty.webm');
				TweenMax.set('#leftWrapper',{css:{y: adjust2}});
				TweenMax.set('#rightWrapper',{css:{y: adjust2}});
				TweenMax.set('#leftWrapper',{css:{x: '150px'}});
				TweenMax.set('#p1Score',{css:{x: '-70px'}});
				TweenMax.set('#rightWrapper',{css:{x: '-150px'}});
				TweenMax.set('#p2Score',{css:{x: '67px'}});
				TweenMax.set('#p1Score',{css:{y: adjust2scorey}});
				TweenMax.set('#p2Score',{css:{y: adjust2scorey}});
				$('#round').css('color','white');
				$('#round').css('font-size','16px');
				$('#round').css('top','10px');
				$('#round').css('width','120px');
				$('#round').css('height','31px');
				$('#round').css('left','900px');
			}
			else{
				$('#scoreboardVid').css('height','160');
				$('#scoreboardVid').attr('src','webm/scoreboard_1.webm');
				
				
			}
			
		document.getElementById('scoreboardVid').play();
	}
	
	setTimeout(scoreboard, 1000);
	
}