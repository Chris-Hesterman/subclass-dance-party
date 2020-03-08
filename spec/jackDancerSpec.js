describe('jackDancer', function() {
  var jackdancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    jackdancer = new jackDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(jackdancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should set random position on dancefloor', function() {
    sinon.spy(jackdancer, 'setPosition');
    jackdancer.setPosition();
    expect(jackdancer.setPosition.called).to.be.true;
  });
});
