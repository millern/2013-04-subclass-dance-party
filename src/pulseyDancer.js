var PulseyDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this,[top, left, timeBetweenSteps]);
};

PulseyDancer.prototype = Object.create(Dancer.prototype);
PulseyDancer.prototype.constructor = PulseyDancer;

PulseyDancer.prototype.action = function(){
  this.$node.toggleClass('dancer');
  this.$node.toggleClass('bigDancer');
};
