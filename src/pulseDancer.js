var PulseDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this,[top, left, timeBetweenSteps]);
};

PulseDancer.prototype = Object.create(Dancer.prototype);
PulseDancer.prototype.constructor = PulseDancer;

PulseDancer.prototype.action = function(){
  this.$node.toggleClass('dancer');
  this.$node.toggleClass('bigDancer');
};
