function setup() {
    var myCanvas = createCanvas(900, 250);
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
    strokeWeight(3);
    fill("#d6daef");
    }
      var circSize = random(100);
    rect(mouseX, mouseY, circSize, circSize);
  }
