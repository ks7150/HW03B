let maxDiam =30;
let minDiam = 1;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(255,200,200)
  fill ("red")
  noStroke()
randomSeed(50)
  for (let xpos = 0; xpos <= width; xpos += 0.9*maxDiam) {
    for(let ypos= 0; ypos <=height; ypos += 0.9*maxDiam) {
      let tDiam = random(minDiam, maxDiam);

      ellipse(xpos,ypos,tDiam,tDiam)
    }
  }


  
}
