status1="";
function preload() {
    img=loadImage('AC.jpg');
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
    objectDetector.detect(img,gotResult);
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