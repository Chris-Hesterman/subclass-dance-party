var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  // this.oldStep = makeDancer.call(this, top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.$node = $('<img class="dancer" src="explosion.gif" name="explosion">');
  //makeDancer.step = makeDancer.call(this, top, left, timeBetweenSteps);
  //this.prototype.oldStep
  this.oldStep = makeDancer.prototype.step;

  //this.setPosition(top, left);

  this.step();

};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  this.oldStep();
  this.$node.toggle();
  //console.log('hello')

  this.setPosition(
    $('.dancefloor').height() * Math.random(),
    $('.dancefloor').width() * Math.random(),
  )

  // setInterval(this.setPosition.bind(this,
  //   $('.dancefloor').height() * Math.random(),
  //   $('.dancefloor').width() * Math.random(),
  // ), 1500);
  //detect node collision by name property attribute
    //delete this node
};

// makeBlinkyDancer.prototype.detect = function(){
//   //console.log(this.$node[0].name);
//   console.log(.name);
// };