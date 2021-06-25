(()=>{
    const ww = $("#canvas-container").width();
    const wh = ww/16*9;

    $("#app").attr("width",ww);
    $("#app").attr("height",wh);

    console.log(ww, wh);

    var stage = new createjs.Stage("app");

    function cardClick(obj){
        console.log("show effect window");
    }

    function cardMove(obj){
        obj.x = stage.mouseX;
        obj.y = stage.mouseY;
    }

    function cardRelease(obj){
        obj.x = 0;
        obj.y = 0;
    }

    var img = new createjs.Bitmap("./cards/10001.jpg");
    img.scaleX = 0.2;
    img.scaleY = 0.2;
    img.addEventListener("mousedown", ()=>{cardClick(img)});
    img.addEventListener("pressmove", ()=>{cardMove(img)});
    img.addEventListener("pressup", ()=>{cardRelease(img)});
    stage.addChild(img);

    const handleTick = ()=>{
        stage.update();
        console.log(stage.mouseX, stage.mouseY);
    }

    createjs.Ticker.framerate = 60;
    createjs.Ticker.addEventListener("tick", handleTick);

})();

function loadImage(path){
    const img = new createjs.Bitmap(path);
}


