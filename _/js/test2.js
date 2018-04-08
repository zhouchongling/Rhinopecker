console.log("aaa")
var canvas = document.getElementById("easel"),
	stage = new createjs.Stage(canvas);
	
 var shadow1 = new createjs.Bitmap("images/1.1.png");
	var shadow2 = new createjs.Bitmap("images/1.2.png");

    stage.addChild(shadow1);
    stage.addChild(shadow2);
    
	stage.update();
    createjs.Ticker.setFPS(30);
	createjs.Ticker.addEventListener("tick",function() {
		stage.update();
	})
			
createjs.Tween.get(shadow1).wait(5000).to({alpha:0},1000);

window.setTimeOut(function(){
window.location.herf="inex2.html"
},7000)