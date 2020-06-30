let values = [];
// i and j needs to be global because we are using them in 2 different functions and they'll be out of scope otherwise
let i = 0;
let j = 0;

function setup() {
  // TO CHANGE THE NUMBER OF BARS TYPE HERE
  createCanvas(windowWidth, windowHeight);
  values = new Array(width);
  for (let i = 0; i < values.length; i++) {
    values[i] = random(height);
  }
}

function draw() {
  background(0);

  if (i < values.length) {
    for (let j = 0; j < values.length - i - 1; j++) {
      let a = values[j];
      let b = values[j + 1];
      if (a > b) {
        swap(values, j, j + 1);
      }
    }
  } else {
    console.log('finished');
    noLoop();
  }
  i++;

  for (let i = 0; i < values.length; i++) {
    // CHANGE STROKE HERE
    stroke(255);
    line(i, height, i, height - values[i]);
  }
}

function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}
