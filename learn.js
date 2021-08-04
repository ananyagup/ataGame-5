let c = "#c9decf";
let colorArr = ["#f5ddad", "#f1bcae", "#c9decf"];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function mouseMoved() {
  fill(c);
  ellipse(mouseX, mouseY, 50);
}

function mouseClicked() {
  c = random(colorArr)
}
