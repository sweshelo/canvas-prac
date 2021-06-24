class DrawObj{
    constructor(id){
        this.id = id;
        this.img = new Image();
        this.img.src = "cards/10001.jpg";
    }
}


(()=>{
    const cardW = 640;
    const cardH = 901;

    const canvas = document.getElementById("app");
    const ctx = canvas.getContext("2d");

    var w = $('#canvas-container').width();
    var h = w/16*9;
    $('#app').attr('width', w);
    $('#app').attr('height', h);

    C = new DrawObj(0);
    C.img.onload = ()=>{
        ctx.drawImage(C.img, 100, h-cardH/5-10, cardW/5, cardH/5);
        console.log("drew");
    }

    console.log(C);
})();
