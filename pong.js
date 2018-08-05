var cvs = document.getElementById('cvs');
var ctx = cvs.getContext('2d');

var width = cvs.width;
var height = cvs.height;

var frameRate = 60;
var paddleSpeed = 20;

var p1 = new paddle(10, 10);
var p2 = new paddle(width-20,10);
var b1 = new ball(width/2,height/2);

setup();
setInterval(draw,1000/frameRate);


function setup(){
 window.addEventListener("keydown",function(event){ move(event.key) })

}

function draw()
{
    ctx.fillStyle = "black";
    ctx.fillRect(0,0,width,height);
    dottedline(6,4,width/2,0);

    
    p1.update();
    p2.update();
    b1.update();

    p1.draw();
    p2.draw();
    b1.draw();

    showscore();
}


function move(key)
{
    switch(key)
    {
        case "w":
            p1.y -= paddleSpeed;
            break;
        case "s":
            p1.y += paddleSpeed;
            break;
        case "ArrowUp":
            p2.y -= paddleSpeed;
            break;
        case "ArrowDown":
            p2.y += paddleSpeed;
            break;
    }
}


function showscore()
{
    ctx.fillStyle = "white";
    ctx.font = "40px sans-serif";
    ctx.fillText( b1.score.p1score, width/4, 40);
    ctx.fillText( b1.score.p2score, width - (width/3), 40);
}

function dottedline(dl,gl,x,y)
{
    ctx.strokeStyle = "white";

    var cy = y;
    ctx.beginPath();
    while (cy < height)
    {
        ctx.moveTo(x,cy);
        cy += dl;
        ctx.lineTo(x,cy);
        cy += gl;
        ctx.moveTo(x,cy);
    }
    ctx.stroke();
}