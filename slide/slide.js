const picArray = [
  { src: "./images/spring.jpg", title: "spring" },
  { src: "./images/summer.jpg", title: "summer" },
  { src: "./images/Falls.jpg", title: "falls" },
  { src: "./images/winter.jpg", title: "winter" },
];

let counter = 0;

function changePicture() {
  if (counter < picArray.length) {
    document.getElementById("pics").src = picArray[counter].src;
    document.getElementById("pic-title").innerHTML = picArray[counter].title;
    counter++;
  } else {
    document.getElementById("pics").src = picArray[0].src;
    document.getElementById("pic-title").innerHTML = picArray[0].title;
    counter = 1;
  }
}
let playingID = 0;

function playSlideShow() {
  if (playingID == 0) {
    document.getElementById("playButton").innerHTML = "STOP";
    playingID = setInterval(changePicture, 1000);
  } else {
    document.getElementById("playButton").innerHTML = "START";
    clearInterval(playingID);
    playingID = 0;
  }
}
