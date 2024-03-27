function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(550, 550);
    canvas.position(560, 150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw(){
    background('#969A97');
    textSize(difference);
    fill("red");
    text("Daniel",25,150);
}
function modelLoaded(){
    console.log('PoseNet is Intialized!');
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
    }
    leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("LeftWristX = "+leftWristX+"RightWristX = "+rightWristX+"difference = "+difference);
}