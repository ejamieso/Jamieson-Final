function setup() {
  createCanvas(400, 400);
}
var xPos = 200;
var yPos = 200;

function draw() {
  background(220);

    xPos += 2;
    yPos += 2;
    background(29, 40, 115);
    fill(255, 242, 0);
    ellipse(xPos-150, yPos-150, 10, 10);
    
    // second star
    fill(219, 219, 40);
    ellipse(xPos+50, yPos+50, 10, 10);
    // third star
    fill(250, 250, 245);
    ellipse(xPos-100, yPos-100, 10, 10);
    // moon
    fill(122, 113, 122);
    ellipse(100,100,100,100);
    // building 1
    fill(46, 43, 43);
    rect(100,230,50,350);
    // building 1 window
    fill(212, 217, 56);
    rect(130,260,10,10);
    // building 1 window 2
    fill(212, 217, 56);
    rect(110,260,10,10);
    // building 1 door
    fill(112, 79, 14);
    rect(120,370,10,30);
    
};
