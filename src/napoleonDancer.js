var napoleonDancer = function (top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);
  //this.$node = $('<span class="dancer"></span>')
  this.$node = $('<img class="dynamite" src="../media/napoleon.gif">');
  this.oldStep = makeDancer.prototype.step;
  this.setPosition(top, left);
};

napoleonDancer.prototype = Object.create(makeDancer.prototype);
napoleonDancer.prototype.constructor = napoleonDancer;

napoleonDancer.prototype.step = function (){
  this.oldStep();
  this.step();
};
