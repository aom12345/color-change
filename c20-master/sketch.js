
var r = 0;
var g = 50;
var b=255;
var x;
// INITIALIZE ALL YOUR VARIABLES
// Ideally you would create 3 variables. red blue green or r, g, b


function setup(){
createCanvas(1400,700);
}


function draw(){
  x=mouseX
  if (x+1) {
    r=r+1.5;
    g=g+1;
    b=b-2.2;
  }
  else if (x-1) {
    r=r-2;
    g=g-1;
    b=b+1.5;
  } 
  background(rgb(r,g,b));                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
  if (r<-5) {
    r=r+1
  }
  else if (r>260) {
    r=r-1
  }
  else if (r=>0||r<=255) {
    if (x+1) {
      r=r+1.5;
      g=g+1;
      b=b-2.2;
    }
    else if (x-1) {
      r=r-2;
      g=g-1;
      b=b+1.5;
    } 
  }
  if (g<-5) {
    g=g+1
  }
  else if (g>260) {
    g=g-1
  }
  else if (g=>0||g<=255) {
    if (x+1) {
      r=r+1.5;
      g=g+1;
      b=b-2.2;
    }
    else if (x-1) {
      r=r-2;
      g=g-1;
      b=b+1.5;
    } 
  }
  if (b<-5) {
    b=b+1
  }
  else if (b>260) {
    b=b-1
  }
  else if (b=>0||b<=255) {
    if (x+1) {
      r=r+10;
      g=g+10;
      b=b-12.2;
    }
    else if (x-1) {
      r=r-2;
      g=g-1;
      b=b+1.5;
    } 
  }
  fill("white")
  ellipse(x,340,20,20); 
  // change the value of Red based on the mouse movement about the X axis
  // change the value of Green based on the mouse movement about the X axis
  // change the value of Blue based on the mouse movement about the X axis

  // Use the map() function to do so. 

  // Pass the values to the background() function you have learnt previously.

  // Create an ellipse that will move around with you mouse about the X axis.
  // Remember to fill the canvas with white paint before creating the ellipse.
}