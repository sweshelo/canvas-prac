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

    class Card{
        constructor(path){
            this.img = new createjs.Bitmap(path);
            this.img.scaleX = 0.2;
            this.img.scaleY = 0.2;
            this.img.addEventListener("mousedown", ()=>{cardClick(this.img)});
            this.img.addEventListener("pressmove", ()=>{cardMove(this.img)});
            this.img.addEventListener("pressup", ()=>{cardRelease(this.img)});
            stage.addChild(this.img);
            console.log('born.')
        }
    }

    var c1 = new Card("./cards/10001.jpg");
    var c2 = new Card("./cards/10002.jpg");
    var c3 = new Card("./cards/10003.jpg");

    const handleTick = ()=>{
        stage.update();
        console.log(stage.mouseX, stage.mouseY);
    }

    createjs.Ticker.framerate = 60;
    createjs.Ticker.addEventListener("tick", handleTick);

})();
