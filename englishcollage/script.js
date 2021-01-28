var f = document.querySelector("form");
f.addEventListener("click",change);

function change(){
	f.innerHTML = '<img src="https://cdn.pixabay.com/photo/2020/11/16/05/51/girl-5748031_1280.jpg" >';
	f.style.backgroundColor = "#4281a4";
	document.querySelector("body").style.backgroundColor = "#cdedf6";
	document.querySelector("#h").innerHTML = "...until you climb into his skin and walk around in it\"";
}