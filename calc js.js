// JavaScript Document
var clear = document.querySelector('.ac'),
	equal = document.querySelector('.eq'),
	nums = document.querySelector('.nums'),
	txtField = document.querySelector('.text-field'),
	tri = document.querySelector('.tri-fun'),
	oper = document.querySelector('.oper'),
	reslut = "",
	finRes,
	finalReslut = document.querySelector('.input-space .result'),
	regexp ,//= new RegExp(),
	triRes = 0,x11 = 0;




//entering numbers function
function numFun(evt){
	if(evt.target.className != "ac"){
	txtField.innerText += evt.target.innerText;
}
}






//tri function
function triFun (evt){
	switch(evt.target.innerText){
		case "sin":
			triRes = Math.sin(parseFloat(txtField.innerText));
			break;
		case "cos":
			triRes =
			Math.cos(parseFloat(txtField.innerText));
			break;
		case "tan":
			triRes =
			Math.tan(parseFloat(txtField.innerText));
			break;
	}
	txtField.innerText = evt.target.innerText + "(" + txtField.innerText + ")" ;
	regexp = txtField.innerText;
}





// operatores function
function operFun (evt){
	if(evt.target.className != "eq"){
		if(txtField.innerText.includes(regexp)){
			//case 2
			x11 += parseFloat(triRes) + evt.target.innerText;
			
		}
		else{
			//case 1
			x11 += parseFloat(txtField.innerText) + evt.target.innerText;
		}
		finalReslut.innerText += txtField.innerText + evt.target.innerText;
		txtField.innerText = "";
		finRes = eval(x11 .slice(0,-1));
	}
	else{
		if(txtField.innerHTML == ""){
			finalReslut.innerHTML = eval(finRes);
		}
		else{
			if(txtField.innerText.includes(regexp)){
				x11 += parseFloat(triRes) ;
			}
			else{
				x11 += parseFloat(txtField.innerText);
			}
			finRes = eval(x11);
			finalReslut.innerHTML = finRes;
			txtField.innerText = "";

		}
	}
}

// disable buttons function يلا يا داله فاشله ملكيش لزمه 
/*function disable(bool,clas){
	for(var i =0;i<clas.chlidren.length;i++){
		clas.chlidren[i].disabled = bool;
	}
	clear.disabled = false;
	equal.disabled = false;
}*/


//clear function
function clr(){
	finalReslut.innerHTML = "";
	x11 = 0;
	txtField.innerHTML = "";
	finRes = 0;
}
//listen for clear function
clear.addEventListener('click', function(){
	clr();

},false);




//listen for tri-function
tri.addEventListener('click',function(evt){
	triFun(evt);
},false);



//listen for numbers function
nums.addEventListener('click',function(evt){
	numFun(evt);
},false);


// listen for operators function
oper.addEventListener('click',function(evt){
	if(finalReslut.innerText.slice(-1) == "+" ||finalReslut.innerText.slice(-1) == "-" || finalReslut.innerText.slice(-1) == "*" || finalReslut.innerText.slice(-1) == "/" ){
		if(evt.target.innerText != "="){
		finalReslut.innerText = finalReslut.innerText .slice(0,-1) + evt.target.innerText;
		}
		else{
			operFun(evt);
		}
	}
  else{
	operFun(evt);
    }
},false);








