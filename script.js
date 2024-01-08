//your JS code here. If required.
let counter=document.getElementById("counter");
let btn=document.getElementById("incremmentBtn");
let count=1;
function increment(){
	
	counter.innerText= count++;
	alert(count);
	
}
