/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()

function runProgram() {
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  const KEY = {
    LEFT: 37,
    RIGHT: 39,
    UP: 38,
    DOWN: 40,
  }
  // Game Item Objects
  var walker = {
    xCor: 0,
    yCor: 0,
    xSpeed: 0,
    ySpeed: 0,
  }

  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown); // change 'eventType' to the type of event you want to handle
  $(document).on('keyup', handleKeyUp);

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */

  function newFrame() {
    repositionGameItem()
    redrawgameItem()
    wallCollision()
  }

  /* 
  Called in response to events.
  */
  function handleKeyDown(event) {

    // CORE LOGIC... 
    if (event.which === KEY.DOWN) {
      walker.ySpeed = +5;
    }
    if (event.which === KEY.LEFT) {
      walker.xSpeed = -5;
    }
    if (event.which === KEY.RIGHT) {
      walker.xSpeed = +5;
    }
    if (event.which === KEY.UP) {
      walker.ySpeed = -5;
    }
  }
  function handleKeyUp(event) {

    // CORE LOGIC... 
    if (event.which === KEY.DOWN) {
      walker.ySpeed = 0;
    }
    if (event.which === KEY.LEFT) {
      walker.xSpeed = 0;
    }
    if (event.which === KEY.RIGHT) {
      walker.xSpeed = 0;
    }
    if (event.which === KEY.UP) {
      walker.ySpeed = 0;
    }
  }



  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  function repositionGameItem() {
    walker.xCor += walker.xSpeed;
    walker.yCor += walker.ySpeed;

  }

  function redrawgameItem() {
    $("#walker").css("left", walker.xCor);
    $("#walker").css("top", walker.yCor);
  }

  function wallCollision() {
    var borderX = $("#board").width();
    var borderY = $("#board").height();
// If Statements 
    if ( walker.xCor > borderX){
      
    }
  }

  function endGame() {
    {
      // stop the interval timer
      clearInterval(interval);

      // turn off event handlers
      $(document).off();
    }

  }
}