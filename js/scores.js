function savAndMoveTo(data, path){
	localStorage.clear();
	localStorage.setItem("name", data);
	location.href = path;
}
let scores;
let names;
ajax("getScores", null, (data)=>{
console.log(data);
if(data != "No users"){
	let parent = document.getElementById('names');
	for(let i=0; i < data.length; i++){
		if (i <= 10) {
	        let li = document.createElement("th");
	        li.innerHTML = data[i].name;
	        parent.append(li);
	    }
    }
    parent = document.getElementById('scores');
    for(let i=0; i < data.length; i++){
		if (i <= 10) {
	        let li = document.createElement("th");
	        li.innerHTML = data[i].score;
	        parent.append(li);
	    }
    }
}else{
	let parent = document.getElementById('names');
	let li = document.createElement("th");
	li.innerHTML = "Немає рахунків";
	parent.append(li);
	parent = document.getElementById('scores');
	li = document.createElement("th");
	li.innerHTML = "-";
	parent.append(li);
}
});

function play(){
	let name = document.getElementById('inp').value;
	if(name == ''){
		savAndMoveTo(name, "pages/game.html");
	} 
	else {
		savAndMoveTo("player" + Math.floor(Math.random() * Math.floor(999)), "pages/game.html");
	}
}

function enter(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    play();
  }
}
