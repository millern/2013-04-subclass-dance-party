var MoveyDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this,[top, left, timeBetweenSteps]);
};

MoveyDancer.prototype = Object.create(Dancer.prototype);
MoveyDancer.prototype.constructor = MoveyDancer;

MoveyDancer.prototype.action = function(){
  this.$node.css('top', '+=10');
};
