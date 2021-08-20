noseY="";
noseX="";

function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent("canvas");
	instializeInSetup(mario);
	video=createCapture(VIDEO);
	video.parent("game_console");
	video.size(800,400);

	poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses);
}

function modelLoaded(){
	console.log("M0dE! !0Ded");
}

function gotPoses(){
	if(results.length>0){
		noseX=results[0].pose.nose.x;
		noseY=results[0].pose.nose.y;
	}
}

function draw() {
	game()
}
