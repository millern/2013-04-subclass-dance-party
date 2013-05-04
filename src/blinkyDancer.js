var BlinkyDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this,[top, left, timeBetweenSteps]);
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.action = function(){
  this.$node.toggle();
};
