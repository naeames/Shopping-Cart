//---------------------Remove-------------------------  
var x = document.getElementsByClassName("remove");
for (var i = 0; i < x.length; i++) {
    x[i].addEventListener('click', close);
} 
function close() {
  this.parentNode.remove(); 
  
   var pr = document.getElementsByClassName("price");
	var TP=0;
	for (var i = 1; i < pr.length; i++) {
		TP+=(parseInt((pr.item(i).innerHTML).substr(1)));  
	} 
	 
	document.getElementById("TotalPrice").innerHTML="$"+TP;
}


//--------------------------------------------------
//---------------------like-------------------------  
var x = document.getElementsByClassName("fa fa-heart");
for (var i = 0; i < x.length; i++) {
    x[i].addEventListener('click', like);
} 
function like() {
if(this.style.color=="red"){
  this.style.color="grey"; 
  }else{
  this.style.color="red"; 
  }
}
//--------------------------------------------------
//---------------------add-------------------------  
var x = document.getElementsByClassName("add");
for (var i = 0; i < x.length; i++) {
    x[i].addEventListener('click', add);
} 
function add() {
  this.previousElementSibling.innerHTML=parseInt(this.previousElementSibling.innerHTML)+1;
  var itemValue=parseInt(this.nextElementSibling.getAttribute("value"));
  var currentPrice=parseInt((this.nextElementSibling.innerHTML).substr(1));
  this.nextElementSibling.innerHTML="$"+(currentPrice+itemValue);
  
  
  
	var pr = document.getElementsByClassName("price");
	var TP=0;
	for (var i = 1; i < pr.length; i++) {
		TP+=(parseInt((pr.item(i).innerHTML).substr(1)));  
	} 
	 
	 document.getElementById("TotalPrice").innerHTML="$"+TP;
 }
//--------------------------------------------------
//---------------------min-------------------------  
var x = document.getElementsByClassName("min");
for (var i = 0; i < x.length; i++) {
    x[i].addEventListener('click', min);
} 

function min() {

	if(parseInt(this.nextElementSibling.innerHTML)>0){
	  this.nextElementSibling.innerHTML=parseInt(this.nextElementSibling.innerHTML)-1;
	}
  
  var itemValue=parseInt(this.nextElementSibling.nextElementSibling.nextElementSibling.getAttribute("value"));
  var currentPrice=parseInt((this.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML).substr(1));
  
  if(parseInt(currentPrice - itemValue) >= 0){
  this.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML="$"+ parseInt(currentPrice - itemValue);
  }
   
  
	var pr = document.getElementsByClassName("price");
	var TP=0;
	for (var i = 1; i < pr.length; i++) {
		TP+=(parseInt((pr.item(i).innerHTML).substr(1)));  
	} 
	 
	 document.getElementById("TotalPrice").innerHTML="$"+TP;
   
}
