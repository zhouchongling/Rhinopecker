console.log("aaa")
var canvas = document.getElementById("easel"),
	stage = new createjs.Stage(canvas),
	count=0;
	i=0;
	
var currentId=0;
	
 window.addEventListener("deviceorientation", function(event) {
      // 处理event.alpha、event.beta及event.gamma
  }, true);
    
	var shadow1 = new createjs.Bitmap("images/2.1.jpeg");
	var shadow2 = new createjs.Bitmap("images/2.2.jpg");
	var shadow3 = new createjs.Bitmap("images/2.3.jpg");
	
	stage.addChild(shadow1);	
	
	createjs.Ticker.setFPS(30);
	
	createjs.Ticker.addEventListener("tick", handleTick);
 function handleTick(event) {
    
    stage.update();
    
     if (window.DeviceMotionEvent) { 
                 window.addEventListener('devicemotion',deviceMotionHandler, false);  
        } 
        var speed = 2;//speed
        var x = y = z = lastX = lastY = lastZ = 0;
        function deviceMotionHandler(eventData) {  
          var acceleration =eventData.accelerationIncludingGravity;
                x = acceleration.x;
                y = acceleration.y;
                z = acceleration.z;
//                if(Math.abs(x-lastX) > speed || Math.abs(y-lastY) > speed || Math.abs(z-lastZ) > speed) {
                if(Math.abs(y-lastY) > speed) {
                    //简单的摇一摇触发代码
                    switch(currentId){                    
                    case 0:
                     if(count>45){
                     stage.addChild(shadow2);
                     currentId++;
                     i=count;
                     }               
                    break;                    
                     case 1:
                     if(count>i+45){
                     stage.addChild(shadow3);
                     }
                    break;                           
                    }
                count++;    
                }
                lastX = x;
                lastY = y;
                lastZ = z;
        }
 }


