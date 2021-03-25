
var player;
var target;
var edges;

function setup() {
createCanvas(600,600);

edges=createEdgeSprites();
player = createSprite(40,550,30,30); 
target = createSprite(560,40,30,30);
obs1 = createSprite(300,120,200,20);
obs1.velocityX = 5;
obs2 = createSprite(300,320,200,20);
obs2.velocityX = -5;
target.shapeColor = "blue"
obs2.shapeColor = "red"
obs1.shapeColor = "red"
obs = createSprite(350,120,200,20);
}

function draw() {
background("black");  

player.bounceOff(edges[0]);
player.bounceOff(edges[1]);
player.bounceOff(edges[2]);
player.bounceOff(edges[3]);
obs1.bounceOff(edges[1]);
obs1.bounceOff(edges[0]);
obs2.bounceOff(edges[1]);
obs2.bounceOff(edges[0]);

player.x=mouseX
player.y=mouseY


if(player.isTouching(target)){
  text("YOU WIN",200,200);
}
if(player.isTouching(obs1)){
  obs1.velocityX=0;
  obs2.velocityX=0;
  text("YOU LOSE",200,200);
}
if(player.isTouching(obs2)){
  obs2.velocityX=0;
  obs1.velocityX=0;
  text("YOU LOSE",200,200);
}
  drawSprites();
}

