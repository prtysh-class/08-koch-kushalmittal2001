let ax, ay;
let bx, by;
let cx, cy;
let x, y;

function setup() {
  createCanvas(width*5, height*5);
  ax = width / 2;
  ay = 0;
  bx = 0;
  by = height;
  cx = width;
  cy = height;
  x = random(width);
  y = random(height);
  background(0);
  stroke(255);
  strokeWeight(20);
  point(ax, ay);
  point(bx, by);
  point(cx, cy);
}

function draw() {

  for (let i = 0; i < 100; i++) {
    strokeWeight(2);
          stroke(255);

    point(x, y);

    let r = floor(random(3));
    if (r == 0) {
      x = lerp(x, ax, 0.5);
      y = lerp(y, ay, 0.5);

    } else if (r == 1) {
      x = lerp(x, bx, 0.5);
      y = lerp(y, by, 0.5);
    } else if (r == 2) {
      x = lerp(x, cx, 0.5);
      y = lerp(y, cy, 0.5);
    }
  }
}