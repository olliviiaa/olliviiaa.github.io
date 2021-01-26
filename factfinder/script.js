var a = document.querySelector('#facts');

a.f1.addEventListener("click",fact1);
a.f2.addEventListener("click",fact2);
a.f3.addEventListener("click",fact3);
a.f4.addEventListener("click",fact4);
a.f5.addEventListener("click",fact5);

function fact1(){
	document.querySelector("#fact").innerHTML = "Hershey\'s Kisses are named that after the kissing sound the deposited chocolate makes as it falls from the machine on the conveyor belt.";
}

function fact2(){
	document.querySelector("#fact").innerHTML = "The moon has moonquakes.<br><img src='images/moon.jpeg' alt='moon'>";
	
}

function fact3(){
	document.querySelector("#fact").innerHTML = "The feeling of getting lost inside a mall is known as the Gruen transfer.";
}

function fact4(){
	document.querySelector("#fact").innerHTML = "McDonald\'s once made bubblegum-flavored broccoli.<br><img src='images/broccoli.jpeg' alt='broccoli'>";
}

function fact5(){
	document.querySelector("#fact").innerHTML = "Your nostrils work one at a time.";
}

