var bgimg;
var shooterimg1;
var shootingimg; 
var bg;
var shooter;

function preload(){
bgimg = loadImage("assets/bg.jpeg");
shooterimg1 = loadImage("assets/shooter_2.png");
shootingimg = loadImage("assets/shooter_3.png");
}

function setup(){
createCanvas(windowWidth,windowHeight);

bg = createSprite(displayWidth/2-20,displayHeight/2-40,50,50);
bg.addImage(bgimg)
bg.scale = 1.1;


shooter = createSprite(displayWidth-1150,displayHeight-300,50,50);
shooter.addImage(shooterimg1)
shooter.scale = 0.3;

shooter.debug = true;
shooter.setCollider("rectangle",0,0,300,350);
}

function draw(){
background("white");
 
if(keyDown("UP_ARROW"))
{
    shooter.y=shooter.y-10;
}

if(keyDown("DOWN_ARROW")){
    shooter.y=shooter.y+10;
}
if(keyWentDown("space")){
    shooter.addImage(shootingimg);
}else
if(keyWentUp("space")){
shooter.addImage(shooterimg1);
};

drawSprites();
}

