(()=>{
    const ww = $("#canvas-container").width();
    const wh = ww/16*9;

    $("#app").attr("width",ww);
    $("#app").attr("height",wh);

    console.log(ww, wh);

    var canvas = new createjs.Stage("app");
    var img = new createjs.Bitmap("./cards/10001.jpg");
    img.onload = ()=>{canvas.update()};
    canvas.addChild(img);

})();

function loadImage(path){
    const img = new createjs.Bitmap(path);
}
