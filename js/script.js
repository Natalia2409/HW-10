let audio;
function playSound(path) {
	audio = new Audio;
	audio.src = path;
	audio.autoplay = false;
	audio.play();
	return audio;
} 


let sound = ['mp3/btnA.mp3', 'mp3/btnS.mp3', 'mp3/btnD.mp3', 'mp3/btnF.mp3', 'mp3/btnG.mp3', 'mp3/btnH.mp3', 'mp3/btnJ.mp3', 'mp3/btnK.mp3', 'mp3/btnL.mp3'];
let buttons = document.querySelectorAll('button');
	
	for(let i = 0; i < buttons.length; i++) {
		buttons[i].addEventListener('click', () => {
			playSound(sound[i]);
		});
	}

function moveRect(e){	
		
	switch(e.keyCode){
		case 65:  // если нажата клавиша влево
			playSound(sound[0]);
			break;
		case 83:  // если нажата клавиша влево
			playSound(sound[1]);
			break;
		case 68:  // если нажата клавиша влево
			playSound(sound[2]);
			break;
		case 70:  // если нажата клавиша влево
			playSound(sound[3]);
			break;
		case 71:  // если нажата клавиша влево
			playSound(sound[4]);
			break;
		case 72:  // если нажата клавиша влево
			playSound(sound[5]);
			break;
		case 74:  // если нажата клавиша влево
			playSound(sound[6]);
			break;
		case 75:  // если нажата клавиша влево
			playSound(sound[7]);
			break;
		case 76:  // если нажата клавиша влево
			playSound(sound[8]);
			break;
	}
}
 
document.addEventListener("keydown", moveRect);