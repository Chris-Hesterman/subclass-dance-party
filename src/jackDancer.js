var jackDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img class="jack" src="../media/jack.gif">');
  this.oldStep = makeDancer.prototype.step;

}

jackDancer.prototype = Object.create(makeDancer.prototype);
jackDancer.prototype.constructor = jackDancer;

jackDancer.prototype.step = function(){
  this.oldStep();
  this.step();
}