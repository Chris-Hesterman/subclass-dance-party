var napoleonDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img class="dynamite" src="../media/napoleon.gif">');
  this.oldStep = makeDancer.prototype.step;

}

napoleonDancer.prototype = Object.create(makeDancer.prototype);
napoleonDancer.prototype.constructor = napoleonDancer;

napoleonDancer.prototype.step = function(){
  this.oldStep();
  this.step();
}
