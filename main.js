console.log(ml5.version);

Webcam.set({
    width: 350,
    height: 300,
    img_format: "png",
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach("#camera");

function takeSnapshot() {
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = "<img id='captured_img' src='" + data_uri + "'>"
    });
}

classifier = ml5.imageClassifier("https: //teachablemachine.withgoogle.com/models/zRXrMOkD8/model.json", modelLoaded);

function modelLoaded() {
    console.log("Model is loaded");
}

function check() {
    img = document.getElementById("captured_img");
    classifier.classify(img, getResult);
}

function getResult(error, result) {
    if (error) {
        console.log(error);
    } else {
        console.log(result);
        document.getElementById("object").innerHTML = result[0].label;
        document.getElementById("accuracy").innerHTML = result[0].confidence.toFixed(3);
    }
}