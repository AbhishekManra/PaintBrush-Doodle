// function setup() {
//   createCanvas(400, 400);
// }

// function draw() {
//   background(220);
// }
// targeting our canvas
function _(selector){
  return document.querySelector(selector);
}
// creating canvas
function setup(){
  var canvas = createCanvas(650,600);
  canvas.parent("canvas-wrapper");
  background(255);
}
// mouse drag to create a draw functionality
function mouseDragged(){
  let type = _("#pen-pencil").checked?"pencil":"brush";
  let size = parseInt(_('#pen-size').value);
  let color = _('#pen-color').value;
  fill(color);
  stroke(color);
  if(type=='pencil'){
    line(pmouseX,pmouseY,mouseX,mouseY)
  }else{
    ellipse(mouseX,mouseY,size,size);
  }
}
// to capture the screenshot
function capture() {
  save("Picture.png");
}