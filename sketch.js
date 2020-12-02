var towerImg,tower;
var ghostImg,ghost;
var doorImg,door,doorsGroup;
var climberImg,climber,climbersGroup;
var gameState=1;
var spookySound;
var invBlock,invBlocksGroup;



function preload(){
  towerImg=loadImage("tower.png");
  ghostImg=loadImage("ghost-standing.png");
  doorImg=loadImage("door.png");
  climberImg=loadImage("climber.png");
  spookySound=loadSound("spooky.wav");
  
}

function setup(){
  createCanvas(600,600);
  background(0);
  tower=createSprite(300,300,2,3);
  tower.addImage(towerImg);
  
  ghost=createSprite(300,200,20,20);
  ghost.addImage(ghostImg);
  ghost.scale=0.3;
  
  doorsGroup = new Group();
  climbersGroup = new Group();  
  invBlocksGroup = new Group();  
}

function draw(){
  background(0);
  if(gameState===1){
    tower.velocityY=1; 
    if(tower.y>600){
      tower.y=300;
    }
    ghost.velocityY=ghost.velocityY + 0.5;
    if(keyDown("space")){
      ghost.velocityY=-10; 
    }
    if(keyDown("left_arrow")){
      ghost.x=ghost.x-10;
    
    }
     if(keyDown("right_arrow")){
      ghost.x=ghost.x+10;
    
    }
    
    

    spawnDoor();
    
          
  }

  if(gameState===0){
    doorsGroup.destroyEach();
    climbersGroup.destroyEach();    
    invBlocksGroup.destroyEach();    
    ghost.destroy();    
    tower.destroy();
    textSize(50);
    fill("green");
    text("GAME OVER",170,200);
    
    
  }
  
  if(invBlocksGroup.isTouching(ghost)||ghost.y>600){
      gameState=0;
    }
  
  drawSprites();
}

function spawnDoor(){
  if(frameCount%240===0){
    door=createSprite (300,-50,50,100);
    climber=createSprite(300,0,50,10);
    invBlock=createSprite(300,10,50,2);
    climber.addImage(climberImg);
    door.addImage(doorImg);
    door.velocityY=1;
    climber.velocityY=1;   
    invBlock.velocityY=1; 
    invBlock.width=climber.width;
    door.x=Math.round(random(150,450));
    climber.x=door.x;
    invBlock.x=door.x;
    invBlock.visible=false;
    door.lifetime=800;
    climber.lifetime=800;  
    invBlock.lifetime=800;   
    invBlocksGroup.add(invBlock);
    climbersGroup.add(climber);          
    doorsGroup.add(door);    
    
    
    
  }
  
}

