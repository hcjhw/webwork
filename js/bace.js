window.onload = function draw(){
	function rainPool(){
		
		var rainPool = document.getElementById('rainPool').getContext('2d');
		
		var image = new Image();
		image.src = 'css/image/rainPool.gif';
		console.log(image.src);
		image.onload = function draw(){
			rainPool.drawImage(image,0,0);
			rainPool.clearRect(0,0,400,400);
			rainPool.scale(0.4,0.4);
			rainPool.drawImage(image,0,0);	
		}
		rainPool.beginPath();
		rainPool.arc(20,20,20,-Math.PI/2,-Math.PI,true);
		rainPool.lineTo(0,80);
		rainPool.arc(20,80,20,-Math.PI,-Math.PI*1.5,true);
		rainPool.lineTo(180,100);
		rainPool.arc(180,80,20,-Math.PI*1.5,0,true);
		rainPool.lineTo(200,20);
		rainPool.arc(180,20,20,0,-Math.PI/2,true);
		rainPool.lineTo(20,0);
		rainPool.clip();
	}
	 function rainPoolFont(){
		var rainPoolFont = document.getElementById('rainPoolFont').getContext('2d');
		rainPoolFont.strokeStyle = "#05410b";
		rainPoolFont.font = "50px serif";
		rainPoolFont.strokeText("雨塘",40,60);
		rainPoolFont.textAlign = "center";
	}
	rainPool();
	rainPoolFont();
}
function bigger(a) {
	var box = document.getElementById('box' + a);
	console.log(box + a);	
	box.setAttribute("class","boxbig");
}
function smaller(a) {
	var box = document.getElementById('box' + a);
	console.log(box + a);	
	box.setAttribute("class","box");
}