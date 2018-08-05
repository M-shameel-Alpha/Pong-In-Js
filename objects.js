

function paddle(x,y)
{
    this.x = x;
    this.y = y;
    this.width = 15;
    this.height = 75;
};

paddle.prototype.draw = function()
{
    ctx.fillStyle = "white";
    ctx.fillRect(this.x,this.y,this.width,this.height);
};

paddle.prototype.update = function()
{
    if(this.y + this.height  > height)
    {
        this.y = height - this.height;
    }else if(this.y < 0)
    {
        this.y = 0;
    }
}



function ball(x,y)
{
    this.x = x;
    this.y = y;
    this.r = 10;
    this.maxspeed = 5;
    this.speedx = 0;
    this.speedy = 0;
    this.score = {p1score:0, p2score:0};
};

ball.prototype.draw = function()
{
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(this.x,this.y,this.r,0,Math.PI*2,true);
    ctx.fill();
};

ball.prototype.update = function()
{
    if(this.speedx == 0 && this.speedy == 0)
    {
        this.speedx = (Math.random() > 0.5 ? this.maxspeed : -this.maxspeed);
        this.speedy = (Math.random() > 0.5 ? this.maxspeed : -this.maxspeed);
    }

    this.checkHits(p1,p2);

    this.x += this.speedx;
    this.y += this.speedy;

};


ball.prototype.checkHits = function(a1,a2)
{
    var b1 = {
              x:this.x,
              y:this.y,
              r:this.r
    };
    
    if( (b1.x - b1.r  < a1.x + a1.width && b1.x + b1.r > a1.x && b1.y - b1.r < a1.y + a1.height && b1.y + b1.r > a1.y) || (b1.x - b1.r  < a2.x + a2.width && b1.x + b1.r > a2.x && b1.y - b1.r < a2.y + a2.height && b1.y + b1.r > a2.y))
    {
        this.speedx = -this.speedx;

    };

    if(this.y + this.r > height)
    {
        this.speedy = -this.speedy;

    }else if (this.y - this.r < 0)
    {
        this.speedy = -this.speedy;
    }

    if(this.x > width)
    {
        this.score.p1score += 1;
        this.reset();
    }else if (this.x < 0)
    {
        this.score.p2score += 1;
        this.reset();
    }
}


ball.prototype.reset = function()
{
    this.x = width/2;
    this.y = height/2;
    this.speedx = 0;
    this.speedy = 0;
}

