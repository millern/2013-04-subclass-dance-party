var BlinkyDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this,[top, left, timeBetweenSteps]);
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.action = function(){
  var current = this.$node.css('opacity');
  if (current === "0") {
    this.$node.css('opacity', 1);
  } else {
    this.$node.css('opacity', 0);
  }
};
