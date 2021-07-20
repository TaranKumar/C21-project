var canvas;
var music;
var green, red, orange, blue;
var topSi,bottomSi,leftSi,rightSi;
var box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //side walls sprites
    topSi = createSprite(400,-50,1000,50);

    bottomSi = createSprite(400,650,1000,50);

    leftSi = createSprite(-50,300,50,800);

    rightSi = createSprite(850,300,50,800);

    //create 4 different surfaces
    green = createSprite(700,580,190,50);
    green.shapeColor = "green";

    red = createSprite(500,580,190,50);
    red.shapeColor = "red";

    blue = createSprite(300,580,190,50);
    blue.shapeColor = "blue";

    orange = createSprite(100,580,190,50);
    orange.shapeColor = "orange";

    //create box sprite and give velocity
    box = createSprite(random(20,750),200,50,50);
    box.shapeColor = "white"
    box.velocityX = 20;
    box.velocityY = 20;
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite

    music.play();


    //add condition to check if box touching surface and make it box
    if(box.isTouching(red)){
        box.shapeColor = "red";
        box.velocityX = 0;
        box.velocityY = 0;
        music.stop();
    }

    if(box.isTouching(orange) && box.bounceOff(orange)){
        box.shapeColor = "orange";
    }
    
    if(box.isTouching(green) && box.bounceOff(green)){
        box.shapeColor = "green";
    }

    if(box.isTouching(blue) && box.bounceOff(blue)){
        box.shapeColor = "blue";
    }
    
    box.bounceOff(topSi);

    box.bounceOff(bottomSi);

    box.bounceOff(leftSi);
    
    box.bounceOff(rightSi);
   
    

    drawSprites();
}
