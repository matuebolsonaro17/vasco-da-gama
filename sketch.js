function setup() {
    createCanvas(800, 800);
   background("black");
  }
  
  function draw() {
   
    stroke("purple");
    fill("yellow");
  
    // console.log(mouseIsPressed);
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 30);
    }
  }
  