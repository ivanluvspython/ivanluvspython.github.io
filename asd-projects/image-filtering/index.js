// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads.
$(document).ready(function () {
  render($("#display"), image);
  $("#apply").on("click", applyAndRender);
  $("#reset").on("click", resetAndRender);
});

/////////////////////////////////////////////////////////
//////// event handler functions are below here /////////
/////////////////////////////////////////////////////////

// this function resets the image to its original value; do not change this function
function resetAndRender() {
  reset();
  render($("#display"), image);
}

// this function applies the filters to the image and is where you should call
// all of your apply functions
function applyAndRender() {
  // Multiple TODOs: Call your apply function(s) here
  applyFilterNoBackground(reddify);
  applyFilterNoBackground(decreaseBlue);
  applyFilterNoBackground(increaseGreenByBlue);


  // do not change the below line of code
  render($("#display"), image);
}

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2 & 4: Create the applyFilter function here
function applyFilter(filterFunction) {
  for (let i = 0; i < image.length; i++) {
    // row is storing an array of strings
    let row = image[i]
    for (let j = 0; j < row.length; j++) {
      // rgbString is storing an array of strings
      let rgbString = row[j]
      let rgbNumbers = rgbStringToArray(rgbString)
      filterFunction(rgbNumbers)

      rgbString = rgbArrayToString(rgbNumbers)
      row[j] = rgbString
      //render($("#display"), image);

    }
  }
}

// TODO 7: Create the applyFilterNoBackground function
function applyFilterNoBackground(filterFunction) {
  let backcolor = image[0.[0]]
  for (let i = 0; i < image.length; i++) {
    // row is storing an array of strings
    let row = image[i]
    for (let j = 0; j < row.length; j++) {
      // rgbString is storing an array of strings
      let rgbString = row[j]
      let rgbNumbers = rgbStringToArray(rgbString)
      if (rgbString !== backcolor) {
        filterFunction(rgbNumbers)
        rgbString = rgbArrayToString(rgbNumbers)
        row[j] = rgbString
        //render($("#display"), image);
      }
    }
  }
}

// TODO 5: Create the keepInBounds function
function keepInBounds(b) {
  b = Math.max(b, 0)
  b = Math.min(b, 255)
  return b

}


// TODO 3: Create reddify function
function reddify(a) {
  a[RED] = 200
}

// TODO 6: Create more filter functions
function decreaseBlue(c) {
  c[BLUE] = keepInBounds(c[BLUE] - 50);
}
function increaseGreenByBlue(d) {
  d[GREEN] = keepInBounds(d[BLUE] + d[GREEN]);
}

// CHALLENGE code goes below here
