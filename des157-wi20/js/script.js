function setup() {
    var myCanvas = createCanvas(1000, 250);
    frameRate(8);
    stroke(255);
    background("#e5edf1");
    myCanvas.parent(mySketch);
  }
  
  function draw() {
    if(mouseIsPressed) {
      fill(255);
    }

    else {
    strokeWeight(5);
    fill("#d6daef");
    }
      var circSize = random(100);
    rect(mouseX, mouseY, circSize, circSize);
  }
  