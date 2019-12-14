let city = [[ "австралія", "австрія", "азербайджан", "аландські острови", "албанія", "алжир", "американські віргінські острови", "американське самоа", "ангілья", "ангола", "андорра" , "антарктида", "антигуа і барбуда", "аргентина", "аруба", "афганістан"],
	[ "багами", "бангладеш", "барбадос", "бахрейн", "беліз", "білорусія", "бельгія", "бенін", "болгарія", "болівія", "боснія", "ботсвана", "бразилія", "буркіна-фасо", "бурунді", "бутан"],
	[ "вануату", "ватикан", "великобританія", "венесуела", "вірменія", "в'єтнам"],
	[ "габон", "гаїті", "гайана", "гамбія", "гана", "гватемала", "гвінея", "гвінея-бісау", "голландія", "гондурас", "гонконг" , "гренада", "гренландія", "греція", "грузія", "гуам"],
	[ "данія", "джібуті", "домініканська республіка"],
	[ "єгипет"],
	[ "замбія", "західна сахара", "зімбабве"],
	[ "ізраїль", "індія", "індонезія", "ірак", "іран", "ірландія", "ісландія", "іспанія", "італія"],
	[ "йемен", "йорданія"],
	[ "кабо-верде", "казахстан", "конго", "камбоджа", "камерун", "канада", "катар", "кенія", "кіпр", "киргизія", "кірібаті", "китай", "кндр" , "колумбія", "коморські острови", "коста-ріка", "кот-д'івуар", "куба", "кувейт"],
	[ "лаос", "латвія", "лесото", "ліберія", "ліван", "лівія", "литва", "ліхтенштейн", "люксембург"],
	[ "маврикій", "мавританія", "мадагаскар", "македонія", "малаві", "малайзія", "малі", "мальдіви", "мальта", "марокко", "мартініка", "мексика", " мікронезія "," мозамбік "," молдавія "," монако "," монголія "," м'янма "],
	[ "намібія", "непал", "німеччина", "нігер", "нігерія", "нікарагуа", "нова зеландія", "нова каледонія", "норвегія"],
	[ "оае", "оман"],
	[ "пакистан", "палестина", "панама", "папуа-нова гвінея", "парагвай", "перу", "польща", "португалія", "пуерто-ріко", "південно-африканська республіка"],
	[ "республіка конго", "республіка корея", "росія", "руанда", "румунія"],
	[ "сальвадор", "сан-марино", "сан-томе і прінсіпі", "саудівська аравія", "свазіленд", "сенегал", "сент-кітс і невіс", "сент-люсія", "сербія", "сінгапур", "сирія", "словаччина", "словенія", "соломонові острови", "сомалі", "судан", "суринам", "сша", "сьерра-леоне"],
	[ "таджикистан", "таїланд", "тайвань", "танзанія", "того", "тонга", "тринідад і тобаго", "туніс", "туркменістан", "туреччина"],
	[ "уганда", "узбекистан", "україна", "уругвай", "угорщина"],
	[ "фіджі", "філіппіни", "фінляндія", "франція", "французька гвіана"],
	[ "хорватія"],
	[ "центральноафриканська республіка"],
	[ "чад", "чорногорія", "чехія", "чилі"],
	[ "швейцарія", "швеція", "шрі-ланка"],
	[ "еквадор", "екваторіальна гвінея", "еритрея", "естонія", "ефіопія"],
	[ "ямайка", "японія"]];

function savAndMoveTo(data, path){
	localStorage.clear();
	localStorage.setItem("score", data);
	location.href = path;
}

function fill(word, color){
	switch(word){
		case 'австралія':
			document.getElementById("gAU").style.fill = color
			break;
		case 'австрія':
			document.getElementById("gAT").style.fill = color
			break;
		case 'азербайджан':
			document.getElementById("gAZ").style.fill = color
			break;
		case 'албанія':
			document.getElementById("gAL").style.fill = color
			break;
		case 'алжир':
			document.getElementById("gDZ").style.fill = color
			break;
		case 'ангола':
			document.getElementById("gAO").style.fill = color
			break;
		case 'аргентина':
			document.getElementById("gAR").style.fill = color
			break;
		case 'афганістан':
			document.getElementById("gAF").style.fill = color
			break;
		case 'багами':
			document.getElementById("gBS").style.fill = color
			break;
		case 'бангладеш':
			document.getElementById("gBD").style.fill = color
			break;
		case 'беліз':
			document.getElementById("gBZ").style.fill = color
			break;
		case 'білорусія':
			document.getElementById("gBY").style.fill = color
			break;
		case 'бельгія':
			document.getElementById("gBE").style.fill = color
			break;
		case 'бенін':
			document.getElementById("gBJ").style.fill = color
			break;
		case 'болгарія':
			document.getElementById("gBG").style.fill = color
			break;
		case 'болівія':
			document.getElementById("gBO").style.fill = color
			break;
		case 'боснія':
			document.getElementById("gBA").style.fill = color
			break;
		case 'ботсвана':
			document.getElementById("gBW").style.fill = color
			break;
		case 'бразилія':
			document.getElementById("gBR").style.fill = color
			break;
		case 'буркіна-фасо':
			document.getElementById("gBF").style.fill = color
			break;
		case 'бурунді':
			document.getElementById("gBI").style.fill = color
			break;
		case 'бутан':
			document.getElementById("gBT").style.fill = color
			break;
		case 'вануату':
			document.getElementById("gVU").style.fill = color
			break;
		case 'великобританія':
			document.getElementById("gUK").style.fill = color
			break;
		case 'венесуела':
			document.getElementById("gVE").style.fill = color
			break;
		case 'вірменія':
			document.getElementById("gAM").style.fill = color
			break;
		case 'в\'єтнам':
			document.getElementById("gAU").style.fill = color
			break;
		case 'габон':
			document.getElementById("gGA").style.fill = color
			break;
		case 'гаїті':
			document.getElementById("gHT").style.fill = color
			break;
		case 'гайана':
			document.getElementById("gGY").style.fill = color
			break;
		case 'гамбія':
			document.getElementById("gGM").style.fill = color
			break;
		case 'гана':
			document.getElementById("gGH").style.fill = color
			break;
		case 'гваделупа':
			document.getElementById("gGP").style.fill = color
			break;
		case 'гватемала':
			document.getElementById("gGT").style.fill = color
			break;
		case 'гвінея':
			document.getElementById("gGN").style.fill = color
			break;
		case 'гвінея-бісау':
			document.getElementById("gGW").style.fill = color
			break;
		case 'гондурас':
			document.getElementById("gHN").style.fill = color
			break;
		case 'гренландія':
			document.getElementById("gGL").style.fill = color
			break;
		case 'греція':
			document.getElementById("gGR").style.fill = color
			break;
		case 'грузія':
			document.getElementById("gGE").style.fill = color
			break;
		case 'данія':
			document.getElementById("gDK").style.fill = color
			break;
		case 'джібуті':
			document.getElementById("gDJ").style.fill = color
			break;
		case 'домініканська республіка':
			document.getElementById("gDO").style.fill = color
			break;
		case 'єгипет':
			document.getElementById("gEG").style.fill = color
			break;
		case 'замбія':
			document.getElementById("gZM").style.fill = color
			break;
		case 'зімбабве':
			document.getElementById("gZW").style.fill = color
			break;
		case 'ізраїль':
			document.getElementById("gIL").style.fill = color
			break;
		case 'індія':
			document.getElementById("gIN").style.fill = color
			break;
		case 'ірак':
			document.getElementById("gIQ").style.fill = color
			break;
		case 'іран':
		  document.getElementById("gIR").style.fill = color
		  break;
		case 'ісландія':
		  document.getElementById("gIS").style.fill = color
		  break;
		case 'іспанія':
		  document.getElementById("gES").style.fill = color
		  break;
		case 'італія':
		  document.getElementById("gIT").style.fill = color
		  break;
		case 'йемен':
		  document.getElementById("gYE").style.fill = color
		  break;
		case 'йорданія':
		  document.getElementById("gJO").style.fill = color
		  break;
		case 'казахстан':
		  document.getElementById("gKZ").style.fill = color
		  break;
		case 'конго':
		  document.getElementById("gCD").style.fill = color
		  break;
		case 'камбоджа':
		  document.getElementById("gKH").style.fill = color
		  break;
		case 'камерун':
		  document.getElementById("gCM").style.fill = color
		  break;
		case 'канада':
		  document.getElementById("gCA").style.fill = color
		  break;
		case 'катар':
		  document.getElementById("gQA").style.fill = color
		  break;
		case 'кенія':
		  document.getElementById("gKE").style.fill = color
		  break;
		case 'кіпр':
		  document.getElementById("gCY").style.fill = color
		  break;
		case 'киргизія':
		  document.getElementById("gKG").style.fill = color
		  break;
		case 'китай':
		  document.getElementById("gCN").style.fill = color
		  break;
		case 'кндр':
		  document.getElementById("gKP").style.fill = color
		  break;
		case 'колумбія':
		  document.getElementById("gCO").style.fill = color
		  break;
		case 'коста-ріка':
		  document.getElementById("gCR").style.fill = color
		  break;
		case 'кот-д івуар':
		  document.getElementById("gCI").style.fill = color
		  break;
		case 'кувейт':
		  document.getElementById("gKW").style.fill = color
		  break;
		case 'латвія':
		  document.getElementById("gLV").style.fill = color
		  break;
		case 'лесото':
		  document.getElementById("gLS").style.fill = color
		  break;
		case 'ліберія':
		  document.getElementById("gLR").style.fill = color
		  break;
		case 'ліван':
		  document.getElementById("gLB").style.fill = color
		  break;
		case 'лівія':
		  document.getElementById("gLY").style.fill = color
		  break;
		case 'литва':
		  document.getElementById("gLT").style.fill = color
		  break;
		case 'ліхтенштейн':
		  document.getElementById("gLI").style.fill = color
		  break;
		case 'люксембург':
		  document.getElementById("gLU").style.fill = color
		  break;
		case 'маврикій':
		  document.getElementById("gMU").style.fill = color
		  break;
		case 'мавританія':
		  document.getElementById("gMR").style.fill = color
		  break;
		case 'мадагаскар':
		  document.getElementById("gMG").style.fill = color
		  break;
		case 'македонія':
		  document.getElementById("gMK").style.fill = color
		  break;
		case 'малаві':
		  document.getElementById("gMW").style.fill = color
		  break;
		case 'малайзія':
		  document.getElementById("gMY").style.fill = color
		  break;
		case 'малі':
		  document.getElementById("gML").style.fill = color
		  break;
		case 'марокко':
		  document.getElementById("gMA").style.fill = color
		  break;
		case 'мексика':
		  document.getElementById("gMX").style.fill = color
		  break;
		case 'мозамбік':
		  document.getElementById("gMZ").style.fill = color
		  break;
		case 'молдавія':
		  document.getElementById("gMD").style.fill = color
		  break;
		case 'монголія':
		  document.getElementById("gMN").style.fill = color
		  break;
		case 'м\'янма':
		  document.getElementById("gMM").style.fill = color
		  break;
		case 'намібія':
		  document.getElementById("gNA").style.fill = color
		  break;
		case 'непал':
		  document.getElementById("gNP").style.fill = color
		  break;
		case 'німеччина':
		  document.getElementById("gDE").style.fill = color
		  break;
		case 'нігер':
		  document.getElementById("gNE").style.fill = color
		  break;
		case 'нігерія':
		  document.getElementById("gNG").style.fill = color
		  break;
		case 'нікарагуа':
		  document.getElementById("gNI").style.fill = color
		  break;
		 case 'нова зеландія':
		  document.getElementById("gNZ").style.fill = color
		  break;
		case 'норвегія':
		  document.getElementById("gNO").style.fill = color
		  break;
		case 'оае':
		  document.getElementById("gAE").style.fill = color
		  break;
		case 'оман':
		  document.getElementById("gOM").style.fill = color
		  break;
		case 'японія':
		  document.getElementById("gJP").style.fill = color
		  break;
		case 'ямайка':
		  document.getElementById("gJM").style.fill = color
		  break;
		case 'ефіопія':
		  document.getElementById("gET").style.fill = color
		  break;
		case 'естонія':
		  document.getElementById("gEE").style.fill = color
		  break;
		case 'екваторіальна гвінея':
		  document.getElementById("gGQ").style.fill = color
		  break;
		case 'еквадор':
		  document.getElementById("gEC").style.fill = color
		  break;
		case 'шрі-ланка':
		  document.getElementById("gLK").style.fill = color
		  break;
		case 'швеція':
		  document.getElementById("gSE").style.fill = color
		  break;
		case 'швейцарія':
		  document.getElementById("gCH").style.fill = color
		  break;
		case 'чилі':
		  document.getElementById("gCL").style.fill = color
		  break;
		case 'чехія':
		  document.getElementById("gCZ").style.fill = color
		  break;
		case 'чорногорія':
		  document.getElementById("gCS").style.fill = color
		  break;
		case 'пакистан' :
			document.getElementById("gPK").style.fill = color
			break;
		case 'панама' :
			document.getElementById('gPA').style.fill = color
			break;
		case 'папуа-нова гвінея' :
			document.getElementById('gPG').style.fill = color
			break;
		case 'парагвай' :
			document.getElementById('gPY').style.fill = color
			break;
		case 'перу' :
			document.getElementById('gPE').style.fill = color
			break;
		case 'польща' :
			document.getElementById('gPL').style.fill = color
			break;
		case 'португалія' :
			document.getElementById('gPT').style.fill = color
			break;
		case 'південно-Африканська республіка' :
			document.getElementById('gCF').style.fill = color
			break;
		case 'республіка конго' :
			document.getElementById('gCD').style.fill = color
			break;
		case 'республіка корея' :
			document.getElementById('gKP').style.fill = color
			break;
		case 'росія' :
			document.getElementById('gRU').style.fill = color
			break;
		case 'руанда' :
			document.getElementById('gRW').style.fill = color
			break;
		case 'румунія' :
			document.getElementById('gRO').style.fill = color
			break;
		case 'сальвадор' :
			document.getElementById('gSV').style.fill = color
			break;
		case 'саудівська Аравія' :
			document.getElementById('gSA').style.fill = color
			break;
		case 'свазіленд' :
			document.getElementById('gSZ').style.fill = color
			break;
		case 'свазіленд' :
			document.getElementById('gSZ').style.fill = color
			break;
		case 'сенегал' :
			document.getElementById('gSN').style.fill = color
			break;
		case 'сирія' :
			document.getElementById('gSY').style.fill = color
			break;
		case 'словаччина' :
			document.getElementById('gSK').style.fill = color
			break;
		case 'словенія' :
			document.getElementById('gSI').style.fill = color
			break;
		case 'соломонові острови' :
			document.getElementById('gSB').style.fill = color
			break;
		case 'сомалі' :
			document.getElementById('gSO').style.fill = color
			break;
		case 'судан' :
			document.getElementById('gSD').style.fill = color
			break;
		case 'суринам' :
			document.getElementById('gSR').style.fill = color
			break;
		case 'сша' :
			document.getElementById('gUS').style.fill = color
			break;
		case 'сьерра-леоне' :
			document.getElementById('gSL').style.fill = color
			break;
		case 'таджикистан' :
			document.getElementById('gTJ').style.fill = color
			break;
		case 'таїланд' :
			document.getElementById('gTH').style.fill = color
			break;
		case 'танзанія' :
			document.getElementById('gTZ').style.fill = color
			break;
		case 'того' :
			document.getElementById('gTG').style.fill = color
			break;
		case 'тринідад і тобаго' :
			document.getElementById('gTT').style.fill = color
			break;
		case 'туніс' :
			document.getElementById('gTN').style.fill = color
			break;
		case 'туркменістан' :
			document.getElementById('gTM').style.fill = color
			break;
		case 'туреччина' :
			document.getElementById('gTR').style.fill = color
			break;
		case 'уганда' :
			document.getElementById('gUG').style.fill = color
			break;
		case 'узбекистан' :
			document.getElementById('gUZ').style.fill = color
			break;
		case 'україна' :
			document.getElementById('gUA').style.fill = color
			break;
		case 'уругвай' :
			document.getElementById('gUY').style.fill = color
			break;
		case 'фіджі' :
			document.getElementById('gFJ').style.fill = color
			break;
		case 'філіппіни' :
			document.getElementById('gPH').style.fill = color
			break;
		case 'фінляндія' :
			document.getElementById('gFI').style.fill = color
			break;
		case 'франція' :
			document.getElementById('gFR').style.fill = color
			break;
		case 'хорватія' :
			document.getElementById('gHR').style.fill = color
			break;
		case 'центральноафриканська республіка' :
			document.getElementById('gCF').style.fill = color
			break;
		case 'чад' :
			document.getElementById('gTD').style.fill = color
			break;
		case 'чорногорія' :
			document.getElementById('gME').style.fill = color
			break;
}}
let time = 25;
let score = 0;
let max_score = 0;
let hearts = 3;

document.getElementById('timer_inp').innerText = time;
document.getElementById('score').innerText = score;

function timer(){
	let obj = document.getElementById('timer_inp');
	if(obj.innerHTML > 6){
		obj.innerHTML--;
		obj.style.color = "white";
	}
	else{
		obj.style.color = "red";
		obj.style.marginTop = "10%";
		obj.style.marginLeft = "40%";
		obj.style.fontSize = "300px";
		obj.innerHTML--;
	}

	if(obj.innerHTML == 0){
		setTimeout(function(){},1000);
		savAndMoveTo(max_score, "game_over.html");
	}
	else
		setTimeout(timer,1000);
}

function enter(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    add(city);
  }
}

setTimeout(timer,1000);

let oldSlovo = '';
let latters = ['а','б','в','г','д','е','з','і','й','к','л','м','н','о','п','р','с','т','у','ф','х','ц','ч','ш','є','я'];
let lt = -1;
let word;
let oldWord;
let lsl = 1;
let ldexist = 0;

function add(global_city)
{
	
	let q = 0;
	let t = 1;
	let c = 0;
	let nomer = 0;
	let proverka1 = 0;
	let samaya_vazhnaya_peremennaya = 1;
	let temp_t = 0;
	let temp_q = 0;
	let temp_chto_to;
	word = document.getElementById('inp').value;
	word = word.toLowerCase();
	let firstLetter = word.charAt(0);
	console.log('add(global_city), word = ' + word);
	if(word == ''){
		return false;
	}
	
	while (proverka1 < t)
	{
		for(let chto_to of global_city[proverka1])
		{
		    if (word == chto_to)
		    {
		    	global_city[t-1].splice(q, 1);
		    	samaya_vazhnaya_peremennaya = 0;
		    	break;
		    }
		    q = q + 1;
		}  
		proverka1 = proverka1 + 1;
		q = 0;
		if (t == 26)
	  		break;
		t = t + 1;
	}
	console.log('loop finished');
	console.log('samaya_vazhnaya_peremennaya = ' + samaya_vazhnaya_peremennaya);
	if (samaya_vazhnaya_peremennaya == 1){
		document.getElementById('inp').value = "";
		document.getElementById('out').innerHTML ="Помилка, введіть ще раз";
		hearts = hearts - 1;
		document.getElementById('score').innerHTML = score;
		if(hearts == 2){
			document.getElementById('pic3').remove();
		}
		if(hearts == 1){
			document.getElementById('pic2').remove();
		}
		if(hearts == 0){
			document.getElementById('pic1').remove();
		}
		if(hearts < 1){
			savAndMoveTo(max_score, "game_over.html");
		}
		return false;
	}
	
	if (samaya_vazhnaya_peremennaya == 0)
	{
		c = word.charAt(word.length + lt);
		console.log('с = ' + c);
		document.getElementById('timer_inp').innerHTML = time;
		score = score + 100;
		document.getElementById('score').innerHTML = score;
		if(max_score < score)
		{
			max_score = score;
		}
	}
	let slovo = 0;
	for (let r of latters){
		if (c == r){
			let chislo = Math.floor(Math.random() * global_city[nomer].length);
			slovo = global_city[nomer][chislo];
			
			if(slovo != undefined){
				global_city[nomer].splice(chislo, 1);
				fill(slovo, '#5869db');
				document.getElementById('out').innerText = slovo.charAt(0).toUpperCase() + slovo.slice(1);
				document.getElementById('inp').value = "";
				samaya_vazhnaya_peremennaya = 0;
				break;
			}
			else{
				savAndMoveTo(max_score, "over.html");
			}
		}
		nomer = nomer + 1;
	}
	document.getElementById('inp').focus();
	return false;
}