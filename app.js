const webcamElement = document.getElementById('webcam');
const canvasElement = document.getElementById('canvas');
const start = document.querySelector('.start');
const stop = document.querySelector('.stop');
const download = document.querySelector('a');
const webcam = new Webcam(webcamElement, 'user', canvasElement);

start.addEventListener("click", () => {
  webcam.start();
})
stop.addEventListener("click", () => {
  webcam.stop();
})

download.addEventListener("click", () => {
  var picture = webcam.snap();
  takepicbutton.href = picture;
})
