difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup(){
    canvas = createCanvas(500, 350);
    canvas.position(700, 125);

    video = createCapture(VIDEO);
    video.size(500, 450);
    video.position(60, 85);

    poseNet = ml5.poseNet(video, modelReady);
    poseNet.on('pose', gotPoses);
}

function modelReady() {
    console.log('Model Loaded');
}

function gotPoses(results){
    if(results.length > 0){
        rightWristX = results[0].pose.rightWrist.x;
        leftWristX = results[0].pose.leftWrist.x;
        difference = rightWristX - leftWristX;
        document.getElementById('fontSizeSect').innerHTML = "Font Size of the text is: " + floor(difference) + "px";
    }
}

function draw(){
    background("#083166");
    textSize(difference);
    fill("#ffffff");
    text("Prabhaw", 185, 190);
}