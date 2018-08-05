var cvs = document.getElementById('cvs');
var ctx = cvs.getContext('2d');

var width = cvs.width;
var height = cvs.height;

var frameRate = 30;
var p;

setup();
setInterval(draw,500);

function setup()
{
    p = new paddle(10,10);
}

function draw()
{
    ctx.fillStyle = "black";
    ctx.fillRect(0,0,width,height);
    p.draw();
}

