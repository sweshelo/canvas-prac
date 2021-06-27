(()=>{

    var stage = new createjs.Stage("app");
    var hand = new Array();

    hand.push(new Hand(new Card("./cards/10001.jpg", stage)));
    hand.push(new Hand(new Card("./cards/10001.jpg", stage)));
    hand.push(new Hand(new Card("./cards/10001.jpg", stage)));
    hand.push(new Hand(new Card("./cards/10001.jpg", stage)));


    const handleTick = ()=>{
        ww = $("#canvas-container").width();
        wh = ww/16*8;

        $("#app").attr("width",ww);
        $("#app").attr("height",wh);

        stage.update();
        console.log(stage.mouseX, stage.mouseY);
    }

    createjs.Ticker.framerate = 60;
    createjs.Ticker.addEventListener("tick", handleTick);

})();
