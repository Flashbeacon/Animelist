(function(){
var theVid = document.getElementById("player");
[].forEach.call(document.getElementsByClassName('btn'), function(btn) {
btn.addEventListener('click', function(e) {

switch (e.target.id){
case "btn1":
theVid.src = "videos/1.mp4";
break;
case "btn2":
theVid.src = "videos/2.mp4";	
break;
case "btn3":
theVid.src = "videos/3.mp4";
default:
console.log(e.target.id);
}
})
})
}())