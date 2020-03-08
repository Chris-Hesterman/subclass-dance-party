var napoleonDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  //this.$node = $('<span class="dancer"></span>')
  this.$node = $('<img class="dynamite" src="napoleon.gif" name="napoleon">');
  this.oldStep = makeDancer.prototype.step;
  //this.lineUp = napoleonDancer.prototype.lineUp();
  this.setPosition(top, left);
  this.step();
};

napoleonDancer.prototype = Object.create(makeDancer.prototype);
napoleonDancer.prototype.constructor = napoleonDancer;

napoleonDancer.prototype.step = function() {
  this.oldStep();
  console.log('hi');
  setTimeout(this.step.bind(this), 1000);
};

// napoleonDancer.prototype.lineUp = function() {
//   // var top = $('body').height() * Math.random();
//   // var left = '200px';

//   // var styleSettings = {
//   //   top: top,
//   //   left: left
//   // };
//   this.$node.addClass('napoleon-lineup');
// };
