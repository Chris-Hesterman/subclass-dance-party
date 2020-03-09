// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  // this.top = top;
  // this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.setPosition(top, left);
  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  // dancer.setPosition(top, left)
  //this.lineUp = makeDancer.prototype.lineUp('300px');
};

makeDancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  // var newThis = this;
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

//step.call(makeDancer);

makeDancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };

  this.$node.css(styleSettings);
};

// makeDancer.prototype.lineUp = function(top, left) {
//   // Use css top and left properties to position our <span> tag
//   // where it belongs on the page. See http://api.jquery.com/css/
//   //
//   var styleSettings = {
//     top: top,
//     left: '200px'
//   };
// };
