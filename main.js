img = "";

function preload() {
  img = loadImage("Google__G__Logo.svg.png");
}

function setup() {
    canvas = createCanvas(590, 420);
    canvas.position(225, 250);
    
}

function draw() {
    image(img, 210, 140, 150, 150);
    fill("green");
    rect(45, 10, 500, 15);
    rect(45, 380, 500, 15);
    rect(45, 10, 15, 380);
    rect(545, 10, 15, 380);
    fill("red");
    circle(60, 30, 50);
    circle(60, 375, 50);
    circle(550, 30, 50);
    circle(550, 375, 50);
}

function take_snapshot() {
    save("my_image.png");
}