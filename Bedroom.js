status1="";
object = [];
function preload() {
    img=loadImage('Bedroom.webp');
}
function setup() {
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status : Dectecting Objects";
}
function modelLoaded() {
    console.log("model loaded!");
    status1=true;
}
function gotResult(error,results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
    object=results;
} 
function back() {
    window.location.href='index.html';
}
function draw() {
    image(img,0,0,640,420);
  if(status1 !="") {
      r=random(255);
      g=random(255);
      b=random(255);
      objectDetector.detect(img,gotResult);
      for (i=0; i < object.length; i++) {
          document.getElementById("status").innerHTML="Status : Object Detected";
          document.getElementById("note").innerHTML="Number of objects detected are: "+object.length;
fill(r,g,b);
percent=floor(object[i].confidence * 100);
text(object[i].label+""+percent+"%", object[i].x+15, object[i].y+15);
noFill();
stroke(r,g,b);
rect(object[i].x, object[i].y, object[i].width, object[i].height);
      }
  }
}