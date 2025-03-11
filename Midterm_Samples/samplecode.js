let myFirstSound, mySecondSound, myThirdSound;

function preload() {
  soundFormats('wav', 'mp3');  
  myFirstSound = loadSound('soundThree.wav', soundLoaded);
  mySecondSound = loadSound('soundOne.wav', soundLoaded);
  myThirdSound = loadSound ('soundTwo.wav', soundLoaded);
}

function setup() {
  createCanvas(400, 200);
  textSize(20);
  textAlign(CENTER, CENTER);
  text("Move your cursor to the 'Preview' section\nPress 'y', 'e', or 'n' to play sound", width / 2, height / 2);
}

function soundLoaded() {
  console.log("Sound successfully loaded!");
}

function keyPressed() {
  console.log("Key pressed:", key);
  if (key.toLowerCase() === 'y') {
    playCustomSoundOne();
  }
  else if (key.toLowerCase() === 'e') {
    playCustomSoundTwo();
  }
  else if (key.toLowerCase() === 'n') {
    playCustomSoundThree();
  }
}
function playCustomSoundOne() {
  if (myFirstSound.isLoaded()) {
    myFirstSound.play();
    console.log("Sound played.");
  } 
    else {
    console.log("Sound not loaded yet.");
  }
}
function playCustomSoundTwo() {
  if (mySecondSound.isLoaded()) {
    mySecondSound.play();
    console.log("Sound played.");
  }
    else {
    console.log("Sound not loaded yet.");
  }
}
function playCustomSoundThree() {
  if (myThirdSound.isLoaded()) {
    myThirdSound.play();
    console.log("Sound played.")
  }
    else {
    console.log("Sound not loaded yet.");
  }
}