$(document).ready(function(){
	$(".click1").click(function(){
	    $(".slide1").slideToggle("100");
	    $(".click1").toggleClass("change");
	    $(".slide2").slideUp("100");
	    $(".slide3").slideUp("100");
	  });

	$(".click2").click(function(){
	    $(".slide2").slideToggle("100");
	    $(".click2").toggleClass("change");
	    $(".slide3").slideUp("100");
	    $(".slide1").slideUp("100");
	  });

	$(".click3").click(function(){
	    $(".slide3").slideToggle("100");
	    $(".click3").toggleClass("change");
	    $(".slide1").slideUp("100");
	    $(".slide2").slideUp("100");
	  });
});
function musicchange(n) {
	for (var i=1;i<=3;i++) {
		document.getElementById("music-table" + i).style.display = "none";
	}
	document.getElementById("music-table" + n).style.display = "block";
	for (var i=1;i<=3;i++) {
		document.getElementById("video-table" + i).style.display = "none";
	}
	for (var i=1;i<=3;i++) {
		document.getElementById("picture-table" + i).style.display = "none";
	}

}
function videochange(n) {
	for (var i=1;i<=3;i++) {
		document.getElementById("video-table" + i).style.display = "none";
	}
	document.getElementById("video-table" + n).style.display = "block";
	document.getElementById("video-table" + n).style.border = "1px sliod #f00;"
	for (var i=1;i<=3;i++) {
		document.getElementById("music-table" + i).style.display = "none";
	}
	for (var i=1;i<=3;i++) {
		document.getElementById("picture-table" + i).style.display = "none";
	}
}
function picchange(n) {
	for (var i=1;i<=3;i++) {
		document.getElementById("picture-table" + i).style.display = "none";
	}
	document.getElementById("picture-table" + n).style.display = "block";
	for (var i=1;i<=3;i++) {
		document.getElementById("music-table" + i).style.display = "none";
	}
	for (var i=1;i<=3;i++) {
		document.getElementById("video-table" + i).style.display = "none";
	}
}
var mu = 0;
function play() {

	if(mu = 0) {
		document.getElementById('music1').play();
		mu = -1;
	}document.getElementById('music1').pause();
	mu = 0;
}
var n = 1;
function play2(a){
	var audio = document.getElementById('audio' + a);
	var td = document.getElementById('fa_play' + a);
	console.log(n);
	if(n==1) {
		for(m = 1; m<=5; m++) {
			 document.getElementById('audio' + m).pause();
			 document.getElementById('fa_play' + m).innerHTML = "<i class='fa fa-play' aria-hidden='true'></i>";;
		}
		audio.play();
		n = 0;
		td.innerHTML = "<i class='fa fa-pause' aria-hidden='true'></i>";
		
	}
		else {audio.pause();
			n = 1;
		td.innerHTML = "<i class='fa fa-play' aria-hidden='true'></i>";
		}
	console.log(n);
}
