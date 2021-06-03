var skeleton , skeleton1 ;
var track , track1;
var bg;
var boy1,boy2 , boy;

function preload() {
//skeleton=loadAnimation("images/skeleton2.png")
    track=loadImage("images/track.png")
    //bg=loadImage("images/1.jpeg")
    boy1=loadImage("images/boy1.png")
}

function setup() {
createCanvas(800,800)

//skeleton1=createSprite(100,100,50,50)
//skeleton1.addAnimation("skeleton",skeleton);
track1=createSprite(400,400,200,200)
track1.addImage("track",track);
track1.scale=3
track1.velocityY=1;
console.log(track1.y)
boy=createSprite(300,200,50,50)
boy.addImage("boy",boy1);
}

function draw() {
background("green")

if( track1.y > 400) {
    track1.y=100
}




drawSprites();

}