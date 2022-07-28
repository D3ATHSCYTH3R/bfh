function preload(){
classifier=ml5.imageClassifier('DoodleNet');
}
function setup(){
    canvas=createCanvas(400,320);
    canvas.center();
    background("white");
    canvas.mouseReleased(classifyCanvas);
    synth=window.speechSynthesis;
}
function draw(){
strokeWeight(9);
stroke(0);
if(mouseIsPressed){
    line(pmouseX,pmouseY,mouseX,mouseY);
}
}

function b(){
    window.location="e.html";
}
function classifyCanvas(){
    classifier.classify(canvas,gotResults);
}
function gotResults(error,results){
    if(error){
        console.error(error);
    }
    console.log(results);
    document.getElementById('o1').innerHTML='Name: '+results[0].label;
    document.getElementById('c1').innerHTML='Accuracy: '+Math.round(results[0].confidence*100)+'%';
    ws=new SpeechSynthesisUtterance(results[0].label);
    synth.speak(ws);
}
function b1(){
     background("white");
}