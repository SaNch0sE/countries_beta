let score = localStorage.getItem("score");
let nick = localStorage.getItem("name");
let data = {"name": nick, "score": score};
document.getElementById('return').innerText = score;
document.getElementById('name').innerText = nick;

function timer(){
	let obj = document.getElementById('timer_inp');
	console.log(obj.value);
	if(obj.innerHTML > 4){
		obj.innerHTML--;
	}
	else{
		obj.style.color = "red";
		obj.innerHTML--;
	}

	if(obj.innerHTML == 0){
		setTimeout(function(){},1000);
		ajax("savScore", data, (data)=>{
			console.log(data);
			location.href = "../index.html";
		});
	}
	else {
		setTimeout(timer,1000);
	}
}

setTimeout(timer,1000);