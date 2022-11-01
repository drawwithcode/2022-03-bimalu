let myImage;
let mySound1;
let mySound2;
let mySound3;

function preload() {
  myImage = loadImage("./assets/images/SaxPlayer.png");
  mySound1 = loadSound("./assets/sounds/Track 1.flac");
  mySound2 = loadSound("./assets/sounds/Track 2.flac");
  mySound3 = loadSound("./assets/sounds/Track 3.flac");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  background("#2f2f2f");
  backgroundImage(myImage);
}

function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    mySound2.stop();
    mySound3.stop();
    mySound1.play();
  } else if (keyCode === LEFT_ARROW) {
    mySound1.stop();
    mySound3.stop();
    mySound2.play();
  } else if (keyCode === UP_ARROW) {
    mySound1.stop();
    mySound2.stop();
    mySound3.play();
  } else if (keyCode === BACKSPACE) {
    mySound1.stop();
    mySound2.stop();
    mySound3.stop();
  }
}

function draw() {
  fill("sandybrown");
  ellipse(windowWidth / 2, windowHeight / 2.7, 450, 450);

  fill("steelblue");
  ellipse(windowWidth / 1.65, (windowHeight / 3.5) * 2, 300, 300);

  push();
  myImage.filter("posterize", 8);
  image(
    myImage,
    windowWidth / 2.5,
    windowHeight / 5,
    myImage.width / 2,
    myImage.height / 2
  );
  pop();

  fill("ivory");
  ellipse(windowWidth / 1.9, (windowHeight / 2.65) * 2, 200, 200);

  fill("darkolivegreen");
  ellipse((windowWidth / 4.6) * 2, (windowHeight / 2.5) * 2, 150, 150);

  noStroke();
  fill("#000000");
  rect(mouseX - 2, mouseY, 3, 30);
  fill("ivory");
  rect(mouseX, mouseY, 7, 50);
  fill("#000000");
  rect(mouseX, mouseY, 4, 30);

  textFont("Abril Fatface");
  textSize(84);
  textAlign(CENTER);
  fill("slateblue");
  text("JAZZ", windowWidth / 3, windowHeight / 5);

  textFont("Open Sans");
  textSize(14);
  textAlign(CENTER);
  fill("ivory");
  text(
    "Press → for Jazz Funk, ↑ for Smooth Jazz, ←, for Experimental Jazz.",
    windowWidth / 2,
    (windowHeight / 2) * 1.87
  );
  text("Press backspace to stop.", windowWidth / 2, (windowHeight / 2) * 1.95);
}

function backgroundImage(img) {}
