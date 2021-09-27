song="";
leftWrisrtX=0;
leftWrisrtY=0;
rightWrisrtX=0;
rightWrisrtY=0;

function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();

    posenet=ml5.poseNet(video,modelloaded);
    posenet.on("pose",got_poses);
}

function draw(){
    image(video,0,0,600,500);
}

function play(){
    song.play();
}

function preload(){
    song=loadSound("music.mp3");
}

function modelloaded(){
    console.log("model Loaded");
}

function got_poses(results){
    if (results.length>0){
        console.log(results);

        leftWrisrtX=results[0].pose.leftWrist.x;

        leftWrisrtY=results[0].pose.leftWrist.y;


        rightWrisrtX=results[0].pose.rightWrist.x;

        rightWrisrtY=results[0].pose.rightWrist.y;

        console.log("left Wirst : x = "+leftWrisrtX + " y = "+leftWrisrtY);

        console.log("right Wirst : x = "+rightWrisrtX + " y = "+rightWrisrtY);
    }
}