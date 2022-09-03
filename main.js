function preload() {

}

function setup() {
    canvas = createCanvas(500, 450);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(500, 450);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded()
{
    console.log('PoseNet is Loaded...');
}

function gotPoses(results) {
    if(results.length > 0)
    {
        console.log(results);
        console.log("moustache_x = " + results[0].pose.nose.x - 25);
        console.log("moustache_y = " + results[0].pose.nose.y + 20);
        noseX = results[0].pose.nose.x -25;
        noseY = results[0].pose.nose.y +20;
    
    }
}


function draw() {
    image(video, 0, 0, 500, 450);
}
function take_snapshot() {
    save('fake_moustache_image.png');
}