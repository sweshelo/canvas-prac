class Card{
    constructor(path, stage){
        this.img = new createjs.Bitmap(path);
        this.img.scaleX = 0.125;
        this.img.scaleY = 0.125;
        this.img.addEventListener("mousedown", ()=>{this.cardClick()});
        this.stage = stage;
        this.stage.addChild(this.img);
        console.log('born.')
    }

    cardClick(){
        console.log("show effect window");
    }
}

class Hand{

    constructor(cardObj){
        this.card = cardObj;
        cardObj.img.addEventListener("pressmove", ()=>{this.handMove(cardObj)});
        cardObj.img.addEventListener("pressup", ()=>{this.handRelease(cardObj)});
        this.handAlign(cardObj);
    }

    handMove(c){
        c.stage.setChildIndex(c.img, 1);
        c.img.x = c.stage.mouseX;
        c.img.y = c.stage.mouseY;
    }

    handRelease(c){
        this.handAlign(c);
    }

    handAlign(c){
        let px = 0;
        c.img.x = 200+ px * 86;
        c.img.y = 600;
    }

}
