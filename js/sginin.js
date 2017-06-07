function hua() {
  var canvas = document.getElementById('smile');
  if (canvas.getContext) {
    var smile = canvas.getContext('2d');
    smile.beginPath();
    smile.arc(75,75,50,0,Math.PI*2,true);//轮廓
    smile.moveTo(65,60);				 //左眼
    smile.arc(55,60,10,0,Math.PI*2,true);
    smile.moveTo(62,60);				 //左眼珠子
    smile.arc(57,60,5,0,Math.PI*2,true);
    smile.moveTo(97,60);				 //右眼
    smile.arc(93,60,5,0,Math.PI*2,true);
    smile.moveTo(105,60);				 //右眼珠子
    smile.arc(95,60,10,0,Math.PI*2,true);
    smile.moveTo(110,75);				//嘴
    smile.arc(75,75,35,0,Math.PI,false);
    smile.strokeStyle = "#b3c8d0"
    smile.stroke();
  }
}//你猜不透一张笑脸后面是什么
