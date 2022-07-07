function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 400);
    canvas.position(560, 150)

    poseNet = ml5.poseNet(video, modelReady);
    poseNet.on('pose', gotPoses);
}

function modelReady() {
    console.log('Model Loaded');
}

function gotPoses(results){
    
}