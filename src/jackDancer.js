var jackDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  //.$node = $('<span class="dancer"></span>')
  this.$node = $('<img class="jack" src="jack.gif" name="jack">');
  this.oldStep = makeDancer.prototype.step;
  this.setPosition(top, left);
};

jackDancer.prototype = Object.create(makeDancer.prototype);
jackDancer.prototype.constructor = jackDancer;

// jackDancer.prototype.step = function() {
//   this.oldStep();
//   this.step();
// };
