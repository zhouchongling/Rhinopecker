console.log("aaa")
var canvas = document.getElementById("easel"),
	stage = new createjs.Stage(canvas);
	
var shadow1 = new createjs.Bitmap("images/3.1.jpg");
var container=new createjs.Container();
    container.addChild(shadow1);
    stage.addChild(container);

var oldX;
    
    //  container.addEventListener("click", function(e){
//     alert("bbb")
//  });
 
 container.addEventListener("mousedown",function(e){
            oldX= e.stageX;
        });

        container.addEventListener("pressmove", function (e) {
    
            e.target.x= Math.min( e.target.x+e.stageX-oldX,0);
            e.target.x= Math.max( e.target.x+e.stageX-oldX,-1284);
            oldX= e.stageX;
			console.log( e.target.x)
        });
    
    createjs.Ticker.setFPS(30);
	createjs.Ticker.addEventListener("tick",function() {
		stage.update();
	})
