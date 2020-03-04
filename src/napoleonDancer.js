var napoleonDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img class="dynamite" src="https://lh3.googleusercontent.com/proxy/03-Sf63jR6qPiu-SU2-MrRSTRPAfYtVNMXHMMI71XmO1lBc-r9ueKcuXYuC3mHhpn3etERbaItq5CGv8HcEE3z6opJx4GLi-hiN7sUKyJLoWiqSD1V67S7GGbJwvCtMgIyaK6A">');
  this.oldStep = makeDancer.prototype.step;

}

napoleonDancer.prototype = Object.create(makeDancer.prototype);
napoleonDancer.prototype.constructor = napoleonDancer;

napoleonDancer.prototype.step = function(){
  this.oldStep();
  this.step();
}
