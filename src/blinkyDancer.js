var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  // this.oldStep = makeDancer.call(this, top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.$node = $('<span class="dancer"></span>');
  //makeDancer.step = makeDancer.call(this, top, left, timeBetweenSteps);
  //this.prototype.oldStep
  this.oldStep = makeDancer.prototype.step;
  this.setPosition(top, left);
  this.step();
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step

  this.oldStep();
  this.$node.toggle();
  //this.step();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
};
//makeBlinkyDancer.prototype.oldStep = this.makeDancer.prototype.step;
// makeBlinkyDancer.prototype.oldStep = makeBlinkyDancer.prototype.step;
