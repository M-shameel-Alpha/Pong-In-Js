function paddle(x,y)
{
    this.x = x;
    this.y = y;
    this.width = 20;
    this.height = 60;
}

paddle.prototype.draw = function()
{
    ctx.fillStyle = "white";
    ctx.fillRect(this.x,this.y,this.width,this.height);
}



function ball(x,y)
{
    this.x = x;
    this.y = y;
    this.r = 10;

    this.history = [0]*10;
}

ball.prototype.draw()
{
    var histLen = this.history.length;
    for(var i=1;i>0;i-=0.1)
    {
        ctx.fillStyle = "rgba(255,255,255,"+ i +")";
        ctx.arc( this.history[histLen-1].x, this.history[histLen-1].y, i*10, 0, Math.PI * 2, true);
    }
}