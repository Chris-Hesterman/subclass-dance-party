describe('napoleonDancer', function() {
  var napoleondancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    napoleondancer = new napoleonDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(napoleondancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should set random position on dancefloor', function() {
    sinon.spy(napoleondancer, 'setPosition');
    napoleondancer.setPosition();
    expect(napoleondancer.setPosition.called).to.be.true;
  });
});
