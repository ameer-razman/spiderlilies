let lily;
let lily2;
let button;
let button2;
let chime;

function preload() {
  chime = loadSound('assets/chimes.wav');
  print('sound loaded');
}

function setup() {
  createCanvas(800, 500);
  lily = createImg('assets/lily.gif');

  button = createButton('->');
  button.position(650, 400);
  button.mousePressed(slide2);

  background('#ffffff');
  textFont('Dosis');
  textSize(25);
  fill('#d41d30')
  text('Just being there with you', 500, 150)
  text('was enough for me.', 500, 180);
  text("I'm grateful for this", 500, 245);
  text('precious time.', 500, 275);
  lily.position(45, 100);
  button.position(650, 400);
}

function slide2() {

  lily.remove();
  button.remove();
  //button = createButton('<-');
  button.position(650, 400);
  button.mousePressed();

  lily2 = createImg('assets/lily-stop.gif');
  lily2.position(-90, 1);
  createCanvas(800, 500);
  chime.playMode('sustain');
  chime.setVolume(1); // can go between 0 - 1
  chime.loop();
  background('#ffffff');
  textFont('Dosis');
  textSize(25);
  fill('#d41d30')
  text('And I hope you find', 500, 150);
  text('those moments of peace.', 500, 180);
  text('Life is hard.', 500, 245);
  text('But you can make it softer.', 500, 275);

}