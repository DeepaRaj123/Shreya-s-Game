var bg,bgImg,bg1Img,bg1;
var logo,logoImg,playbutton,playbuttonImg,infobutton,infobuttonImg;
var leave1,leave2,leave3,leave4,leave5,leave6,leave1Img,leave2Img,leave3Img,leave4Img,leave5Img,leave6Img;
var brokenbulb1,brokenbulb1Img,brokenbulb2,brokenbulb2Img;
var dirty1,dirty2,dirty3,dirty4,dirty5,dirty6,dirty7,dirty1Img,dirty2Img,dirty3Img,dirty4Ing,dirty5Img,dirty6Img,dirty7Img;
var gameState = "start";

function preload(){
  bgImg = loadImage('bg3.jpg')
  bg1Img = loadImage('bg8.jpg')
  logoImg = loadImage('logo1.png')
  playbuttonImg = loadImage('playbutton1.png')
  infobuttonImg = loadImage('infobutton.png')
  leave1Img = loadImage('leave1.png');
  leave2Img = loadImage('leave2.png');
  leave3Img = loadImage('leave3.png');
  leave4Img = loadImage('leave4.png');
  leave5Img = loadImage('leave5.png');
  leave6Img = loadImage('leave6.png');
  brokenbulb1Img = loadImage('brokenbulb1.png');
  brokenbulb2Img = loadImage('brokenbulb2.png');
  dirty1Img = loadImage('dirty1.png');
  dirty2Img = loadImage('dirty2.png');
  dirty3Img = loadImage('dirty3.png');
  dirty4Img = loadImage('dirty4.png');
  dirty5Img = loadImage('dirty5.png');
  dirty6Img = loadImage('dirty6.png');
  dirty7Img = loadImage('dirty7.png');


}

function setup(){
  createCanvas(windowWidth, windowHeight);

  logo = createSprite(windowWidth/2,windowHeight/2-200);
  logo.addImage(logoImg);
  logo.scale = 1.5;
  logo.visible = false;

  playbutton = createSprite(windowWidth/2,windowHeight/2+150);
  playbutton.addImage(playbuttonImg);
  playbutton.scale = 0.4;
  playbutton.visible = false;

  infobutton = createSprite(width-50,windowHeight/2+300);
  infobutton.addImage(infobuttonImg);
  infobutton.scale = 0.05;
  infobutton.visible = false;

  leave1=createSprite(150,height-150);
  leave1.addImage(leave1Img);
  leave1.scale = 0.25;

  leave2=createSprite(300,height-60);
  leave2.addImage(leave2Img);
  leave2.scale = 0.25;

  leave3=createSprite(width/2-150,height-150);
  leave3.addImage(leave3Img);
  leave3.scale = 0.25;

  leave4=createSprite(width-100,height-60);
  leave4.addImage(leave4Img);
  leave4.scale = 0.25;

  leave5=createSprite(width/2+150,height-100);
  leave5.addImage(leave5Img);
  leave5.scale = 0.25;

  leave6=createSprite(width-300,height-120);
  leave6.addImage(leave6Img);
  leave6.scale = 0.25;

  brokenbulb1=createSprite(350,height/2-100);
  brokenbulb1.addImage(brokenbulb1Img);
  brokenbulb1.scale = 0.25;

  brokenbulb2=createSprite(width-525,height/2-130);
  brokenbulb2.addImage(brokenbulb2Img);
  brokenbulb2.scale = 0.3;

  dirty1=createSprite(width/2-50,height/2+100);
  dirty1.addImage(dirty1Img);
  dirty1.scale = 0.15;

  dirty2=createSprite(width/2-250,height/2+60);
  dirty2.addImage(dirty2Img);
  dirty2.scale = 0.15;

  dirty3=createSprite(width/2+70,height/2+70);
  dirty3.addImage(dirty3Img);
  dirty3.scale = 0.15;

  dirty4=createSprite(width/2+300,height/2+100);
  dirty4.addImage(dirty4Img);
  dirty4.scale = 0.15;

  dirty5=createSprite(width/2+170,height/2+100);
  dirty5.addImage(dirty5Img);
  dirty5.scale = 0.1;


  leave1.visible = false;
  leave2.visible = false;
  leave3.visible = false;
  leave4.visible = false;
  leave5.visible = false;
  leave6.visible = false;
  dirty1.visible = false;
  dirty2.visible = false;
  dirty3.visible = false;
  dirty4.visible = false;
  dirty5.visible = false;
  brokenbulb1.visible = false;
  brokenbulb2.visible = false;




}

function draw() {
  if(gameState==="start")
  {
    background(bgImg);
    logo.visible = true;
    playbutton.visible = true;
    infobutton.visible = true;

    if(mousePressedOver(playbutton))
    {
      gameState = "park";
    }

  }

  else if(gameState==="park")
  {
    background(bg1Img);
    logo.visible = false;
    playbutton.visible = false;
    infobutton.visible = false;
    leave1.visible = true;
  leave2.visible = true;
  leave3.visible = true;
  leave4.visible = true;
  leave5.visible = true;
  leave6.visible = true;
  dirty1.visible = true;
  dirty2.visible = true;
  dirty3.visible = true;
  dirty4.visible = true;
  dirty5.visible = true;
  brokenbulb1.visible = true;
  brokenbulb2.visible = true;
  }
 

drawSprites();
}

