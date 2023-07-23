let points = 0;
let pointsMultiplier = 0;

const affectedLu = document.querySelector("#belovedHongLu");
const score = document.querySelector("#score");

//increase every second
setInterval(function(){
	points = points + pointsMultiplier;
	score.innerHTML= ("Points: " + points);
	}, 1000);

affectedLu.addEventListener("click", function (){
	clickedHongLu();
	});


function clickedHongLu(){
	affectedLu.setAttribute("src", "assets/honglu_clicked.png");
	incrementScore();
	playSound();
	setTimeout(function(){
		affectedLu.setAttribute("src", "assets/honglu_idle.png");
	}, 500);
}

function playSound(){
	var soundByte = new Audio("assets/honglugreeting.wav");
	soundByte.play();
}

function incrementScore(){
	if(pointsMultiplier == 0){
		points++;
	}
	if(pointsMultiplier > 0){
		points += pointsMultiplier;
	}
	score.innerHTML = ("Points: " + points);
}

function save(){
	debugger;
	localStorage.setItem("points", points);
	localStorage.setItem("pointsMultiplier", pointsMultiplier);
}

//https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
function load(){
	debugger;
	//THESE GOTTA GET CAST CAUSE LOCAL STORAGE CALLS THEM STRIGS :(
	points = Number(localStorage.getItem("points"));
	pointsMultiplier = Number(localStorage.getItem("pointsMultiplier"));
	score.innerHTML= ("Points: " + points);
}

function multiplierIncrease(multiplierval, cost){
	if (points >= cost){
		points -= cost;
		score.innerHTML= ("Points: " + points);
		pointsMultiplier += multiplierval;
	}
}